// 电弧炉
ServerEvents.recipes(event => {

  // 电弧炉 · 钢锭：铁锭 → 炼金黄铜锭
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    additives: [{ tag: 'c:dusts/coal_coke' }],
    energy: 204800,
    input: { item: 'thaumaturge:ingot_brass' },
    results: [{ tag: 'c:ingots/steel' }],
    slag: { tag: 'c:slag' },
    time: 400
  }).id('immersiveengineering:arcfurnace/steel')

})