// 巫妖本体固定1星及亵渎、皇家、创伤，保留1星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_LICH_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_LICH_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_LICH_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_LICH_FIXED_AFFIXES = ['champions:desecrating', 'dream_champions:royal', 'champions:wounding']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:lich') return

  // 暮色的巫妖分身也是twilightforest:lich，跳过其冠军生成。
  if (event.entity.isShadowClone()) {
    event.setCanceled(true)
    return
  }

  const affixes = new EI_LICH_AFFIX_LIST()
  EI_LICH_FIXED_AFFIXES.forEach(id => {
    const affix = EI_LICH_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('巫妖冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_LICH_CHAMPION_BUILDER.spawnPreset(event.champion, 1, affixes)
})
