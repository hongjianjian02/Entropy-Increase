// priority: -1000
// 在本包坩埚配方覆盖完成后，将最终配方声明转换为 MMCE 自动炼金配方。

const EI_RING_CRUCIBLE = Java.loadClass('com.leclowndu93150.thaumaturge.content.recipe.crucible.CrucibleRecipe')
const EI_RING_RESEARCH = Java.loadClass('com.leclowndu93150.thaumaturge.api.recipe.ResearchGate')
const EI_RING_RESEARCH_PROGRESS = Java.loadClass('com.leclowndu93150.thaumaturge.content.research.ResearchProgressionEvents')
const EI_RING_ASPECT_INSTANCE = Java.loadClass('com.leclowndu93150.thaumaturge.api.aspect.AspectInstance')
const EI_RING_ASPECT_TYPE = Java.loadClass('com.leclowndu93150.thaumaturge.api.aspect.IAspect')
const EI_RING_DATA_COMPONENTS = Java.loadClass('com.leclowndu93150.thaumaturge.registry.TTDataComponents')
const EI_RING_CONDITIONAL_OPS = Java.loadClass('net.neoforged.neoforge.common.conditions.ConditionalOps')
const EI_RING_SERVER_HOOKS = Java.loadClass('net.neoforged.neoforge.server.ServerLifecycleHooks')
const EI_RING_STAGE_HOLDER = Java.loadClass('com.alessandro.astages.api.holder.AHolder')
const EI_RING_STAGES = Java.loadClass('com.alessandro.astages.api.util.AStagesUtils')
const EI_RING_ITEM_REGISTRY = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries').ITEM
const EI_RING_REGISTRIES = Java.loadClass('net.minecraft.core.registries.Registries')
const EI_RING_RESOURCE_LOCATION = Java.loadClass('net.minecraft.resources.ResourceLocation')
const EI_RING_REPLACEMENT_LOADER = Java.loadClass('com.mafuyu404.oneenoughitem.util.MixinUtils$ReplacementLoader')
const EI_RING_REPLACEMENT_INDEX = Java.loadClass('com.mafuyu404.oneenoughitem.util.ReplacementIndex')
const EI_RING_IDENTITY_MAP = Java.loadClass('java.util.IdentityHashMap')

const EI_RING_MACHINE = 'mmcece:crucible'
const EI_RING_RECIPE_PREFIX = 'kubejs:ring_crucible/'
const EI_RING_DURATION_TICKS = 100
const EI_RING_REQUIRED_STAGE = 'chapter4'
const EI_RING_CRYSTAL_ASPECT = EI_RING_DATA_COMPONENTS.CRYSTAL_ASPECT.get()

function eiRingIsCrucibleJson(json) {
  return json.has('type') && String(json.get('type').getAsString()) === 'thaumaturge:crucible'
}

function eiRingFinalCrucibleRecipes(event) {
  // forEachRecipe 只遍历 originalRecipes，不能用它导入新增/覆盖的黄铜和天罡配方。
  let recipes = Object.create(null)
  let addedIds = Object.create(null)
  let originals = event.originalRecipes.values().iterator()
  while (originals.hasNext()) {
    let recipe = originals.next()
    if (!recipe.removed) {
      recipes[String(recipe.getId())] = recipe
    }
  }

  let added = event.addedRecipes.iterator()
  while (added.hasNext()) {
    let recipe = added.next()
    if (recipe.removed) {
      continue
    }
    let id = String(recipe.getId())
    let previous = addedIds[id]
    if (previous && (eiRingIsCrucibleJson(previous.json) || eiRingIsCrucibleJson(recipe.json))) {
      throw new Error('[环形炼金坩埚] 脚本存在重复的坩埚配方 ID：' + id)
    }
    addedIds[id] = recipe
    recipes[id] = recipe
  }

  // 先完成快照，再 build；避免向正在遍历的 addedRecipes 添加本次机器配方。
  let finalRecipes = []
  Object.keys(recipes).sort().forEach(id => {
    let recipe = recipes[id]
    recipe.serializeChanges()
    if (eiRingIsCrucibleJson(recipe.json)) {
      finalRecipes.push({ id: id, json: recipe.json.deepCopy() })
    }
  })
  return { all: recipes, crucible: finalRecipes }
}

function eiRingAccessHandler(research) {
  return preparation => {
    let ownerId = preparation.getContext().ownership().ownerId()
    let serverStage = EI_RING_STAGES.hasStage(EI_RING_STAGE_HOLDER.server(), EI_RING_REQUIRED_STAGE)
    let ownerStage = ownerId.isPresent() && EI_RING_STAGES.hasStage(
      EI_RING_STAGE_HOLDER.player(ownerId.get()), EI_RING_REQUIRED_STAGE
    )
    if (!serverStage && !ownerStage) {
      preparation.preventProgressing('环形炼金坩埚需要完成第四章（chapter4）')
      return
    }
    if (!research.isPresent()) {
      return
    }

    let server = EI_RING_SERVER_HOOKS.getCurrentServer()
    let owner = server !== null && ownerId.isPresent() ? server.getPlayerList().getPlayer(ownerId.get()) : null
    if (owner === null) {
      preparation.preventProgressing('需要控制器所有者在线以核对炼金研究')
      return
    }
    if (!EI_RING_RESEARCH.passes(owner, research.get())) {
      preparation.preventProgressing('控制器所有者尚未满足研究：' + String(research.get().entry()))
    }
  }
}

function eiRingItemReplacements(event, itemTags) {
  // OEI 的 prepare 映射尚未展开标签；MMCE staging 前才会切换到已展开的缓存。
  // 用本轮数据包和标签提前解析最终物品，避免同一 JSON 在两次解码时产生不同输入/输出。
  let replacements = new EI_RING_IDENTITY_MAP()
  let entries = EI_RING_REPLACEMENT_LOADER.loadCurrentSnapshot(event.resourceManager).dataMap().entrySet().iterator()
  while (entries.hasNext()) {
    let entry = entries.next()
    let sourceId = String(entry.getKey())
    let targetId = EI_RING_RESOURCE_LOCATION.parse(String(entry.getValue()))
    if (!EI_RING_ITEM_REGISTRY.containsKey(targetId)) {
      continue
    }
    let target = EI_RING_ITEM_REGISTRY.get(targetId)
    if (sourceId.startsWith('#')) {
      let holders = itemTags.get(EI_RING_RESOURCE_LOCATION.parse(sourceId.substring(1)))
      if (holders !== null) {
        let iterator = holders.iterator()
        while (iterator.hasNext()) {
          eiRingPutReplacement(replacements, iterator.next().value(), target)
        }
      }
    } else {
      let id = EI_RING_RESOURCE_LOCATION.parse(sourceId)
      if (EI_RING_ITEM_REGISTRY.containsKey(id)) {
        eiRingPutReplacement(replacements, EI_RING_ITEM_REGISTRY.get(id), target)
      }
    }
  }
  return new EI_RING_REPLACEMENT_INDEX(replacements)
}

function eiRingPutReplacement(replacements, source, target) {
  if (replacements.containsKey(source) && replacements.get(source) !== target) {
    throw new Error('[环形炼金坩埚] OEI 对同一物品指定了不同统一目标：' + String(EI_RING_ITEM_REGISTRY.getKey(source)))
  }
  replacements.put(source, target)
}

function eiRingUnifiedStack(stack, replacements) {
  let target = replacements.replacementOf(stack.getItem())
  // transmuteCopy 保留数量与数据组件补丁，不把带组件的产物重建为默认物品栈。
  return target === null ? stack : stack.transmuteCopy(target)
}

function eiRingCatalystCandidates(catalyst, source, itemTags, replacements) {
  let catalystJson = source.json.get('catalyst').getAsJsonObject()
  let candidates = []
  let seen = Object.create(null)

  function addCandidate(itemId, stack, needsChecker) {
    stack = eiRingUnifiedStack(stack, replacements)
    itemId = String(EI_RING_ITEM_REGISTRY.getKey(stack.getItem()))
    if (!seen[itemId]) {
      seen[itemId] = true
      candidates.push({ id: itemId, stack: stack, needsChecker: needsChecker })
    }
  }

  if (!catalyst.isCustom()) {
    let tagSelector = catalystJson.get('tag')
    if (tagSelector !== null && tagSelector.isJsonPrimitive() && tagSelector.getAsJsonPrimitive().isString()) {
      let tagId = tagSelector.getAsString()
      let holders = itemTags.get(EI_RING_RESOURCE_LOCATION.parse(tagId))
      if (holders !== null) {
        let iterator = holders.iterator()
        while (iterator.hasNext()) {
          let itemId = String(EI_RING_ITEM_REGISTRY.getKey(iterator.next().value()))
          let stack = Item.of(itemId)
          if (stack.isEmpty()) {
            throw new Error('催化材料标签包含无法创建的物品：' + itemId + '（' + source.id + '）')
          }
          addCandidate(itemId, stack, false)
        }
      }
      if (candidates.length === 0) {
        throw new Error('催化材料标签没有可显示的物品候选：#' + tagId + '（' + source.id + '）')
      }
      return { candidates: candidates, tooltip: '催化材料标签：#' + tagId }
    }

    let itemSelector = catalystJson.get('item')
    if (itemSelector !== null && itemSelector.isJsonPrimitive() && itemSelector.getAsJsonPrimitive().isString()) {
      let itemId = itemSelector.getAsString()
      let item = Item.of(itemId)
      if (item.isEmpty()) {
        throw new Error('催化材料物品不存在：' + itemId + '（' + source.id + '）')
      }
      addCandidate(itemId, item, false)
    } else {
      // MMCE 配方页不绘制 IngredientArray；展开当前 registry 中的原 Ingredient 候选。
      let ingredientArray = IngredientArrayBuilder.newBuilder()
      ingredientArray['addIngredient(net.minecraft.world.item.crafting.Ingredient,java.lang.Number)'](catalyst, 1)
      let alternatives = ingredientArray.snapshot().alternatives()
      for (let i = 0; i < alternatives.size(); i++) {
        let item = alternatives.get(i).item()
        if (!item.isPresent() || item.get().isEmpty()) {
          throw new Error('催化材料包含无法显示的非物品候选：' + source.id)
        }
        let stack = item.get().copyWithCount(1)
        let itemId = String(EI_RING_ITEM_REGISTRY.getKey(stack.getItem()))
        addCandidate(itemId, stack, true)
      }
      if (candidates.length === 0) {
        throw new Error('催化材料没有可显示的物品候选：' + source.id)
      }
    }

    return { candidates: candidates, tooltip: null }
  }

  // 自定义 Ingredient 不能转成 MMCE 的原生候选快照；JSON 提供基础 ID，原 test 保留组件谓词。
  let itemSelector = catalystJson.get('items')
  let candidateIds = []
  if (itemSelector === null) {
    throw new Error('自定义催化材料缺少 items 候选：' + source.id)
  } else if (itemSelector.isJsonPrimitive() && itemSelector.getAsJsonPrimitive().isString()) {
    candidateIds.push(itemSelector.getAsString())
  } else if (itemSelector.isJsonArray()) {
    let itemArray = itemSelector.getAsJsonArray()
    for (let i = 0; i < itemArray.size(); i++) {
      let item = itemArray.get(i)
      if (!item.isJsonPrimitive() || !item.getAsJsonPrimitive().isString()) {
        throw new Error('自定义催化材料包含非字符串 items 候选：' + source.id)
      }
      candidateIds.push(item.getAsString())
    }
  } else {
    throw new Error('自定义催化材料的 items 必须是物品 ID 或 ID 列表：' + source.id)
  }

  for (let i = 0; i < candidateIds.length; i++) {
    let itemId = candidateIds[i]
    if (!seen[itemId]) {
      let candidate = Ingredient.of(itemId)
      if (candidate.isEmpty()) {
        throw new Error('自定义催化材料候选物品不存在：' + itemId + '（' + source.id + '）')
      }
      let stack = Item.of(itemId)
      if (stack.isEmpty()) {
        throw new Error('自定义催化材料候选物品无法创建输入栈：' + itemId + '（' + source.id + '）')
      }
      addCandidate(itemId, stack, true)
    }
  }
  if (candidates.length === 0) {
    throw new Error('自定义催化材料没有可展示的基础物品候选：' + source.id)
  }
  let catalystTooltip
  if (source.id === 'thaumaturge:crucible/bottle_taint') {
    catalystTooltip = '催化材料：含 10 点污染源质的小瓶；空瓶不能代替'
  } else if (source.id === 'thaumaturge:crucible/focus_1') {
    catalystTooltip = '催化材料：秩序源质晶体；其他要素的晶体不能代替'
  } else {
    catalystTooltip = '催化材料须满足原坩埚配方的特殊条件'
  }
  return { candidates: candidates, tooltip: catalystTooltip + '；候选物品：' + candidates.map(candidate => candidate.id).join('、') }
}

function eiRingAddCatalyst(builder, catalyst, candidate) {
  let input = builder.addItemInputIgnoringComponents(candidate.stack)
  if (candidate.needsChecker) {
    input.setNBTChecker((context, stack) => catalyst.test(stack))
  }
}

function eiRingAddOutput(builder, recipe, replacements) {
  let result = eiRingUnifiedStack(recipe.rawResult().copy(), replacements)
  let crystalAspect = result.get(EI_RING_CRYSTAL_ASPECT)
  if (crystalAspect !== null) {
    let aspectKey = crystalAspect.aspect().unwrapKey()
    if (!aspectKey.isPresent()) {
      throw new Error('晶体产物的要素没有 registry key')
    }
    let key = aspectKey.get()
    let amount = crystalAspect.amount()

    // MMCE snapshots output prototypes against a different registry set during compilation.
    result.remove(EI_RING_CRYSTAL_ASPECT)
    builder['addOutput(net.minecraft.world.item.ItemStack)'](result)
      ['addItemModifier(com.lw.modularmachine.api.recipe.RecipeItemCallbacks$Modifier)']((context, stack) => {
        let server = EI_RING_SERVER_HOOKS.getCurrentServer()
        if (server === null) {
          throw new Error('无法获取服务器 registry 来恢复晶体要素')
        }
        let registry = server.registryAccess().registryOrThrow(EI_RING_ASPECT_TYPE.REGISTRY_KEY)
        let holder = registry.getHolderOrThrow(key)
        stack.set(EI_RING_CRYSTAL_ASPECT, new EI_RING_ASPECT_INSTANCE(holder, amount))
        return stack
      })
    return result
  }

  builder['addOutput(net.minecraft.world.item.ItemStack)'](result)
  return result
}

function eiRingCreditHandler(recipeId, result) {
  return context => {
    let ownerId = context.ownership().ownerId()
    let server = EI_RING_SERVER_HOOKS.getCurrentServer()
    let owner = server !== null && ownerId.isPresent() ? server.getPlayerList().getPlayer(ownerId.get()) : null
    if (owner === null) {
      return
    }
    let finished = context.before()
    for (let i = 0; i < finished.size(); i++) {
      let run = finished.get(i)
      if (String(run.recipeId()) === recipeId && run.progress() >= run.duration()) {
        // 原生研究只记录“制造过这个物品”的布尔见证，不按数量累计。
        // 本桥接输出固定物品且没有物品替换回调；不凭并行数虚构制作统计。
        EI_RING_RESEARCH_PROGRESS.recordCrafted(owner, result.copy())
        return
      }
    }
  }
}

ServerEvents.recipes(event => {
  let finalRecipes = eiRingFinalCrucibleRecipes(event)
  let itemTags = event.registries.getAllTags(EI_RING_REGISTRIES.ITEM)
  let replacements = eiRingItemReplacements(event, itemTags)
  let codec = EI_RING_CONDITIONAL_OPS.createConditionalCodec(EI_RING_CRUCIBLE.MAP_CODEC.codec())
  let plans = []
  let conditionalSkipped = 0
  let generatedIds = Object.create(null)
  let generatedCount = 0

  // 先解码所有声明，出错时明确指出来源，避免默默漏掉某条配方。
  finalRecipes.crucible.forEach(source => {
    let recipeId = EI_RING_RECIPE_PREFIX + source.id.replace(':', '/')
    if (finalRecipes.all[recipeId]) {
      throw new Error('[环形炼金坩埚] 机器配方 ID 已被占用：' + recipeId)
    }
    try {
      let decoded = codec.parse(event.ops.json(), source.json).getOrThrow()
      if (decoded.isPresent()) {
        let recipe = decoded.get()
        plans.push({
          id: recipeId,
          source: source,
          recipe: recipe,
          catalyst: eiRingCatalystCandidates(recipe.catalyst(), source, itemTags, replacements)
        })
      } else {
        conditionalSkipped++
      }
    } catch (error) {
      throw new Error('[环形炼金坩埚] 无法读取 ' + source.id + '：' + String(error))
    }
  })

  plans.forEach(plan => {
    try {
      let recipe = plan.recipe
      let access = eiRingAccessHandler(recipe.researchGate())
      plan.catalyst.candidates.forEach((candidate, index) => {
        let variantId = index === 0 ? plan.id : plan.id + '/catalyst/' + candidate.id.replace(':', '/')
        if (finalRecipes.all[variantId] || generatedIds[variantId]) {
          throw new Error('机器配方 ID 已被占用：' + variantId)
        }
        generatedIds[variantId] = true

        let builder = RecipeBuilder.newBuilder(event, variantId, EI_RING_MACHINE, EI_RING_DURATION_TICKS)
        eiRingAddCatalyst(builder, recipe.catalyst(), candidate)
        let output = eiRingAddOutput(builder, recipe, replacements)

        let aspects = recipe.aspects().entries()
        for (let i = 0; i < aspects.size(); i++) {
          let aspect = aspects.get(i)
          builder.addAspectInput(String(aspect.aspect().unwrapKey().get().location()), aspect.amount())
        }
        builder.setParallelized(true)
          .setFailureAction('still')
          .addPreCheckHandler(access)
          .addPreTickHandler(access)
          .addFinishHandler(eiRingCreditHandler(variantId, output.copy()))
          .addRecipeTooltip('自动炼金：催化材料 + 源质，基准耗时 5 秒')
          .addRecipeTooltip('需要完成第四章；含研究的配方需要控制器所有者在线并满足研究')
          .addRecipeTooltip('源配方：' + plan.source.id)
        if (plan.catalyst.tooltip !== null) {
          builder.addRecipeTooltip(plan.catalyst.tooltip)
        }
        if (plan.catalyst.candidates.length > 1) {
          builder.addRecipeTooltip('当前候选：' + candidate.id)
        }
        builder.build()
        generatedCount++
      })
    } catch (error) {
      throw new Error('[环形炼金坩埚] 无法转换 ' + plan.source.id + '：' + String(error))
    }
  })

  console.info('[环形炼金坩埚] 已从最终坩埚声明导入 ' + plans.length + ' 条源配方，展开为 ' + generatedCount + ' 条可显示配方；条件未满足跳过 ' + conditionalSkipped + ' 条')
})
