// 白雏菊（Pure Daisy）配方
// 所有 remove 统一写在 remove.js，这个文件只放添加

ServerEvents.recipes(event => {

  // 1. 迷宫石 → 活石（原版「石头 → 活石」在 remove.js 里移除）
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'botania:tag',
      tag: '#twilightforest:mazestone'
    },
    output: {
      type: 'botania:block',
      block: 'botania:livingrock'
    },
    time: 150
  }).id('kubejs:pure_daisy_mazestone_to_livingrock')

  // 2. 根 → 活根方块
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'botania:block',
      block: 'twilightforest:root'
    },
    output: {
      type: 'botania:state',
      state: {
        Name: 'twilightforest:liveroot_block'
      }
    },
    time: 150
  }).id('kubejs:pure_daisy_root_to_liveroot')

  // 3. 红树林原木 → 活木（原版「任意原木 → 活木」在 remove.js 里移除）
  // copy_properties 让输出的活木保持输入原木的 axis（朝向）
  event.custom({
    type: 'botania:pure_daisy',
    copy_properties: true,
    input: {
      type: 'botania:block',
      block: 'twilightforest:mangrove_log'
    },
    output: {
      type: 'botania:block',
      block: 'botania:livingwood_log'
    },
    time: 150
  }).id('kubejs:pure_daisy_mangrove_to_livingwood')

})
