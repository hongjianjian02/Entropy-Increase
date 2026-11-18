// 魔链星：沿用花瓣，暴食/贪婪符文各一，冰雪女王奖杯替代盖亚之魂。
ServerEvents.recipes(event => {
  // 当前 ExtraBotany 同时提供这两个 ID，移除两者以免保留旧材料路线。
  event.remove({ id: 'botania:petal_apothecary/manalink' })
  event.remove({ id: 'extrabotany:petal_apothecary/manalink' })
  event.custom({
    type: 'botania:petal_apothecary',
    ingredients: [
      { tag: 'botania:petals/cyan' },
      { tag: 'botania:petals/cyan' },
      { tag: 'botania:petals/cyan' },
      { tag: 'botania:petals/light_blue' },
      { tag: 'botania:petals/light_blue' },
      { item: 'botania:rune_of_gluttony' },
      { item: 'botania:rune_of_greed' },
      { item: 'twilightforest:snow_queen_trophy' }
    ],
    output: { count: 1, id: 'extrabotany:manalink' },
    reagent: { tag: 'botania:seed_apothecary_reagent' }
  }).id('extrabotany:petal_apothecary/manalink')
})
