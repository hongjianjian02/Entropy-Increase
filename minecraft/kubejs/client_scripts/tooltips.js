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
    event.add('eeeabsmobs:heart_of_pagan', '§e可以献祭给命血祭坛')
    event.add('immortalers_delight:evolutcorn_grains', '§e使用寻种铲在平原、雪原、草甸、向日葵平原挖掘获得')
    event.add('immortalers_delight:himekaido_seed', '§e使用寻种铲在森林、繁花森林、桦木森林、原始桦木森林 、黑森林​、雪林挖掘获得')
    event.add('immortalers_delight:pearlipearl', '§e使用寻种铲在丛林、竹林、稀疏丛林挖掘获得')
    event.add('immortalers_delight:contains_tea_leisamboo', '§e使用寻种铲在河流、冻河挖掘获得')
    event.add('immortalers_delight:kwat_wheat_seeds', '§e使用寻种铲在绯红森林挖掘获得')
    event.add('immortalers_delight:alfalfa_seeds', '§e使用寻种铲在任意群系挖掘获得')
    event.add('immortalers_delight:warped_laurel_seeds', '§e使用寻种铲在诡异森林挖掘获得')
    event.add('immortalers_delight:travarice', '§e使用寻种铲在草甸、冰封山峰、尖峭山峰、裸岩山峰、积雪的山坡、樱花树林挖掘获得')
    event.add('immortalers_delight:gelpitaya_seeds', '§e使用寻种铲在冰刺之地挖掘获得')
    event.add('immortalers_delight:a_bush', '§e使用寻种铲在下界荒地挖掘获得')
    event.add('immortalers_delight:oxygrape', '§e氧葡萄植株自然生成于海底神殿')
    event.add('immortalers_delight:sextlotus_seeds', '§e使用寻种铲在森林、繁花森林、桦木森林、原始桦木森林 、黑森林​、雪林挖掘获得')
    event.add('immortalers_delight:obsidian_walnut', '§e使用寻种铲在玄武岩三角洲挖掘获得')
    event.add('eicore:mystic_crown', '§7暮色森林深处的古老遗物，戴上后能窥见裂隙的脉动')
    event.add('eicore:mystic_crown', '§6+5 幸运')
    event.add('eicore:mystic_crown', '§b生命值低于 50% 时被攻击：展开一次护盾')
    event.add('eicore:mystic_crown', '§8（护盾 60 秒冷却）')
  } catch (err) {
    crownTipBroken = true
    console.error('[crown-tip] ' + err)
  }
})
