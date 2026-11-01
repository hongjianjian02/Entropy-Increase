// 有序合成
ServerEvents.recipes(event => {
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