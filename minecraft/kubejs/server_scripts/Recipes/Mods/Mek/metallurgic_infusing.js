// 通用机械（Mekanism）配方改动
ServerEvents.recipes(event => {

  // 冶金灌注机 · 钢粉：神秘锭 + 碳 → 钢粉
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemical_input: {
      amount: 10,
      tag: 'mekanism:carbon'
    },
    item_input: {
      count: 1,
      item: 'thaumaturge:ingot_thaumium'
    },
    output: {
      count: 1,
      id: 'mekanism:dust_steel'
    },
    per_tick_usage: false
  }).id('mekanism:processing/steel/enriched_iron_to_dust')

})
