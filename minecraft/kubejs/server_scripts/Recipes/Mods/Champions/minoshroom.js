// 米诺菇固定1星及熔融、瘟疫、活力，保留1星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_MINOSHROOM_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_MINOSHROOM_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_MINOSHROOM_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_MINOSHROOM_FIXED_AFFIXES = ['champions:molten', 'champions:plagued', 'champions:lively']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:minoshroom') return

  const affixes = new EI_MINOSHROOM_AFFIX_LIST()
  EI_MINOSHROOM_FIXED_AFFIXES.forEach(id => {
    const affix = EI_MINOSHROOM_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('米诺菇冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_MINOSHROOM_CHAMPION_BUILDER.spawnPreset(event.champion, 1, affixes)
})
