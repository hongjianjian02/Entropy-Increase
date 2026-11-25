const EI_CH3_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_CH3_CHAMPION_ATTACHMENT = Java.loadClass('top.theillusivec4.champions.common.capability.ChampionAttachment')
const EI_CH3_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_CH3_JOIN_LEVEL = Java.loadClass('net.neoforged.neoforge.event.entity.EntityJoinLevelEvent')
const EI_CH3_EVENT_PRIORITY = Java.loadClass('net.neoforged.bus.api.EventPriority')
const EI_CH3_ATTRIBUTES = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
const EI_CH3_ATTRIBUTE_MODIFIER = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
const EI_CH3_ATTRIBUTE_OPERATION = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
const EI_CH3_RESOURCE_LOCATION = Java.loadClass('net.minecraft.resources.ResourceLocation')
const EI_CH3_AFFIX_LIST = Java.loadClass('java.util.ArrayList')

const EI_CH3_BOSSES = {
  'eeeabsmobs:corpse_warlock': {
    maxHealth: 1400,
    affixes: [
      'champions:desecrating', 'champions:plagued', 'champions:wounding',
      'champions:arctic', 'champions:lively'
    ]
  },
  'eeeabsmobs:nameless_guardian': {
    maxHealth: 1550,
    affixes: [
      'champions:knocking', 'champions:wounding', 'champions:hasty',
      'champions:dampening', 'champions:lively'
    ]
  },
  'eeeabsmobs:relic_annihilator': {
    maxHealth: 1650,
    affixes: [
      'champions:enkindling', 'champions:molten', 'champions:arctic',
      'champions:dampening', 'champions:magnetic'
    ]
  },
  'eeeabsmobs:realm_warden': {
    maxHealth: 1800,
    affixes: [
      'champions:knocking', 'champions:magnetic', 'champions:desecrating',
      'champions:wounding', 'champions:molten'
    ]
  },
  // 原生冠军标签已包含末影龙；只使用攻击/受伤和独立 tick 词条，沿用五星属性成长。
  'minecraft:ender_dragon': {
    affixes: [
      'champions:knocking', 'champions:wounding', 'champions:plagued',
      'champions:lively', 'champions:dampening'
    ]
  }
}
const EI_CH3_HEALTH_MODIFIER_ID = EI_CH3_RESOURCE_LOCATION.parse('kubejs:chapter3_boss_max_health')

// Run before Champions' NORMAL listener so it still runs the preset's onSpawn hooks.
NativeEvents.onEvent(EI_CH3_EVENT_PRIORITY.HIGH, EI_CH3_JOIN_LEVEL, event => {
  if (event.loadedFromDisk()) return
  const entity = event.getEntity()
  const id = String(entity.type)
  const boss = EI_CH3_BOSSES[id]
  if (!boss) return

  const level = event.getLevel()
  if (level.isClientSide() || String(level.dimension) !== 'minecraft:the_end') return

  const attachment = EI_CH3_CHAMPION_ATTACHMENT.getAttachment(entity)
  if (!attachment.isPresent()) return
  const champion = attachment.get()
  if (champion.getServer().getRank().isPresent()) return
  const health = boss.maxHealth ? entity.getAttribute(EI_CH3_ATTRIBUTES.MAX_HEALTH) : null
  if (boss.maxHealth && (!health || health.hasModifier(EI_CH3_HEALTH_MODIFIER_ID))) return

  const affixes = new EI_CH3_AFFIX_LIST()
  boss.affixes.forEach(affixId => {
    const affix = EI_CH3_CHAMPIONS.API.getAffix(affixId)
    if (!affix.isPresent()) throw new Error('Missing Chapter 3 boss affix for ' + id + ': ' + affixId)
    affixes.add(affix.get())
  })
  EI_CH3_CHAMPION_BUILDER.spawnPreset(champion, 5, affixes)

  // Use the settled value with EEEAB's config and all Champions growth already applied.
  if (health) {
    health.addOrReplacePermanentModifier(new EI_CH3_ATTRIBUTE_MODIFIER(
      EI_CH3_HEALTH_MODIFIER_ID, boss.maxHealth / health.getValue() - 1,
      EI_CH3_ATTRIBUTE_OPERATION.ADD_MULTIPLIED_TOTAL
    ))
    entity.setHealth(entity.getMaxHealth())
  }
})

// Tag membership is type-wide; keep old unranked bosses and non-End spawns from rolling a champion.
ChampionsJs.preSpawn(event => {
  if (EI_CH3_BOSSES[String(event.entity.type)]) event.setCanceled(true)
})
