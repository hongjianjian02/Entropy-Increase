ServerEvents.recipes(event => {
  // 神秘王冠
  event.remove({ output: 'twilightforest:mystic_crown' })
  // 拆解台
  event.remove({ id: 'twilightforest:uncrafting_table' })
})