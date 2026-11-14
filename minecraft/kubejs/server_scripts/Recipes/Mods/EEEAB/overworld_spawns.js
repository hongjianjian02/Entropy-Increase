// 主世界普通小怪：全存档首次击败无名守卫者后开放自然生成。
const EEEAB_OVERWORLD_STAGE = 'eeeab_nameless_guardian_defeated'
const EEEAB_SPAWN_TYPE = Java.loadClass('net.minecraft.world.entity.MobSpawnType')
const EEEAB_MONSTER = Java.loadClass('net.minecraft.world.entity.monster.Monster')
const EEEAB_SERVER_PLAYER = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const EEEAB_STATS = Java.loadClass('net.minecraft.stats.Stats')
const EEEAB_ENTITY_INIT = Java.loadClass('com.eeeab.eeeabsmobs.server.init.EntityInit')

const EEEAB_OVERWORLD_MOBS = [
  'eeeabsmobs:corpse', // 死尸
  'eeeabsmobs:corpse_villager', // 死尸村民
  'eeeabsmobs:corpse_warlock', // 死尸术士
  'eeeabsmobs:immortal_skeleton', // 不朽骷髅
  'eeeabsmobs:immortal_archer', // 不朽骷髅「射手」
  'eeeabsmobs:immortal_knight', // 不朽骷髅「骑士」
  'eeeabsmobs:immortal_mage', // 不朽骷髅「法师」
  'eeeabsmobs:immortal_warrior', // 不朽骷髅「战士」
  'eeeabsmobs:immortal_shaman', // 不朽巫师
  'eeeabsmobs:immortal_executioner', // 不朽斩魂者
]

function unlockEeeabOverworldSpawns(server) {
  if (AStages.serverHasStage(EEEAB_OVERWORLD_STAGE)) return
  AStages.addStageToServer(EEEAB_OVERWORLD_STAGE, false, false, false)
  server.tell('§6无名守卫者已被击败，EEEAB 的小怪开始在主世界出现。')
}

EntityEvents.death('eeeabsmobs:nameless_guardian', event => {
  if (event.level.isClientSide()) return
  const killer = event.source.getEntity()
  const credit = event.entity.getKillCredit()
  if (!(killer instanceof EEEAB_SERVER_PLAYER) && !(credit instanceof EEEAB_SERVER_PLAYER)) return
  unlockEeeabOverworldSpawns(event.level.server)
})

// 兼容已有存档：有无名守卫者击杀统计的玩家登录时补上全局阶段。
PlayerEvents.loggedIn(event => {
  if (AStages.serverHasStage(EEEAB_OVERWORLD_STAGE)) return
  if (event.player.getStats().getValue(EEEAB_STATS.ENTITY_KILLED, EEEAB_ENTITY_INIT.NAMELESS_GUARDIAN.get()) > 0) {
    unlockEeeabOverworldSpawns(event.server)
  }
})

EEEAB_OVERWORLD_MOBS.forEach(entityId => {
  EntityEvents.checkSpawn(entityId, event => {
    if (event.level.isClientSide()) return
    if (String(event.level.dimension) !== 'minecraft:overworld') return
    if (event.type !== EEEAB_SPAWN_TYPE.NATURAL && event.type !== EEEAB_SPAWN_TYPE.CHUNK_GENERATION) return

    if (!AStages.serverHasStage(EEEAB_OVERWORLD_STAGE)) {
      event.cancel()
      return
    }

    // 模组没有注册普通刷怪地面/光照规则，沿用原版敌对生物检查。
    if (!EEEAB_MONSTER.checkMonsterSpawnRules(
      event.entity.getType(), event.level, event.type,
      event.entity.blockPosition(), event.level.getRandom()
    )) {
      event.cancel()
    }
  })
})
