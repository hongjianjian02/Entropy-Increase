var crownTipBroken = false

ItemEvents.modifyTooltips(event => {
  if (crownTipBroken) return
  try {
    event.add('twilightforest:crown_splinter', '§e可以击杀巫妖获取')
    event.add('twilightforest:smoker', '§e可以在火焰沼泽获取')
    event.add('eicore:tianshu_star', '§1据说是天上坠落的星星')
    event.add('eicore:baiwei_seeds', '§e可以在暮色树屋找到')
    event.add('eicore:youkai_feast_seeds', '§e可以在暮色树屋找到')
    event.add('eicore:immortal_feast_seeds', '§e完成「千古种子」任务后领取')
    event.add('deep_aether:sterling_aercloud', '§e可以在天镜y200+获取')
    event.add('deep_aether:sterling_aercloud', '§e可以在云洋群系获取')
    event.add('eicore:mystic_crown', '§7暮色森林深处的古老遗物，戴上后能窥见裂隙的脉动')
    event.add('eicore:mystic_crown', '§6+5 幸运')
    event.add('eicore:mystic_crown', '§b生命值低于 50% 时被攻击：展开一次护盾')
    event.add('eicore:mystic_crown', '§8（护盾 60 秒冷却）')
  } catch (err) {
    crownTipBroken = true
    console.error('[crown-tip] ' + err)
  }
})
