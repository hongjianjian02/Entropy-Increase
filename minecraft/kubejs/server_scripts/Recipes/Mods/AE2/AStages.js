// 获得 ME 控制器 → 给予 has_controller 阶段
PlayerEvents.inventoryChanged(event => {
  if (String(event.item.id) != 'ae2:controller') return
  const player = event.player
  if (AStages.playerHasStage(player, 'has_controller')) return
  AStages.addStageToPlayer(player, 'has_controller')
  player.tell('§a你已掌握 ME 控制器的制造之法')
})

// 原版配方需要 has_controller 阶段
ServerEvents.loaded(event => {
  try {
    AStages.addRestrictionForRecipe('ch_controller_vanilla', 'has_controller',
      Java.loadClass('net.minecraft.world.item.crafting.RecipeType').CRAFTING,
      'ae2:network/blocks/controller')
    console.info('[stages] ME 控制器原版配方限制已注册')
  } catch (err) {
    console.error('[stages] ME 控制器限制失败: ' + err)
  }
})