// 重复储存块统一使用原模组方块；保留旧 JAOPCA 注册，供存档和回收配方使用。
// 原 JAOPCA 块均由 9 份材料压缩；原模组的四份材料压缩成本继续保留。
global.jaopcaStorageBlocks = [
  { material: 'blazegold', block: 'justdirethings:blazegold_block', item: 'justdirethings:blazegold_ingot' },
  { material: 'eclipsealloy', block: 'justdirethings:eclipsealloy_block', item: 'justdirethings:eclipsealloy_ingot' },
  { material: 'ferricore', block: 'justdirethings:ferricore_block', item: 'justdirethings:ferricore_ingot' },
  { material: 'grains_of_infinity', block: 'enderio_evolution:infinity_dust_block', item: 'enderio:grains_of_infinity' },
  { material: 'fluix', block: 'ae2:fluix_block', item: 'ae2:fluix_crystal' },
  { material: 'lattra', block: 'extendedae_plus:lattra_crystal_block', item: 'extendedae_plus:lattra_crystal' },
  { material: 'salt', block: 'mekanism:block_salt', item: 'mekanism:salt' },
  { material: 'blaze_quartz', block: 'botania:blaze_quartz_block', item: 'botania:blaze_quartz' },
  { material: 'dark_quartz', block: 'botania:smokey_quartz_block', item: 'botania:smokey_quartz' },
  { material: 'elven_quartz', block: 'botania:elven_quartz_block', item: 'botania:elven_quartz' },
  { material: 'lavender_quartz', block: 'botania:lavender_quartz_block', item: 'botania:lavender_quartz' },
  { material: 'mana_quartz', block: 'botania:mana_quartz_block', item: 'botania:mana_quartz' },
  { material: 'red_quartz', block: 'botania:red_quartz_block', item: 'botania:red_quartz' },
  { material: 'sunny_quartz', block: 'botania:sunny_quartz_block', item: 'botania:sunny_quartz' }
]

StartupEvents.modifyCreativeTab('jaopca:tab', event => {
  global.jaopcaStorageBlocks.forEach(definition => {
    const legacyBlock = `jaopca:storage_blocks.${definition.material}`
    if (Item.exists(legacyBlock)) event.remove(legacyBlock)
  })
})
