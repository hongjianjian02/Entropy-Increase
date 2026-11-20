// 盖亚Ⅰ/Ⅱ允许在主世界和下界挑战；不额外增加阶段条件。
// 两种献祭物都在点击信标后调用 GaiaGuardianEntity.spawn。
// 其他维度在扣材料前拦截。
BlockEvents.rightClicked('minecraft:beacon', event => {
  var sacrificeId = String(event.item.id)
  if (sacrificeId !== 'botania:terrasteel_ingot' && sacrificeId !== 'botania:gaia_ingot') return
  if (event.level.isClientSide()) return
  var dimension = String(event.level.dimension)
  if (dimension === 'minecraft:overworld' || dimension === 'minecraft:the_nether') return

  event.player.tell('§c盖亚Ⅰ和盖亚Ⅱ只能在主世界或下界挑战，请前往允许的维度进行召唤。')
  event.cancel()
})

// Botania 456 的盖亚在召怪计时结束前死亡时，本体选空表，随后仍按参战玩家发原奖励。
const GAIA_ENTITY_DIE = Java.loadClass('net.minecraft.world.level.gameevent.GameEvent').ENTITY_DIE
const GAIA_DO_MOB_LOOT = Java.loadClass('net.minecraft.world.level.GameRules').RULE_DOMOBLOOT
const GAIA_LOOT_KEY = Java.loadClass('net.minecraft.resources.ResourceKey').create(
  Java.loadClass('net.minecraft.core.registries.Registries').LOOT_TABLE,
  ID.kjs('entities/gaia_nether_bonus')
)
const GAIA_EVENT_PRIORITY = Java.loadClass('net.neoforged.bus.api.EventPriority')

// die() 已通过死亡取消检查，原版即将用真实伤害来源和玩家归属结算本体掉落。
NativeEvents.onEvent(GAIA_EVENT_PRIORITY.HIGHEST, Java.loadClass('net.neoforged.neoforge.event.VanillaGameEvent'), event => {
  if (!event.getVanillaEvent().equals(GAIA_ENTITY_DIE)) return
  var gaia = event.getCause()
  if (!gaia || String(gaia.type) !== 'botania:gaia_guardian' || !gaia.isDeadOrDying()) return

  var level = event.getLevel()
  var dimension = String(level.dimension)
  var nbt = gaia.nbt
  var ticks = nbt.getInt('mobSpawnTicks')
  var original = String(gaia.getLootTable().location())
  var explicit = nbt.contains('DeathLootTable')
  var mobLoot = level.getGameRules().getBoolean(GAIA_DO_MOB_LOOT)
  if (dimension === 'minecraft:the_nether' && mobLoot && !explicit && ticks > 0 && original === 'minecraft:empty') {
    // 仅补这次本体结算。Mob 在返回前清除覆盖，Botania 后续自行选用逐人奖励表。
    gaia.botania_setLootTable(GAIA_LOOT_KEY)
  }
  console.info('[EI-Gaia] select uuid=' + gaia.getStringUuid() + ' dimension=' + dimension +
    ' tier=' + (gaia.isHardMode() ? 'II' : 'I') + ' mobSpawnTicks=' + ticks + ' doMobLoot=' + mobLoot +
    ' explicit=' + explicit + ' original=' + original + ' selected=' + gaia.getLootTable().location())
})

// 直接只读 NeoForge 捕获的掉落实体，以同一 UUID 区分 Boss 死亡处和参战玩家脚下的奖励。
NativeEvents.onEvent(GAIA_EVENT_PRIORITY.LOWEST, Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingDropsEvent'), event => {
  var gaia = event.getEntity()
  if (String(gaia.type) !== 'botania:gaia_guardian') return
  var spirits = 0
  var stacks = []
  for (var drop of event.getDrops()) {
    var stack = drop.getItem()
    var id = String(stack.id)
    if (id !== 'botania:gaia_spirit' && id !== 'botania:gaia_ingot') continue
    if (id === 'botania:gaia_spirit') spirits += stack.getCount()
    var pos = [drop.getX(), drop.getY(), drop.getZ()].map(n => n.toFixed(1)).join(',')
    stacks.push(id + ' x' + stack.getCount() + ' @' + pos)
  }
  console.info('[EI-Gaia] drops uuid=' + gaia.getStringUuid() + ' recentlyHit=' + event.isRecentlyHit() +
    ' spirits=' + spirits + ' stacks=[' + stacks.join(' | ') + ']')
})
