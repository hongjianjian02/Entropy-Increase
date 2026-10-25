// 玩家出生点：暮色森林（Twilight Forest）
// 依赖：Twilight Forest（维度 id: twilightforest:twilight_forest）

const TF_DIM = 'twilightforest:twilight_forest'

function isInTwilight(player) {
  return String(player.level.dimension).includes(TF_DIM)
}

function sendToTwilight(player) {
  const tf = player.server.getLevel(TF_DIM)
  if (!tf) {
    player.tell('§c找不到暮色森林维度：确认 Twilight Forest 已安装')
    return false
  }

  // 1) 先切到 TF 上空，避免用主世界坐标去找地面
  player.teleportToLevel(tf, 0.5, 100, 0.5, 0, 0)

  // 2) 在 TF 里随机找一块地表落下去（under 320：只落在 320 以下的地面）
  //    用服务端身份执行，普通玩家没有 /spreadplayers 权限
  player.server.runCommandSilent(`execute as ${player.username} at @s run spreadplayers 0 0 0 64 under 320 false @s`)

  // 3) 重生点也设在这里（forced；TF 里床会爆炸，不能靠床）
  player.server.runCommandSilent(`execute as ${player.username} at @s run spawnpoint @s ~ ~ ~`)

  player.tell('§a你已在暮色森林醒来。')
  return true
}

PlayerEvents.loggedIn(event => {
  const player = event.player
  // 只处理第一次进服的玩家；之后回主世界再登录不会被拉回来
  if (player.persistentData.getBoolean('mysterious:tf_spawn')) return
  if (sendToTwilight(player)) {
    player.persistentData.putBoolean('mysterious:tf_spawn', true)
  }
})

PlayerEvents.respawned(event => {
  // 重生点已经在 TF 的话不会走到这里；被别的模组改回主世界时兜底
  if (!isInTwilight(event.player)) sendToTwilight(event.player)
})
