ServerEvents.recipes(event => {
  event.remove({ output: 'twilightforest:mystic_crown' })
  event.remove({ output: 'extrabotany:super_crown' })
  event.remove({ id: 'twilightforest:uncrafting_table' })
})
