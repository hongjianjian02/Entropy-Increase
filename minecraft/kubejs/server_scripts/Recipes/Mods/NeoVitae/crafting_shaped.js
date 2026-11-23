ServerEvents.recipes(event => {
  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'equipment',
    pattern: [
      'dfd',
      'ase',
      'dwd'
    ],
    key: {
      a: { item: 'neovitae:air_scribe_tool' },
      d: { tag: 'c:gems/diamond' },
      e: { item: 'neovitae:earth_scribe_tool' },
      f: { item: 'neovitae:fire_scribe_tool' },
      s: { item: 'eicore:ritual_scribe_tool' },
      w: { item: 'neovitae:water_scribe_tool' }
    },
    result: { count: 1, id: 'neovitae:ritual_diviner' }
  }).id('neovitae:ritual_diviner')

  event.custom({
    type: 'minecraft:crafting_shaped',
    category: 'building',
    pattern: [
      'ss',
      'sb'
    ],
    key: {
      b: { item: 'neovitae:weak_blood_shard' },
      s: { item: 'eternal_starlight:grimstone_bricks' }
    },
    result: { count: 4, id: 'neovitae:bloodstone_brick' }
  }).id('neovitae:bloodstone_brick')
})
