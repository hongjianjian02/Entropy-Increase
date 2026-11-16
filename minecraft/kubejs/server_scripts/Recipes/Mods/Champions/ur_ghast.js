// 暮色恶魂固定2星及保护、腐蚀、活力、月亮，保留2星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_UR_GHAST_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_UR_GHAST_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_UR_GHAST_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_UR_GHAST_FIXED_AFFIXES = ['champions:shielding', 'dream_champions:corrosion', 'champions:lively', 'dream_champions:moon']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:ur_ghast') return

  const affixes = new EI_UR_GHAST_AFFIX_LIST()
  EI_UR_GHAST_FIXED_AFFIXES.forEach(id => {
    const affix = EI_UR_GHAST_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('暮色恶魂冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_UR_GHAST_CHAMPION_BUILDER.spawnPreset(event.champion, 2, affixes)
})
