// 获得 ME 控制器 → 给予 has_controller 阶段
PlayerEvents.inventoryChanged(event => {
  if (String(event.item.id) != 'ae2:controller') return
  const player = event.player
  if (AStages.playerHasStage(player, 'has_controller')) return
  AStages.addStageToPlayer(player, 'has_controller')
  player.tell('§a你已掌握 ME 控制器的制造之法')
})

// 首个控制器配方第三章（chapter2）开放；原 ID 配方仍需要 has_controller 阶段
// /reload 会清空 AStages 注册表：配方重载时重建，首次进世界由 loaded 兜底。
// 按当前注册表判断是否已完成，不用跨重载保留的全局布尔标记。
var registerEIAE2ControllerRestrictions = event => {
  try {
    var ae2StageManager = Java.loadClass('com.alessandro.astages.engine.ARestrictionManager').RECIPE_INSTANCE
    if (ae2StageManager.getRestriction('ch_controller_first') != null &&
      ae2StageManager.getRestriction('ch_controller_vanilla') != null) return
    var ae2CraftingType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType').CRAFTING
    AStages.addRestrictionForRecipe('ch_controller_first', 'chapter2',
      ae2CraftingType, 'kubejs:network/blocks/controller')
    AStages.addRestrictionForRecipe('ch_controller_vanilla', 'has_controller',
      ae2CraftingType, 'ae2:network/blocks/controller')
    console.info('[stages] ME 控制器首次配方与原 ID 配方限制已注册')
  } catch (err) {
    console.error('[stages] ME 控制器限制失败: ' + err)
  }
}

ServerEvents.recipes(registerEIAE2ControllerRestrictions)
ServerEvents.loaded(registerEIAE2ControllerRestrictions)
