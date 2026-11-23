// 熔炉配方
ServerEvents.recipes(event => {
    event.smelting('eicore:tianqing_ingot', 'eicore:tianqing_ore')
        .xp(0.7)
        .cookingTime(200)
        .id('kubejs:smelting/tianqing_ingot')
})
