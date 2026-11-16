// 九头蛇本体固定2星及点燃、熔融、活力、月亮，保留2星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_HYDRA_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_HYDRA_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_HYDRA_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_HYDRA_FIXED_AFFIXES = ['champions:enkindling', 'champions:molten', 'champions:lively', 'dream_champions:moon']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:hydra') return

  const affixes = new EI_HYDRA_AFFIX_LIST()
  EI_HYDRA_FIXED_AFFIXES.forEach(id => {
    const affix = EI_HYDRA_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('九头蛇冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_HYDRA_CHAMPION_BUILDER.spawnPreset(event.champion, 2, affixes)
})
