// 伊卡洛斯之翼（Icarus Wings）配方改动
// 约定：复用原配方 ID 直接覆盖，不写 remove

ServerEvents.recipes(event => {

  // 量子燃料：钢锭部分从「#c:ingots/steel 或碳素钢」改为只用碳素钢
  // 覆盖 locusazzurro_icaruswings:quantum_fuel
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'equipment',
    key: {
      N: { item: 'minecraft:nether_star' },
      S: { item: 'locusazzurro_icaruswings:steel_ingot' }
    },
    pattern: [' S ', 'SNS', ' S '],
    result: { count: 1, id: 'locusazzurro_icaruswings:quantum_fuel' }
  }).id('locusazzurro_icaruswings:quantum_fuel')

  // 钢矛：钢锭部分从「#c:ingots/steel 或碳素钢」改为只用碳素钢
  // 覆盖 locusazzurro_icaruswings:steel_spear
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'equipment',
    key: {
      P: { tag: 'minecraft:logs' },
      T: { item: 'locusazzurro_icaruswings:steel_ingot' }
    },
    pattern: ['  T', ' P ', 'P  '],
    result: { count: 1, id: 'locusazzurro_icaruswings:steel_spear' }
  }).id('locusazzurro_icaruswings:steel_spear')

})