ServerEvents.recipes(event => {
  const petal = color => ({ tag: 'botania:petals/' + color })
  const item = id => ({ item: id })
  const recipes = {
    bread_fanatic: [item('botania:black_lotus'), item('minecraft:bread'), item('botania:endoflame'), petal('green'), item('botania:rune_of_fire')],
    cow: [item('minecraft:cooked_beef'), item('farmersdelight:beef_stew'), item('farmersdelight:hamburger'), item('farmersdelight:steak_and_potatoes'), petal('red'), petal('brown'), item('botania:rune_of_fire')],
    eat_iron: [item('minecraft:iron_block'), item('minecraft:iron_ingot'), item('minecraft:iron_ingot'), petal('gray'), petal('light_gray'), item('botania:rune_of_earth')],
    agricultural: [item('minecraft:hay_block'), item('minecraft:hay_block'), item('minecraft:hay_block'), item('minecraft:hay_block'), item('minecraft:hay_block'), item('minecraft:wooden_hoe'), item('minecraft:wheat_seeds'), item('minecraft:wheat_seeds'), item('minecraft:wheat_seeds'), item('botania:rune_of_earth')],
    running_machine: [item('minecraft:heavy_weighted_pressure_plate'), item('minecraft:light_gray_dye'), item('botania:green_mystical_flower'), item('minecraft:purple_dye'), item('botania:mana_diamond'), item('botania:rune_of_air')],
    quest: [item('ftbquests:book'), petal('lime'), petal('green'), item('botania:floral_fertilizer'), item('botania:cosmetic_thinking_hand')]
  }
  Object.keys(recipes).forEach(id => {
    event.custom({
      type: 'botania:petal_apothecary',
      ingredients: recipes[id],
      output: { count: 1, id: 'eicore:' + id },
      reagent: { tag: 'botania:seed_apothecary_reagent' }
    }).id('eicore:petal_apothecary/' + id)
  })
})
