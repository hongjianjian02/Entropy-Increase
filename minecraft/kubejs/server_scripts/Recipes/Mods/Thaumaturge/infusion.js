// 注魔
ServerEvents.recipes(event => {

  // 工程师蓝图（合成用零件）：2 钢块 + 2 炽铁锭 + 2 简易奥术装置 + 1 火之符文 + 三要素各 50
  event.custom({
    type: 'thaumaturge:infusion',
    aspects: [
      { aspect: 'thaumaturge:permutatio', amount: 50 },
      { aspect: 'thaumaturge:praecantatio', amount: 50 },
      { aspect: 'thaumaturge:alkimia', amount: 50 }
    ],
    catalyst: { item: 'minecraft:paper' },
    components: [
      { tag: 'c:storage_blocks/steel' },
      { tag: 'c:storage_blocks/steel' },
      { item: 'twilightforest:fiery_ingot' },
      { item: 'twilightforest:fiery_ingot' },
      { item: 'thaumaturge:mechanism_simple' },
      { item: 'thaumaturge:mechanism_simple' },
      { item: 'botania:rune_fire' }
    ],
    instability: 1,
    research: { entry: 'thaumaturge:base_infusion', stage: 0 },
    result: {
      count: 1,
      id: 'immersiveengineering:blueprint',
      components: {
        'immersiveengineering:blueprint': 'components'
      }
    }
  }).id('kubejs:infusion_engineer_blueprint')

})
