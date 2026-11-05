//有序合成
// 应用能源 2 · ME 控制器
ServerEvents.recipes(event => {
  event.shaped(
    'ae2:controller',
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'eeeabsmobs:ancient_drive_crystal',
      B: 'neoecoae:energized_fluix_crystal',
      C: 'eeeabsmobs:guardian_core'
    }
  ).id('kubejs:network/blocks/controller')

  // ME 控制器
  event.shaped(
    'ae2:controller',
    [
      'ABA',
      'CDE',
      'AFA'
    ],
    {
      A: 'ae2:smooth_sky_stone_block',
      B: 'ae2:engineering_processor',
      C: 'ae2:calculation_processor',
      D: 'neoecoae:energized_fluix_crystal_block',
      E: 'ae2:logic_processor',
      F: 'ae2:energy_cell'
    }
  ).id('ae2:network/blocks/controller')
})