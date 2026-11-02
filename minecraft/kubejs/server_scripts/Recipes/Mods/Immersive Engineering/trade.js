// 村民交易调整
// 使用 MoreJS 的 villagerTrades 事件
// 移除 IE 工程师村民出售的工程师蓝图（immersiveengineering:blueprint）
MoreJS.villagerTrades(event => {
  // 蓝图分 components / bullet / specialBullet 三种，TradeFilter 按物品匹配，无法区分组件
  // 这里会把三种蓝图交易一并移除
  event.removeTrades({ output: 'immersiveengineering:blueprint' })
})
