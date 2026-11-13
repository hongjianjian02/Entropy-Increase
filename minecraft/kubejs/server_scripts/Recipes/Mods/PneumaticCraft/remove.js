ServerEvents.recipes(event => {
  // 木炭 + 生物柴油 → 塑料：移除该热气动加工配方。
  event.remove({ id: 'pneumaticcraft:thermo_plant/plastic_from_biodiesel' })
})