// 白雏菊 
// 根变活根
ServerEvents.recipes(event => {
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
  }).id('kubejs:pure_daisy_liveroot_to_root')
})
