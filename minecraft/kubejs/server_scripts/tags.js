// 标签（Tag）调整
// 约定：只调整标签归属，不涉及配方

ServerEvents.tags('item', event => {

  // 碳素钢锭：从通用钢标签中摘除，让它成为独立材料
  // 否则它会满足所有 #c:ingots/steel 的配方需求，也会被 #c:ingots 匹配到
  // （#c:ingots 是通过 IE / Mekanism 的 c:ingots 引用 #c:ingots/steel 间接包含它的）
  event.remove('c:ingots/steel', 'locusazzurro_icaruswings:steel_ingot')
  event.remove('c:ingots', 'locusazzurro_icaruswings:steel_ingot')

})
