// 魔力池
ServerEvents.generateData('after_mods', event => {

// 铁木变魔力钢，覆盖当前版本的 manasteel_ingot 配方
event.json(
  'botania:recipe/mana_infusion/manasteel_ingot',
  {
    "type": "botania:mana_infusion",
    "input": {"tag":"c:ingots/ironwood"},
    "mana": 3000,
    "output": {"count":1,"id":"botania:manasteel_ingot"}
  }
    )
})
