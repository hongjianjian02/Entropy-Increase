// IE · 钢板锤打
// 2 钢锭 + 锤子 → 1 钢板，锤子消耗 1 点耐久
ServerEvents.recipes(event => {
  event.shapeless(
    'immersiveengineering:plate_steel',
    [
      '#c:ingots/steel',
      '#c:ingots/steel',
      'immersiveengineering:hammer'
    ]
  )
    .id('immersiveengineering:crafting/plate_steel_hammering')
    .damageIngredient({ item: 'immersiveengineering:hammer' }, 1)
})