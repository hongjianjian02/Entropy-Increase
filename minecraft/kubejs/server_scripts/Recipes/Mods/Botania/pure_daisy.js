// 白雏菊
ServerEvents.recipes(event => {

  // 死岩→活石
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'botania:block',
      block: 'twilightforest:deadrock'
    },
    output: {
      type: 'botania:block',
      block: 'botania:livingrock'
    },
    time: 150
  }).id('kubejs:pure_daisy_mazestone_to_livingrock')

  // 根→活根方块
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

  // 红树林原木→活木
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
