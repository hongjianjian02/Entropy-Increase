ServerEvents.generateData('after_mods', event => {
  // 泰拉凝聚板
  // 激活的符文宝石
event.json(
  'botania:recipe/terra_plate/activated_rune_gem',
  {
    "type": "botania:terra_plate",
  "ingredients": [
    { "item": "twilightforest:thorn_rose" },
    { "item": "eicore:unstable_rune_gem" },
    { "item": "botania:dragonstone_block" }
  ],
  "mana": 100000,
  "result": {"count":1,"id":"eicore:activated_rune_gem"}
})})