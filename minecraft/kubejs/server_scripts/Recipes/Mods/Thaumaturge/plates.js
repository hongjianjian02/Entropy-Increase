ServerEvents.recipes(event => {
  const jaopca = Java.loadClass('thelm.jaopca.api.JAOPCAApi').instance()
  const plates = [
    { item: 'plate_iron', material: 'iron' },
    { item: 'plate_brass', material: 'brass' },
    { item: 'plate_thaumium', material: 'thaumium' },
    { item: 'plate_void', material: 'void_metal' }
  ]

  plates.forEach(plate => {
    // 删除 JAOPCA/IE 的一份材料锤制入口，覆盖本模组原三锭出三板配方。
    event.remove({
      id: String(jaopca.miscHelper().getRecipeKey(
        'immersiveengineering.material_to_plate_hammer', plate.material
      ))
    })
    event.shaped(Item.of(`thaumaturge:${plate.item}`, 1), ['H', 'M', 'M'], {
      H: 'immersiveengineering:hammer',
      M: `#c:ingots/${plate.material}`
    }).id(`thaumaturge:${plate.item}`)
  })
})
