RecipeViewerEvents.removeEntries('item', event => {
  global.jaopcaStorageBlocks.forEach(definition => {
    event.remove(`jaopca:storage_blocks.${definition.material}`)
  })
})
