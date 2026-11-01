// 有序合成
ServerEvents.recipes(event => {
  // 根
  event.shaped(
    Item.of('twilightforest:root', 16),
    ['###', '#A#', '###'],
    {
      '#': 'minecraft:stick',
      'A': 'twilightforest:naga_scale'
    }
  ).id('kubejs:root')

  // 下界岩
  event.shaped(
    Item.of('minecraft:netherrack', 8),
    ['###', '#A#', '###'],
    {
      '#': 'botania:livingrock',
      'A': 'minecraft:blaze_powder'
    }
  ).id('kubejs:netherrack')

  // 精灵门核心
  event.shaped(
    Item.of('botania:alfheim_portal', 1),
    ['#A#', 'BCB', '#A#'],
    {
      '#': 'botania:glimmering_stripped_livingwood',
      'A': 'twilightforest:knightmetal_ingot',
      'B': 'botania:terrasteel_ingot',
      'C': 'twilightforest:knight_phantom_trophy'
    }
  ).id('botania:alfheim_portal')

  // 不稳定符文宝石
  event.shaped(
    Item.of('eicore:unstable_rune_gem', 1),
    ['#AF', 'BCD', 'FE#'],
    {
      '#': 'twilightforest:fiery_ingot',
      'A': 'eicore:mystic_crown',
      'B': 'twilightforest:giant_obsidian',
      'C': 'twilightforest:lamp_of_cinders',
      'D': 'botania:elementium_block',
      'E': 'botania:manasteel_block',
      'F': 'botania:terrasteel_ingot'
    }
  ).id('eicore:unstable_rune_gem')

  // 探险家指南针
  event.shaped(
    Item.of('explorerscompass:explorerscompass', 1),
    ['#A#', 'ABA', '#A#'],
    {
      '#': 'minecraft:cobweb',
      'A': 'twilightforest:etched_nagastone',
      'B': 'minecraft:compass'
    }
  ).id('explorerscompass:explorers_compass')
  
  // 泰拉凝聚板
  event.shaped(
    Item.of('botania:terra_plate', 1),
    ["###","ABC","DEF"],
    {
      "#": "minecraft:lapis_block",
      "A": "botania:rune_water",
      "B": "twilightforest:smoker",
      "C": "botania:rune_fire",
      "D": "botania:rune_earth",
      "E": "botania:rune_mana",
      "F": "botania:rune_air"
    }
  ).id('botania:terra_plate')
  
  // 阿涅摩伊之杖
  event.shaped(
    Item.of('locusazzurro_icaruswings:wind_wand', 1),
    ['  #','AB ','CD '],
    {
      '#': 'locusazzurro_icaruswings:anemone',
      'A': 'twilightforest:huge_mushgloom_stem',
      'B': 'minecraft:stick',
      'C': 'twilightforest:huge_water_lily',
      'D': 'twilightforest:huge_mushgloom'
    }
  ).id('locusazzurro_icaruswings:wind_wand')

  // 红石工程块 1
  event.shaped(
    Item.of('immersiveengineering:rs_engineering', 1),
    ['#A#', 'ABA', '#A#'],
    {
      '#': '#c:sheetmetals/iron',
      'A': '#c:dusts/redstone',
      'B': '#c:ingots/silver'
    }
  ).id('immersiveengineering:crafting/rs_engineering')

  // 红石工程块 4
  event.shaped(
    Item.of('immersiveengineering:rs_engineering', 4),
    ['#A#', 'ABA', '#A#'],
    {
      '#': '#c:sheetmetals/steel',
      'A': '#c:dusts/redstone',
      'B': '#c:ingots/elementium'
    }
  ).id('kubejs:rs_engineering')

  // 轻型工程块 1
  event.shaped(
    Item.of('immersiveengineering:light_engineering', 1),
    ['#A#', 'ABA', '#A#'],
    {
      '#': '#c:sheetmetals/iron',
      'A': 'immersiveengineering:component_iron',
      'B': 'mekanism:ingot_bronze'
    }
  ).id('immersiveengineering:crafting/light_engineering')

  // 轻型工程块 4
  event.shaped(
    Item.of('immersiveengineering:light_engineering', 4),
    ['#A#', 'ABA', '#A#'],
    {
      '#': '#c:sheetmetals/steel',
      'A': 'immersiveengineering:component_steel',
      'B': 'thaumaturge:ingot_brass'
    }
  ).id('kubejs:light_engineering')

  // 重型工程块 1
  event.shaped(
    Item.of('immersiveengineering:heavy_engineering', 1),
    ['#A#', 'ABA', '#A#'],
    {
      '#': 'immersiveengineering:sheetmetal_lead',
      'A': 'immersiveengineering:plate_electrum',
      'B': 'immersiveengineering:light_engineering'
    }
  ).id('immersiveengineering:crafting/heavy_engineering')

  // 重型工程块 4
  event.shaped(
    Item.of('immersiveengineering:heavy_engineering', 4),
    ['#A#', 'ABA', '#A#'],
    {
      '#': 'immersiveengineering:sheetmetal_lead',
      'A': 'immersiveengineering:component_steel',
      'B': 'thaumaturge:mechanism_complex'
    }
  ).id('kubejs:heavy_engineering')
  
  //铁机械零件 1
  event.shaped(
    Item.of('immersiveengineering:component_iron', 1),
    ['# #',' A ','# #'],
    {
      '#': '#c:plates/iron',
      'A': 'immersiveengineering:ingot_lead'
    }
  ).id('immersiveengineering:crafting/component_iron')

  // 钢机械零件 1
  event.shaped(
    Item.of('immersiveengineering:component_steel', 1),
    ['# #',' A ','# #'],
    {
      '#': '#c:plates/steel',
      'A': 'immersiveengineering:ingot_lead'
    }
  ).id('immersiveengineering:crafting/component_steel')  
})
