// 白雏菊
ServerEvents.recipes(event => {

  // 死岩→活石
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'block',
      block: 'twilightforest:deadrock'
    },
    output: { name: 'botania:livingrock' },
    time: 150
  }).id('botania:pure_daisy/livingrock')

  // 根→活根方块
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'block',
      block: 'twilightforest:root'
    },
    output: { name: 'twilightforest:liveroot_block' },
    time: 150
  }).id('kubejs:pure_daisy/liveroot')

  // Revived 使用独立的属性复制配方类型，覆盖新版 livingwood 配方。
  // 红树林原木→活木
  event.custom({
    type: 'botania:state_copying_pure_daisy',
    input: {
      type: 'block',
      block: 'twilightforest:mangrove_log'
    },
    output: 'botania:livingwood_log',
    time: 150
  }).id('botania:pure_daisy/livingwood')

})
