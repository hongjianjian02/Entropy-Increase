// 花药台
ServerEvents.recipes(event => {
// 咀叶花
  event.remove({ id: 'botania:petal_apothecary/munchdew' })
  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      { tag: 'botania:petals/lime' },
      { tag: 'botania:petals/green' },
      { item: 'twilightforest:liveroot' },
      { item: 'botania:livingwood_twig' },
      { item: 'botania:rune_of_earth' },
      { item: 'botania:rune_of_water' }
    ],
    output: { count: 1, id: 'botania:munchdew' },
    reagent: { tag: 'botania:seed_apothecary_reagent' }
  }).id('botania:petal_apothecary/munchdew')
})
