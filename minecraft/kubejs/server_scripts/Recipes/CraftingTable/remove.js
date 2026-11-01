ServerEvents.recipes(event => {
  // 精灵王冠
  event.remove({ output: 'twilightforest:mystic_crown' })
  // 超级王冠
  event.remove({ output: 'extrabotany:super_crown' })
  // 解构台
  event.remove({ id: 'twilightforest:uncrafting_table' })
  // 精灵交易 - 铁返回
  event.remove({ id: 'botania:elven_trade/iron_return' })
  // 精灵交易 - 钻石返回
  event.remove({ id: 'botania:elven_trade/diamond_return' })
  // 精灵交易 - 末影珍珠返回
  event.remove({ id: 'botania:elven_trade/ender_pearl_return' })
  // 魔力尘 - 染料
  event.remove({ id: 'botania:mana_infusion/mana_powder_from_dye' })
})
