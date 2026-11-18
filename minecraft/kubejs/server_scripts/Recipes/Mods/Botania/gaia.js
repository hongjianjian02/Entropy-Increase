// 盖亚Ⅰ/Ⅱ允许在主世界和下界挑战；不额外增加阶段条件。
// 两种献祭物都在点击信标后调用 GaiaGuardianEntity.spawn。
// 下界额外奖励在 entities/gaia_guardian 掉落表；其他维度在扣材料前拦截。
BlockEvents.rightClicked('minecraft:beacon', event => {
  var sacrificeId = String(event.item.id)
  if (sacrificeId !== 'botania:terrasteel_ingot' && sacrificeId !== 'botania:gaia_ingot') return
  if (event.level.isClientSide()) return
  var dimension = String(event.level.dimension)
  if (dimension === 'minecraft:overworld' || dimension === 'minecraft:the_nether') return

  event.player.tell('§c盖亚Ⅰ和盖亚Ⅱ只能在主世界或下界挑战，请前往允许的维度进行召唤。')
  event.cancel()
})
