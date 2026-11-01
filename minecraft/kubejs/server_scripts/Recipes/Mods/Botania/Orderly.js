// 有序合成
ServerEvents.recipes(event => {
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
})