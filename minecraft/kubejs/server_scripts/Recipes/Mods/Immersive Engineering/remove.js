ServerEvents.recipes(event => {
  // 蓝图
  event.remove({ id: 'immersiveengineering:crafting/blueprint_components' })
  // 铁锭 + 石油焦粉 → 钢锭（禁用）
  event.remove({ id: 'immersivepetroleum:arcfurnace/steel' })
  // 焦煤变高定向石墨
  event.remove({ id: 'immersiveengineering:squeezer/graphite_dust' })

})