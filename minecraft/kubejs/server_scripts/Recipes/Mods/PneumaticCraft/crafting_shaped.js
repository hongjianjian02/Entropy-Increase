ServerEvents.recipes(event => {
  // 精炼厂控制器：两侧红石粉改为气动塑料片，沿用原配方的储罐组件要求。
  event.replaceInput(
    { id: 'pneumaticcraft:refinery' },
    '#c:dusts/redstone',
    Ingredient.of('pneumaticcraft:plastic')
  )

  // 空气压缩机：中央空位加入一块工程塑胶板。
  event.shaped('pneumaticcraft:air_compressor', ['III', 'IPT', 'IFI'], {
    I: '#pneumaticcraft:reinforced_stone_bricks',
    P: 'immersiveengineering:plate_duroplast',
    T: 'pneumaticcraft:pressure_tube',
    F: 'minecraft:furnace'
  }).id('pneumaticcraft:air_compressor')

  // 液体压缩机：两侧皮革改为工程塑胶板，保留原配方的储罐组件要求。
  event.replaceInput(
    { id: 'pneumaticcraft:liquid_compressor' },
    '#c:leathers',
    Ingredient.of('immersiveengineering:plate_duroplast')
  )

  // 温差压缩机：两侧重质测重压力板改为工程塑胶板。
  event.replaceInput(
    { id: 'pneumaticcraft:thermal_compressor' },
    'minecraft:heavy_weighted_pressure_plate',
    Ingredient.of('immersiveengineering:plate_duroplast')
  )
})
