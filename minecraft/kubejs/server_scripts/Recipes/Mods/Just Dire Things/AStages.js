// JDT 第四章开放基础内容；时间系列沿用规划，在第六章（chapter5）开放。
// 物品限制保留已有物品的持有和存储，限制阶段前的使用、放置及方块交互。
// 工作台配方逐项限制；凝胶/流体反应与已运行自动化的覆盖需游戏内测试。
ServerEvents.loaded(event => {
  const timeItems = [
    'justdirethings:time_crystal',
    'justdirethings:time_crystal_block',
    'justdirethings:time_crystal_budding_block',
    'justdirethings:time_crystal_cluster',
    'justdirethings:time_crystal_cluster_small',
    'justdirethings:time_crystal_cluster_medium',
    'justdirethings:time_crystal_cluster_large',
    'justdirethings:time_wand',
    'justdirethings:time_fluid_bucket',
    'justdirethings:paradoxmachine',
    'justdirethings:upgrade_time_protection',
    'justdirethings:upgrade_instabreak',
    'justdirethings:upgrade_noai',
    'justdirethings:upgrade_deathprotection'
  ]

  timeItems.forEach(itemId => {
    AStages.addRestrictionForItem('ch5_jdt_time_item_' + itemId.split(':')[1], 'chapter5', itemId)
      .allowPickup()
      .allowInventoryStorage()
      .allowContainerStorage()
      .globalShowName()
      .showInRecipeViewer()
      .disableBlockInteraction()
  })

  const craftingType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType').CRAFTING
  const timeCraftingRecipes = [
    'justdirethings:upgrade_time_protection',
    'justdirethings:time_wand',
    'justdirethings:upgrade_instabreak',
    'justdirethings:upgrade_noai',
    'justdirethings:paradoxmachine',
    'justdirethings:time_crystal_9x9',
    'justdirethings:time_crystal_block_9x9',
    'justdirethings:upgrade_deathprotection'
  ]
  timeCraftingRecipes.forEach(recipeId => {
    AStages.addRestrictionForRecipe('ch5_jdt_time_recipe_' + recipeId.split(':')[1], 'chapter5', craftingType, recipeId)
  })

  console.info('[stages] JDT 时间系列限制已注册：14 个物品、8 条工作台配方，chapter5 开放')
})
