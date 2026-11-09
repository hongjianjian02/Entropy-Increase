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

  // 修改所有板材配方(一出一改为二出一)
  // 铝板
  event.shaped(
    Item.of('immersiveengineering:plate_aluminum', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': '#c:ingots/aluminum'
    }).id('immersiveengineering:crafting/plate_aluminum_hammering')

  // 康铜板
  event.shaped(
    Item.of('immersiveengineering:plate_constantan', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'immersiveengineering:ingot_constantan'
    }).id('immersiveengineering:crafting/plate_constantan_hammering')

  // 铜板
  event.shaped(
    Item.of('immersiveengineering:plate_copper', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'minecraft:copper_ingot'
    }).id('immersiveengineering:crafting/plate_copper_hammering')

  // 琥珀金板
  event.shaped(
    Item.of('immersiveengineering:plate_electrum', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'immersiveengineering:ingot_electrum'
    }).id('immersiveengineering:crafting/plate_electrum_hammering')

  // 金板
  event.shaped(
    Item.of('immersiveengineering:plate_gold', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'minecraft:gold_ingot'
    }).id('immersiveengineering:crafting/plate_gold_hammering')

  // 铁板
  event.shaped(
    Item.of('immersiveengineering:plate_iron', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'minecraft:iron_ingot'
    }).id('immersiveengineering:crafting/plate_iron_hammering')

  // 银板
  event.shaped(
    Item.of('immersiveengineering:plate_silver', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'enderio_evolution:silver_ingot'
    }).id('immersiveengineering:crafting/plate_silver_hammering')

  // 铅板
  event.shaped(
    Item.of('immersiveengineering:plate_lead', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': '#c:ingots/lead'
    }).id('immersiveengineering:crafting/plate_lead_hammering')

  // 钢板
  event.shaped(
    Item.of('immersiveengineering:plate_steel', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'mekanism:ingot_steel'
    }).id('immersiveengineering:crafting/plate_steel_hammering')

  // 铀板
  event.shaped(
    Item.of('immersiveengineering:plate_uranium', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'mekanism:ingot_uranium'
    }).id('immersiveengineering:crafting/plate_uranium_hammering')

  // 镍板
  event.shaped(
    Item.of('immersiveengineering:plate_nickel', 1),
    ['H','I','I'], 
    {
      'H': 'immersiveengineering:hammer',
      'I': 'immersiveengineering:ingot_nickel'
    }).id('immersiveengineering:crafting/plate_nickel_hammering')
})