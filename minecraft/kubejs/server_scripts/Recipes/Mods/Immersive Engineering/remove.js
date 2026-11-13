ServerEvents.recipes(event => {
  // 蓝图
  event.remove({ id: 'immersiveengineering:crafting/blueprint_components' })
  // 铁锭 + 石油焦粉 → 钢锭（禁用）
  event.remove({ id: 'immersivepetroleum:arcfurnace/steel' })
  // 焦煤变高定向石墨
  event.remove({ id: 'immersiveengineering:squeezer/graphite_dust' })
  // 精炼厂：苯 + 石油气 + 红石 → 杂酚油
  event.remove({ id: 'immersivepetroleum:refinery/phenol' })
  // 精炼厂：乙醇 + 银板催化 → 乙醛
  event.remove({ id: 'immersiveengineering:refinery/acetaldehyde' })
  // 删除金齿轮在工作台中的合成
  event.remove({ id: 'industrialforegoing:gold_gear' })
  // 删除沉浸工艺模组所有棒在工作台中的合成
  event.remove({ mod: 'immersiveengineering', group: 'sticks' })
})
