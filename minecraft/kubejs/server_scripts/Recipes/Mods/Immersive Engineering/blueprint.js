ServerEvents.recipes(event => {
//铁机械零件
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            { basePredicate: { tag: 'c:plates/iron' }, count: 2 },
            { item: 'immersiveengineering:ingot_lead' }
        ],
        result: { id: 'immersiveengineering:component_iron', count: 1 }
    }).id('immersiveengineering:blueprint/component_iron')
    //钢机械零件
    event.custom({
        type: 'immersiveengineering:blueprint',
        category: 'components',
        inputs: [
            { basePredicate: { tag: 'c:plates/iron' }, count: 2 },
            { item: 'immersiveengineering:ingot_lead' }
        ],
        result: { id: 'immersiveengineering:component_iron', count: 1 }
    }).id('immersiveengineering:blueprint/component_iron')
})
