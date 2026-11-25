RecipeViewerEvents.removeCategories(event => {
    event.remove('twilightforest:uncrafting')
    // 保留 AS JEI Fix 的横向祭坛页面，隐藏原版分类在 EMI 桥接中的重复入口。
    event.remove('astralsorcery:altar_crafting')
})
