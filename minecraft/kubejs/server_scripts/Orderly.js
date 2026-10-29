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
  ).id('kubejsstudio:root')

  // 下界岩
  event.shaped(
    Item.of('minecraft:netherrack', 8),
    ['###', '#A#', '###'],
    {
      '#': 'botania:livingrock_slate',
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
  ).id('kubejs:alfheim_portal')
})
