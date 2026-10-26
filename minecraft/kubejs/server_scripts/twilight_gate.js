const GATE_TF_DIM = 'twilightforest:twilight_forest'
const GATE_OVERWORLD = 'minecraft:overworld'

const GATE_BRICKS = [
  'twilightforest:yellow_castle_rune_brick',
  'twilightforest:blue_castle_rune_brick',
  'twilightforest:violet_castle_rune_brick',
  'twilightforest:pink_castle_rune_brick'
]

const gateCooldown = {}

function gateIsWater(level, x, y, z) {
  return String(level.getBlock(x, y, z).id) === 'minecraft:water'
}

function gateRingOk(level, x0, y, z0) {
  for (let i = 0; i < GATE_BRICKS.length; i++) {
    const want = GATE_BRICKS[i]
    let hit = false
    for (let dx = -1; dx <= 2 && !hit; dx++) {
      for (let dz = -1; dz <= 2 && !hit; dz++) {
        for (let dy = -1; dy <= 1 && !hit; dy++) {
          if (String(level.getBlock(x0 + dx, y + dy, z0 + dz).id) === want) hit = true
        }
      }
    }
    if (!hit) return false
  }
  return true
}

function gateShapeOk(level, x, y, z) {
  for (let ox = -1; ox <= 0; ox++) {
    for (let oz = -1; oz <= 0; oz++) {
      const x0 = x + ox
      const z0 = z + oz
      if (
        gateIsWater(level, x0, y, z0) &&
        gateIsWater(level, x0 + 1, y, z0) &&
        gateIsWater(level, x0, y, z0 + 1) &&
        gateIsWater(level, x0 + 1, y, z0 + 1) &&
        gateRingOk(level, x0, y, z0)
      ) return true
    }
  }
  return false
}

function gateFindNear(level, cx, cy, cz) {
  for (let dx = -3; dx <= 3; dx++) {
    for (let dz = -3; dz <= 3; dz++) {
      for (let dy = -2; dy <= 1; dy++) {
        const x = cx + dx
        const y = cy + dy
        const z = cz + dz
        if (gateIsWater(level, x, y, z) && gateShapeOk(level, x, y, z)) return true
      }
    }
  }
  return false
}

function gateInTwilight(level) {
  return String(level.dimension).includes(GATE_TF_DIM)
}

function gateGoOverworld(player) {
  const ow = player.server.getLevel(GATE_OVERWORLD)
  if (!ow) {
    player.tell('§c找不到主世界维度')
    return false
  }
  const data = player.persistentData
  let x = data.getDouble('mysterious:home_x')
  let y = data.getDouble('mysterious:home_y')
  let z = data.getDouble('mysterious:home_z')
  if (y <= 0) {
    x = 0.5
    y = 100
    z = 0.5
  }
  player.teleportToLevel(ow, x, y, z, 0, 0)
  player.server.runCommandSilent(`execute in ${GATE_OVERWORLD} run spreadplayers ${x} ${z} 0 8 under 320 false ${player.username}`)
  data.putBoolean('mysterious:returned', true)
  player.tell('§b符文砖门开启，你回到了主世界。')
  return true
}

function gateGoTwilight(player) {
  const tf = player.server.getLevel(GATE_TF_DIM)
  if (!tf) {
    player.tell('§c找不到暮色森林维度')
    return false
  }
  player.teleportToLevel(tf, 0.5, 100, 0.5, 0, 0)
  player.server.runCommandSilent(`execute in ${GATE_TF_DIM} run spreadplayers 0 0 0 64 under 320 false ${player.username}`)
  player.server.runCommandSilent(`execute as ${player.username} at @s run spawnpoint @s ~ ~ ~`)
  player.tell('§5符文砖门开启，你回到了暮色森林。')
  return true
}

BlockEvents.rightClicked(event => {
  const item = event.item
  if (!item || String(item.id) !== 'minecraft:diamond') return

  const player = event.player
  const level = event.level
  const block = event.block

  if (!gateFindNear(level, block.x, block.y, block.z)) return

  const now = Date.now()
  const key = String(player.username)
  if (gateCooldown[key] && now - gateCooldown[key] < 3000) return
  gateCooldown[key] = now

  event.cancel()
  player.server.runCommandSilent(`clear ${player.username} minecraft:diamond 1`)
  player.server.runCommandSilent(`playsound minecraft:block.end_portal.spawn master ${player.username} ~ ~ ~ 1 1`)
  player.server.runCommandSilent(`particle minecraft:end_rod ${block.x} ${block.y + 1} ${block.z} 0.6 0.6 0.6 0.1 60 normal`)

  if (gateInTwilight(level)) {
    gateGoOverworld(player)
  } else {
    gateGoTwilight(player)
  }
})
