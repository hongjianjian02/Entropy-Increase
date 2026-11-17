ServerEvents.recipes(event => {
  const meatPairs = [
    ['farmersdelight:cooked_bacon', 'farmersdelight:bacon'],
    ['farmersdelight:cooked_chicken_cuts', 'farmersdelight:chicken_cuts'],
    ['farmersdelight:cooked_mutton_chops', 'farmersdelight:mutton_chops'],
    ['farmersdelight:beef_patty', 'farmersdelight:minced_beef'],
    ['farmersdelight:smoked_ham', 'farmersdelight:ham'],
    ['youkaishomecoming:grilled_boarchop', 'youkaishomecoming:raw_boarchop'],
    ['youkaishomecoming:grilled_boarchop_bits', 'youkaishomecoming:raw_boarchop_bits'],
    ['youkaishomecoming:grilled_venison', 'youkaishomecoming:raw_venison'],
    ['youkaishomecoming:roasted_lamprey', 'youkaishomecoming:raw_lamprey'],
    ['youkaishomecoming:seared_tuna', 'youkaishomecoming:raw_tuna']
  ]

  meatPairs.forEach(([cookedMeat, rawMeat]) => {
    event.custom({
      type: 'aether:freezing',
      category: 'freezable_misc',
      ingredient: { item: cookedMeat },
      result: { id: rawMeat, count: 1 },
      experience: 0,
      cookingtime: 200
    }).id('kubejs:aether/freezing/' + cookedMeat.replace(':', '/') + '_to_raw')
  })
})
