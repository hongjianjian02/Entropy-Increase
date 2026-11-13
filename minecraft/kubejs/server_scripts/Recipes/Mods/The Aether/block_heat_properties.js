ServerEvents.recipes(event => {
  // 天境冰石：-1000°C
  event.custom({
    type: 'pneumaticcraft:heat_properties',
    block: 'aether:icestone',
    temperature: -727,
    thermalResistance: 500
  }).id('kubejs:pneumaticcraft/block_heat_properties/icestone')
})
