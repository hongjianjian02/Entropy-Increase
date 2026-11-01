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
  ).id('kubejs:unstable_rune_gem')
})
