const TF_DIM = 'twilightforest:twilight_forest'

function isInTwilight(player) {
  return String(player.level.dimension).includes(TF_DIM)
}

function saveHome(player) {
  if (isInTwilight(player)) return
  const data = player.persistentData
  data.putDouble('mysterious:home_x', player.x)
  data.putDouble('mysterious:home_y', player.y)
  data.putDouble('mysterious:home_z', player.z)
}

function sendToTwilight(player) {
  const tf = player.server.getLevel(TF_DIM)
  if (!tf) {
    player.tell('§c找不到暮色森林维度：确认 Twilight Forest 已安装')
    return false
  }

  player.teleportToLevel(tf, 0.5, 100, 0.5, 0, 0)

  player.server.runCommandSilent(`execute as ${player.username} at @s run spreadplayers 0 0 0 64 under 320 false @s`)

  player.server.runCommandSilent(`execute as ${player.username} at @s run spawnpoint @s ~ ~ ~`)

  player.tell('§a由于主世界的扭曲，你已在暮色森林醒来。')
  return true
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  if (player.persistentData.getBoolean('mysterious:tf_spawn')) return
  saveHome(player)
  if (sendToTwilight(player)) {
    player.persistentData.putBoolean('mysterious:tf_spawn', true)
  }
})

PlayerEvents.respawned(event => {
  const player = event.player
  if (player.persistentData.getBoolean('mysterious:returned')) return
  if (!isInTwilight(player)) sendToTwilight(player)
})
