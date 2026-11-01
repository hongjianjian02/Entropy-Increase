ServerEvents.recipes(event => {
  // 精灵交易 - 铁返回
  event.remove({ id: 'botania:elven_trade/iron_return' })
  // 精灵交易 - 钻石返回
  event.remove({ id: 'botania:elven_trade/diamond_return' })
  // 精灵交易 - 末影珍珠返回
  event.remove({ id: 'botania:elven_trade/ender_pearl_return' })
  // 魔力尘 - 染料
  event.remove({ id: 'botania:mana_infusion/mana_powder_from_dye' })
})