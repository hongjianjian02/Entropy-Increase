ServerEvents.recipes(event => {
  // 精炼厂控制器：两侧红石粉改为气动塑料片，沿用原配方的储罐组件要求。
  event.replaceInput(
    { id: 'pneumaticcraft:refinery' },
    '#c:dusts/redstone',
    Ingredient.of('pneumaticcraft:plastic')
  )
})
