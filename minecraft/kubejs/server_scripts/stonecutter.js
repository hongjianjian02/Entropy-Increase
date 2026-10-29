// 切石机
ServerEvents.generateData('after_mods', event => {
    event.json('kubejs:recipe/ender_pearl', {"type":"minecraft:stonecutting","ingredient":{"item":"twilightforest:lich_trophy"},"result":{"id":"minecraft:ender_pearl","count":16}})
    event.json('kubejs:recipe/naga_scale', {"type":"minecraft:stonecutting","ingredient":{"item":"twilightforest:naga_trophy"},"result":{"id":"twilightforest:naga_scale","count":16}})
})
