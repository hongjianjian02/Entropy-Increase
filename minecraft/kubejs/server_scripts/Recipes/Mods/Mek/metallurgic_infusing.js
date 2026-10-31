// 通用机械（Mekanism）配方改动
// 约定：复用原配方 ID 直接覆盖，不写 remove

ServerEvents.recipes(event => {

  // 冶金灌注机 · 钢粉：富集铁 → 炼金黄铜锭
  // 覆盖 mekanism:processing/steel/enriched_iron_to_dust
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemical_input: {
      amount: 10,
      tag: 'mekanism:carbon'
    },
    item_input: {
      count: 1,
      item: 'thaumaturge:ingot_brass'
    },
    output: {
      count: 1,
      id: 'mekanism:dust_steel'
    },
    per_tick_usage: false
  }).id('mekanism:processing/steel/enriched_iron_to_dust')

})
