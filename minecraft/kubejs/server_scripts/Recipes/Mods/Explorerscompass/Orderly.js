// 有序合成
ServerEvents.recipes(event => {
// 探险家指南针
  event.shaped(
    Item.of('explorerscompass:explorerscompass', 1),
    ['#A#', 'ABA', '#A#'],
    {
      '#': 'minecraft:cobweb',
      'A': 'twilightforest:etched_nagastone',
      'B': 'minecraft:compass'
    }
  ).id('explorerscompass:explorers_compass')
})