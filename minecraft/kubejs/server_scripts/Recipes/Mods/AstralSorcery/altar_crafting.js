ServerEvents.recipes(event => {
  event.custom({
    type: 'astralsorcery:altar_crafting',
    base_focus_shatter_chance: 0.0,
    duration: 100,
    effects: [
      'astralsorcery:default_altar_sparkle',
      'astralsorcery:default_central_beam',
      'astralsorcery:default_lumen_input',
      'astralsorcery:default_relay_input'
    ],
    grid: {
      key: {
        V: { type: 'item', ingredient: { item: 'thaumaturge:ingot_void' } },
        G: { type: 'item', ingredient: { item: 'astralsorcery:glass_lens' } },
        H: { type: 'item', ingredient: { item: 'neovitae:ingot_hellforged' } },
        S: { type: 'item', ingredient: { item: 'astralsorcery:starmetal_ingot' } },
        P: { type: 'item', ingredient: { item: 'astralsorcery:illumination_powder' } },
        C: { type: 'item', ingredient: { item: 'astralsorcery:cave_illuminator' } }
      },
      pattern: [
        'SPS',
        'PCP',
        'SPS'
      ],
      relay_pattern: [
        'V G H',
        '     ',
        'G   G',
        '     ',
        'H G V'
      ]
    },
    may_chain: false,
    only_night: true,
    output_modifiers: [],
    outputs: [{ id: 'eicore:starlight_resonance_lens', count: 1 }],
    required_additional_inputs: [],
    required_fluid: [],
    required_lumen: [],
    required_starlight: [],
    required_type: 'resonance'
  }).id('astralsorcery:altar/starlight_resonance_lens')
})
