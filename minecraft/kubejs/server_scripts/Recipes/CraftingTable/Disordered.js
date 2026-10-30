// 无序合成
// 烈焰粉额外
ServerEvents.recipes(event => {
  event.shapeless('minecraft:blaze_powder', [
    '#twilightforest:fiery_vial',
    'minecraft:glowstone_dust'
  ]).id('kubejs:blaze_powder')
})
