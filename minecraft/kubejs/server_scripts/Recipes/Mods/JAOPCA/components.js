ServerEvents.recipes(event => {
  const jaopca = Java.loadClass('thelm.jaopca.api.JAOPCAApi').instance()
  const forms = [
    { name: 'gears', pattern: [' M ', 'M M', ' M '] },
    { name: 'plates', pattern: ['H', 'M', 'M'] },
    { name: 'rods', pattern: ['M', 'M'], count: 4 }
  ]

  forms.forEach(definition => {
    const form = jaopca.getForm(definition.name)
    if (form == null) {
      throw new Error(`Missing JAOPCA custom form: ${definition.name}`)
    }

    form.getMaterials().forEach(material => {
      const materialName = String(material.getName())
      const ingredientForm = String(material.getType().getFormName())
      const ingredients = { M: `#c:${ingredientForm}/${materialName}` }

      if (definition.name === 'plates') {
        // 移除 JAOPCA/IE 自动生成的一份材料锤制配方，保留机器加工入口。
        event.remove({
          id: String(jaopca.miscHelper().getRecipeKey(
            'immersiveengineering.material_to_plate_hammer', materialName
          ))
        })
        // 工程师锤自带合成剩余物：返回锤子并扣 1 点耐久。
        ingredients.H = 'immersiveengineering:hammer'
      }

      event.shaped(
        Item.of(`jaopca:${definition.name}.${materialName}`, definition.count || 1),
        definition.pattern,
        ingredients
      ).id(`kubejs:jaopca/${definition.name}/${materialName}`)
    })
  })
})
