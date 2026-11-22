ServerEvents.recipes(event => {
  const foodPairs = [
    ['minecraft:cooked_beef', 'minecraft:beef'],
    ['minecraft:cooked_chicken', 'minecraft:chicken'],
    ['minecraft:cooked_cod', 'minecraft:cod'],
    ['minecraft:cooked_mutton', 'minecraft:mutton'],
    ['minecraft:cooked_porkchop', 'minecraft:porkchop'],
    ['minecraft:cooked_rabbit', 'minecraft:rabbit'],
    ['minecraft:cooked_salmon', 'minecraft:salmon'],

    ['farmersdelight:cooked_bacon', 'farmersdelight:bacon'],
    ['farmersdelight:cooked_chicken_cuts', 'farmersdelight:chicken_cuts'],
    ['farmersdelight:cooked_cod_slice', 'farmersdelight:cod_slice'],
    ['farmersdelight:cooked_mutton_chops', 'farmersdelight:mutton_chops'],
    ['farmersdelight:cooked_salmon_slice', 'farmersdelight:salmon_slice'],
    ['farmersdelight:beef_patty', 'farmersdelight:minced_beef'],
    ['farmersdelight:smoked_ham', 'farmersdelight:ham'],

    ['youkaishomecoming:cooked_flesh', 'youkaishomecoming:flesh'],
    ['youkaishomecoming:cooked_flesh_slice', 'youkaishomecoming:flesh_slice'],
    ['youkaishomecoming:grilled_boarchop', 'youkaishomecoming:raw_boarchop'],
    ['youkaishomecoming:grilled_boarchop_bits', 'youkaishomecoming:raw_boarchop_bits'],
    ['youkaishomecoming:grilled_venison', 'youkaishomecoming:raw_venison'],
    ['youkaishomecoming:grilled_venison_slice', 'youkaishomecoming:raw_venison_slice'],
    ['youkaishomecoming:roasted_lamprey', 'youkaishomecoming:raw_lamprey'],
    ['youkaishomecoming:roasted_lamprey_fillet', 'youkaishomecoming:raw_lamprey_fillet'],
    ['youkaishomecoming:seared_tuna', 'youkaishomecoming:raw_tuna'],
    ['youkaishomecoming:seared_tuna_slice', 'youkaishomecoming:raw_tuna_slice'],

    ['immortalers_delight:cooked_sniffer_steak', 'immortalers_delight:raw_sniffer_steak'],
    ['immortalers_delight:cooked_sniffer_tail', 'immortalers_delight:raw_sniffer_tail'],
    ['immortalers_delight:cooked_sniffer_slice', 'immortalers_delight:raw_sniffer_slice'],

    ['twilightforest:cooked_meef', 'twilightforest:raw_meef'],
    ['twilightforest:cooked_venison', 'twilightforest:raw_venison'],

    ['deep_aether:cooked_aerglow_fish', 'deep_aether:raw_aerglow_fish'],
    ['deep_aether:cooked_quail', 'deep_aether:raw_quail'],

    ['eternal_starlight:cooked_aurora_deer_steak', 'eternal_starlight:aurora_deer_steak'],
    ['eternal_starlight:cooked_luminaris', 'eternal_starlight:luminaris'],
    ['eternal_starlight:cooked_luminofish', 'eternal_starlight:luminofish'],
    ['eternal_starlight:cooked_ratlin_meat', 'eternal_starlight:ratlin_meat'],
    ['eternal_starlight:cooked_rookfish', 'eternal_starlight:rookfish'],
    ['eternal_starlight:cooked_shadow_snail_meat', 'eternal_starlight:shadow_snail_meat']
  ]

  foodPairs.forEach(([cookedFood, rawFood]) => {
    event.custom({
      type: 'aether:freezing',
      category: 'freezable_misc',
      ingredient: { item: cookedFood },
      result: { id: rawFood, count: 1 },
      experience: 0,
      cookingtime: 200
    }).id('kubejs:aether/freezing/' + cookedFood.replace(':', '/') + '_to_raw')
  })
})
