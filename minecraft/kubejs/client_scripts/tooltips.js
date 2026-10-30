var crownTipBroken = false

ItemEvents.modifyTooltips(event => {
  if (crownTipBroken) return
  try {
    event.add('twilightforest:crown_splinter', '§e可以击杀巫妖获取')
    event.add('twilightforest:smoker', '§e可以在火焰沼泽获取')
    event.add('locusazzurro_icaruswings:zephir_essence', '§e可以击杀幻翼获取')
    event.add('locusazzurro_icaruswings:nether_essence', '§e可以击杀烈焰人获取')
    event.add('locusazzurro_icaruswings:void_essence', '§e可以击杀末影人获取')
    event.add('locusazzurro_icaruswings:anemone', '§e可以在暮色战利品箱获取')
    event.add('eicore:mystic_crown', '§7暮色森林深处的古老遗物，戴上后能窥见裂隙的脉动')
    event.add('eicore:mystic_crown', '§6+5 幸运')
    event.add('eicore:mystic_crown', '§b生命值低于 50% 时被攻击：展开一次护盾')
    event.add('eicore:mystic_crown', '§8（护盾 60 秒冷却）')
  } catch (err) {
    crownTipBroken = true
    console.error('[crown-tip] ' + err)
  }
})
