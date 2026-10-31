// 神秘坩埚（Crucible）配方
// 约定：复用原配方 ID 直接覆盖，不再单独 remove
// 注意：ID 必须和原版数据包路径一致（data/thaumaturge/recipe/crucible/xxx.json → thaumaturge:crucible/xxx）

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

})
