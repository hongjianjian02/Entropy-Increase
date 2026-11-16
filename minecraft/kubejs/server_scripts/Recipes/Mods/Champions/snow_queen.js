// 冰雪女王固定2星及极寒、抑制、活力、月亮，保留2星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_SNOW_QUEEN_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_SNOW_QUEEN_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_SNOW_QUEEN_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_SNOW_QUEEN_FIXED_AFFIXES = ['champions:arctic', 'champions:dampening', 'champions:lively', 'dream_champions:moon']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:snow_queen') return

  const affixes = new EI_SNOW_QUEEN_AFFIX_LIST()
  EI_SNOW_QUEEN_FIXED_AFFIXES.forEach(id => {
    const affix = EI_SNOW_QUEEN_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('冰雪女王冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_SNOW_QUEEN_CHAMPION_BUILDER.spawnPreset(event.champion, 2, affixes)
})
