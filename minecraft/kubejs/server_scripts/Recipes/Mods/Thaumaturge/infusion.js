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
      { item: 'botania:rune_of_fire' }
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

  // 悖论物质：将中央的 TNT 替换为摧灭流明水晶石。
  event.custom({
    type: 'thaumaturge:infusion',
    aspects: [
      { aspect: 'thaumaturge:alienis', amount: 50 },
      { aspect: 'thaumaturge:vitium', amount: 50 }
    ],
    catalyst: {
      type: 'neoforge:components',
      items: 'astralsorcery:lumen_crystal',
      components: { 'astralsorcery:lumen': 'astralsorcery:evorsio' }
    },
    components: [
      { item: 'thaumaturge:morphic_resonator' },
      { tag: 'c:storage_blocks/redstone' },
      { item: 'thaumaturge:alumentum' },
      { tag: 'thaumaturge:nitors' },
      { item: 'thaumaturge:vis_resonator' },
      { tag: 'c:storage_blocks/redstone' },
      { item: 'thaumaturge:alumentum' },
      { tag: 'thaumaturge:nitors' }
    ],
    instability: 8,
    research: { entry: 'thaumaturge:rift_closer' },
    result: { id: 'thaumaturge:causality_collapser', count: 1 }
  }).id('thaumaturge:infusion/causality_collapser')

  // 星环：外围基座按截图从上方起顺时针排列。
  event.custom({
    type: 'thaumaturge:infusion',
    aspects: [
      { aspect: 'thaumaturge:victus', amount: 32 },
      { aspect: 'thaumaturge:praecantatio', amount: 32 },
      { aspect: 'thaumaturge:metallum', amount: 32 }
    ],
    catalyst: { item: 'eicore:starlight_resonance_lens' },
    components: [
      { item: 'neovitae:weak_blood_shard' },
      { item: 'enderio_evolution:crystalline_alloy_ingot' },
      { item: 'mekanism:alloy_reinforced' },
      { item: 'industrialforegoing:machine_frame_advanced' },
      { item: 'mekanism:alloy_reinforced' },
      { item: 'enderio_evolution:crystalline_alloy_ingot' }
    ],
    instability: 2,
    research: { entry: 'thaumaturge:base_infusion', stage: 0 },
    result: { id: 'eicore:star_ring', count: 1 }
  }).id('kubejs:infusion/star_ring')

})
