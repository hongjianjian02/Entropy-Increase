ServerEvents.recipes(event => {
  const jaopca = Java.loadClass('thelm.jaopca.api.JAOPCAApi').instance()
  const forms = [
    { name: 'gears', pattern: [' M ', 'M M', ' M '] },
    { name: 'plates', pattern: [' M', 'M '] },
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

      event.shaped(
        Item.of(`jaopca:${definition.name}.${materialName}`, definition.count || 1),
        definition.pattern,
        { M: `#c:${ingredientForm}/${materialName}` }
      ).id(`kubejs:jaopca/${definition.name}/${materialName}`)
    })
  })
})
