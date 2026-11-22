ServerEvents.recipes(event => {
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [{ item: 'astralsorcery:marble_raw', count: 4 }],
    pressure: 2.0,
    results: [{ id: 'eicore:compressed_marble', count: 1 }]
  }).id('pneumaticcraft:pressure_chamber/compressed_marble')

  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { item: 'deep_aether:stratus_ingot', count: 1 },
      { item: 'eicore:compressed_marble', count: 1 },
      { item: 'eicore:tiangang_ingot', count: 1 },
      { item: 'astralsorcery:aquamarine', count: 1 },
      { item: 'aether:gold_dungeon_key', count: 1 },
      { item: 'aether:bronze_dungeon_key', count: 1 },
      { item: 'deep_aether:brass_dungeon_key', count: 1 },
      { item: 'aether:silver_dungeon_key', count: 1 }
    ],
    pressure: 4.0,
    results: [{ id: 'eicore:tianshu_star', count: 1 }]
  }).id('pneumaticcraft:pressure_chamber/tianshu_star')
})
