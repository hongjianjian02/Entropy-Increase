// 高炉
ServerEvents.recipes(event => {

  // 高炉 · 钢锭：神秘锭 → 钢锭
  event.custom({
    type: 'immersiveengineering:blast_furnace',
    input: { item: 'thaumaturge:ingot_thaumium' },
    result: { tag: 'c:ingots/steel' },
    slag: { tag: 'c:slag' },
    time: 1200
  }).id('immersiveengineering:blastfurnace/steel')

  // 高炉 · 钢块：神秘块 → 钢块
  event.custom({
    type: 'immersiveengineering:blast_furnace',
    input: { item: 'thaumaturge:metal_thaumium' },
    result: { tag: 'c:storage_blocks/steel' },
    slag: {
      basePredicate: { tag: 'c:slag' },
      count: 9
    },
    time: 10800
  }).id('immersiveengineering:blastfurnace/steel_block')
})
