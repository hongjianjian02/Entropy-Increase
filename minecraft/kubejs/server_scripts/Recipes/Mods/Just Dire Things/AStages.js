// JDT 第四章开放基础内容，时间系列由独立的 time_series 阶段开放。
// 物品限制保留已有物品的持有和存储，限制阶段前的使用、放置及方块交互。
// 工作台和锻造台配方逐项限制，世界内的凝胶与流体反应不经过这两类配方入口。
// /reload 会清空 AStages 注册表：配方重载时重建，首次进世界由 loaded 兜底。
// 按当前注册表判断是否已完成，不用跨重载保留的全局布尔标记。
var registerEIJDTTimeRestrictions = event => {
  var stage = 'time_series'
  if (Java.loadClass('com.alessandro.astages.engine.ARestrictionManager').RECIPE_INSTANCE
    .getRestriction('jdt_time_recipe_eclipsealloy_pickaxe-instabreak') != null) return

  var timeItems = [
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
    AStages.addRestrictionForItem('jdt_time_item_' + itemId.split(':')[1], stage, itemId)
      .allowPickup()
      .allowInventoryStorage()
      .allowContainerStorage()
      .globalShowName()
      .showInRecipeViewer()
      .disableBlockInteraction()
  })

  var recipeType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType')
  var timeCraftingRecipes = [
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
    AStages.addRestrictionForRecipe('jdt_time_recipe_' + recipeId.split(':')[1], stage, recipeType.CRAFTING, recipeId)
  })

  var timeSmithingRecipes = [
    'justdirethings:eclipsealloy_chestplate-time_protection',
    'justdirethings:eclipsealloy_chestplate-deathprotection',
    'justdirethings:eclipsealloy_helmet-noai',
    'justdirethings:eclipsealloy_axe-instabreak',
    'justdirethings:eclipsealloy_paxel-instabreak',
    'justdirethings:eclipsealloy_shovel-instabreak',
    'justdirethings:eclipsealloy_pickaxe-instabreak'
  ]
  timeSmithingRecipes.forEach(recipeId => {
    AStages.addRestrictionForRecipe('jdt_time_recipe_' + recipeId.split(':')[1], stage, recipeType.SMITHING, recipeId)
  })

  console.info('[stages] JDT 时间系列由 ' + stage + ' 开放：' + timeItems.length + ' 个物品、' +
    timeCraftingRecipes.length + ' 条工作台配方、' + timeSmithingRecipes.length + ' 条锻造台配方')
}

ServerEvents.recipes(registerEIJDTTimeRestrictions)
ServerEvents.loaded(registerEIJDTTimeRestrictions)
