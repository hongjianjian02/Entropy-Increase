ServerEvents.recipes(event => {
  event.remove({ output: 'twilightforest:mystic_crown' })
  event.remove({ output: 'extrabotany:super_crown' })
  event.remove({ id: 'twilightforest:uncrafting_table' })
  event.remove({ id: 'botania:pure_daisy/livingrock' })
  event.remove({ id: 'botania:pure_daisy/livingwood_log' })
  event.remove({ id: 'botania:alfheim_portal' })
})
