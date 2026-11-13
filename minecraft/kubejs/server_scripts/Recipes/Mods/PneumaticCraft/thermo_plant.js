ServerEvents.recipes(event => {
  // 汽油 → 液化石油气：最低 600°C；PneumaticCraft 配方温度以 K 保存。
  event.custom({
    type: 'pneumaticcraft:thermo_plant',
    inputs: {
      fluid: { amount: 100, tag: 'c:gasoline' },
      item: []
    },
    outputs: {
      fluid_output: { amount: 80, id: 'pneumaticcraft:lpg' }
    },
    pressure: 2.0,
    temperature: { min: 873 }
  }).id('pneumaticcraft:thermo_plant/lpg')
})
