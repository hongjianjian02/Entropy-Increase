// 有序合成
ServerEvents.recipes(event => {
// 精灵门核心
event.shaped(
    Item.of('botania:elven_gateway_core', 1),
    ['#A#', 'BCB', '#A#'],
    {
      '#': 'botania:glimmering_stripped_livingwood',
      'A': 'twilightforest:knightmetal_ingot',
      'B': 'botania:terrasteel_ingot',
      'C': 'twilightforest:knight_phantom_trophy'
    }
  ).id('botania:elven_gateway_core')
// 泰拉凝聚板
  event.shaped(
    Item.of('botania:terrestrial_agglomeration_plate', 1),
    ["###","ABC","DEF"],
    {
      "#": "minecraft:lapis_block",
      "A": "botania:rune_of_water",
      "B": "twilightforest:smoker",
      "C": "botania:rune_of_fire",
      "D": "botania:rune_of_earth",
      "E": "botania:rune_of_mana",
      "F": "botania:rune_of_air"
    }
  ).id('botania:terrestrial_agglomeration_plate')
})