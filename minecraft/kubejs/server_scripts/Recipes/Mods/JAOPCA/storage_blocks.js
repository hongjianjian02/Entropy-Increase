ServerEvents.recipes(event => {
  global.jaopcaStorageBlocks.forEach(definition => {
    const material = definition.material
    const legacyBlock = `jaopca:storage_blocks.${material}`

    // 原 JAOPCA 压缩和按公共标签拆解的配方均移除，沿用原模组压缩成本。
    event.remove({ id: `jaopca:storage_blocks.to_storage_block.${material}` })
    event.remove({ id: `jaopca:storage_blocks.to_material.${material}` })

    // 旧 JAOPCA 块实际存储 9 份材料；指定旧块，避免原模组四份材料块拆出九份。
    event.shapeless(Item.of(definition.item, 9), [legacyBlock])
      .id(`kubejs:jaopca/legacy_storage_blocks/${material}`)
  })
})

const jaopcaStorageBlockTagRegistries = ['item', 'block']
jaopcaStorageBlockTagRegistries.forEach(registry => {
  ServerEvents.tags(registry, event => {
    global.jaopcaStorageBlocks.forEach(definition => {
      const tag = `c:storage_blocks/${definition.material}`
      const legacyBlock = `jaopca:storage_blocks.${definition.material}`
      event.remove(tag, legacyBlock)
      event.remove('c:storage_blocks', legacyBlock)
      event.add(tag, definition.block)
      event.add('c:storage_blocks', definition.block)
    })
  })
})
