ServerEvents.recipes(event => {
  // 魔凝机使用固定的加工进度阈值 100 tick（约 5 秒）。
  event.custom({
    type: 'immortalers_delight:enchantal_cooler',
    ingredients: [{ item: 'deep_aether:sterling_aercloud' }],
    output: { id: 'deep_aether:chromatic_aercloud', count: 1 }
  }).id('immortalers_delight:enchantal_cooler/chromatic_aercloud')
})
