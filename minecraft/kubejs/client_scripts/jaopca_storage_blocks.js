RecipeViewerEvents.removeEntries('item', event => {
  global.jaopcaStorageBlocks.forEach(definition => {
    const legacyBlock = `jaopca:storage_blocks.${definition.material}`
    if (Item.exists(legacyBlock)) event.remove(legacyBlock)
  })
})
