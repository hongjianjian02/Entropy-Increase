const ARRIVAL_FROM = 'twilightforest:twilight_forest'
const ARRIVAL_TO = 'minecraft:overworld'

const arrivalLast = {}

function arrivalFill(player, blockId, filter) {
  var x = Math.floor(player.x)
  var y = Math.floor(player.y)
  var z = Math.floor(player.z)
  player.server.runCommandSilent(`fill ${x - 5} ${y - 3} ${z - 5} ${x + 5} ${y + 4} ${z + 5} ${blockId} replace ${filter}`)
}

PlayerEvents.tick(event => {
  var player = event.player
  var dim = String(player.level.dimension)
  var last = arrivalLast[player.username]
  arrivalLast[player.username] = dim

  if (last == null) return
  if (last === dim) return
  if (last.indexOf(ARRIVAL_FROM) < 0) return
  if (dim.indexOf(ARRIVAL_TO) < 0) return

  arrivalFill(player, 'twilightforest:yellow_castle_rune_brick', '#minecraft:flowers')
  arrivalFill(player, 'twilightforest:blue_castle_rune_brick', 'minecraft:short_grass')
  arrivalFill(player, 'twilightforest:violet_castle_rune_brick', 'minecraft:tall_grass')
  arrivalFill(player, 'twilightforest:pink_castle_rune_brick', 'minecraft:fern')

  if (!player.persistentData.getBoolean('mysterious:rift_notice')) {
    player.persistentData.putBoolean('mysterious:rift_notice', true)
    player.tell('§5由于主世界的“裂隙”入侵，传送门框架已崩坏，但是还是可以维持基础的传送的')
  }

  player.server.runCommandSilent(`playsound minecraft:block.stone.place master ${player.username} ~ ~ ~ 1 1`)
})
