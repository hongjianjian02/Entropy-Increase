ServerEvents.recipes(event => {
  // 魔凝机的工作台配方
  event.shaped('immortalers_delight:enchantal_cooler', ['SIS', 'IRI', 'ILI'], {
    S: 'thaumaturge:salis_mundus',
    I: 'minecraft:iron_ingot',
    R: 'deep_aether:remedy_bucket',
    L: 'minecraft:lapis_block'
  }).id('immortalers_delight:enchantal_cooler')
})
