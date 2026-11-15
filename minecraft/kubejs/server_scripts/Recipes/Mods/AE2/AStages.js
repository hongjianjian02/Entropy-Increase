// 获得 ME 控制器 → 给予 has_controller 阶段
PlayerEvents.inventoryChanged(event => {
  if (String(event.item.id) != 'ae2:controller') return
  const player = event.player
  if (AStages.playerHasStage(player, 'has_controller')) return
  AStages.addStageToPlayer(player, 'has_controller')
  player.tell('§a你已掌握 ME 控制器的制造之法')
})

// 首个控制器配方第三章（chapter2）开放；原 ID 配方仍需要 has_controller 阶段
ServerEvents.loaded(event => {
  try {
    const ae2CraftingType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType').CRAFTING
    AStages.addRestrictionForRecipe('ch_controller_first', 'chapter2',
      ae2CraftingType, 'kubejs:network/blocks/controller')
    AStages.addRestrictionForRecipe('ch_controller_vanilla', 'has_controller',
      ae2CraftingType, 'ae2:network/blocks/controller')
    console.info('[stages] ME 控制器首次配方与原 ID 配方限制已注册')
  } catch (err) {
    console.error('[stages] ME 控制器限制失败: ' + err)
  }
})