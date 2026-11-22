// 神秘坩埚（Crucible）配方
// 覆盖原配方时沿用原配方 ID

ServerEvents.recipes(event => {

  // 炼金黄铜：铜锭 → 魔力钢锭
  // 覆盖原版 thaumaturge:crucible/ingot_brass
  event.custom({
    type: 'thaumaturge:crucible',
    aspects: [
      { aspect: 'thaumaturge:instrumentum', amount: 5 }
    ],
    catalyst: { item: 'botania:manasteel_ingot' },
    research: { entry: 'thaumaturge:metallurgy', stage: 0 },
    result: { id: 'thaumaturge:ingot_brass', count: 1 }
  }).id('thaumaturge:crucible/ingot_brass')

  // 神秘锭：铁锭 → 魔力钢锭
  // 覆盖原版 thaumaturge:crucible/ingot_thaumium
  event.custom({
    type: 'thaumaturge:crucible',
    aspects: [
      { aspect: 'thaumaturge:praecantatio', amount: 5 },
      { aspect: 'thaumaturge:terra', amount: 5 }
    ],
    catalyst: { item: 'botania:manasteel_ingot' },
    research: { entry: 'thaumaturge:metallurgy', stage: 1 },
    result: { id: 'thaumaturge:ingot_thaumium', count: 1 }
  }).id('thaumaturge:crucible/ingot_thaumium')

  // 天罡锭：先溶解恶魔灌注铁锭，再投入天青锭作为催化物
  event.custom({
    type: 'thaumaturge:crucible',
    aspects: [
      { aspect: 'thaumaturge:metallum', amount: 5 },
      { aspect: 'thaumaturge:praecantatio', amount: 5 }
    ],
    catalyst: { item: 'eicore:tianqing_ingot' },
    result: { id: 'eicore:tiangang_ingot', count: 1 }
  }).id('thaumaturge:crucible/tiangang_ingot')

})
