// 合金炉
ServerEvents.recipes(event => {

  // 合金炉 · 钢合金：铁锭/铁粉 → 炼金黄铜锭
  // 覆盖 nuclearcraftneohaul:alloy_furnace/steel_alloy
  event.custom({
    type: 'nuclearcraftneohaul:alloy_furnace_recipe',
    itemIngredients: [
      {
        count: 1,
        ingredient: [{ item: 'thaumaturge:ingot_brass' }]
      },
      {
        count: 2,
        ingredient: [
          { tag: 'c:dusts/coal' },
          { tag: 'c:dusts/graphite' },
          { tag: 'c:ingots/graphite' },
          { item: 'minecraft:coal' }
        ]
      }
    ],
    itemProducts: [
      {
        count: 1,
        ingredient: { item: 'nuclearcraftneohaul:steel_alloy' }
      }
    ],
    powerModifier: 1.0,
    radiation: 0.0,
    timeModifier: 1.0
  }).id('nuclearcraftneohaul:alloy_furnace/steel_alloy')

  // 合金炉 · HSLA 钢：15 铁 → 15 炼金黄铜锭
  // 覆盖 nuclearcraftneohaul:alloy_furnace/hsla_steel_alloy
  event.custom({
    type: 'nuclearcraftneohaul:alloy_furnace_recipe',
    itemIngredients: [
      {
        count: 15,
        ingredient: [{ item: 'thaumaturge:ingot_brass' }]
      },
      {
        count: 1,
        ingredient: { item: 'nuclearcraftneohaul:c_mn_blend' }
      }
    ],
    itemProducts: [
      {
        count: 16,
        ingredient: { item: 'nuclearcraftneohaul:hsla_steel_alloy' }
      }
    ],
    powerModifier: 2.0,
    radiation: 0.0,
    timeModifier: 8.0
  }).id('nuclearcraftneohaul:alloy_furnace/hsla_steel_alloy')

})
