StartupEvents.modifyCreativeTab('twilightforest:equipment', event => {
  try {
    event.remove('twilightforest:mystic_crown')
    console.info('[hide] removed twilightforest:mystic_crown from twilightforest:equipment')
  } catch (err) {
    console.error('[hide] twilightforest tab: ' + err)
  }
})

StartupEvents.modifyCreativeTab('extrabotany:extrabotany', event => {
  try {
    event.remove('extrabotany:super_crown')
    console.info('[hide] removed extrabotany:super_crown from extrabotany:extrabotany')
  } catch (err) {
    console.error('[hide] extrabotany tab: ' + err)
  }
})

StartupEvents.modifyCreativeTab('botania:botania', event => {
  try {
    event.remove('extrabotany:super_crown')
    console.info('[hide] removed extrabotany:super_crown from botania:botania')
  } catch (err) {
    console.error('[hide] botania tab: ' + err)
  }
})
