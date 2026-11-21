// 词条由 champions-entities.toml 管理。原生星级范围会额外包含 maxTier + 1。
const EI_AETHER_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_AETHER_CHAMPION_RANKS = Java.loadClass('top.theillusivec4.champions.common.rank.RankManager')
const EI_AETHER_CHAMPION_BOSS_IDS = [
  'aether:slider',
  'aether:valkyrie_queen',
  'aether:sun_spirit',
  'deep_aether:eots_controller'
]

ChampionsJs.preSpawn(event => {
  const id = String(event.entity.type)
  if (EI_AETHER_CHAMPION_BOSS_IDS.indexOf(id) < 0) return

  const rank = EI_AETHER_CHAMPION_RANKS.getRank(4)
  const champion = event.champion
  const affixes = EI_AETHER_CHAMPION_BUILDER.createAffixes(rank, champion)
  if (affixes.size() !== 5) throw new Error('天境 Boss 的冠军预设词条应有 5 条：' + id)

  event.setCanceled(true)
  EI_AETHER_CHAMPION_BUILDER.spawnPreset(champion, 4, affixes)
})
