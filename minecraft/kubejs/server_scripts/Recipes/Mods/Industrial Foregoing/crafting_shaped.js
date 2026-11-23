ServerEvents.recipes(event => {
  event.replaceInput(
    { id: 'industrialforegoing:machine_frame_pity' },
    '#c:storage_blocks/redstone',
    Ingredient.of('hostilenetworks:end_prediction')
  )
})
