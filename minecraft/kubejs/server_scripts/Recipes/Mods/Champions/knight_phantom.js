// 幻影骑士每名固定1星及皇家、月亮、暗影，保留1星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_KNIGHT_PHANTOM_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_KNIGHT_PHANTOM_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_KNIGHT_PHANTOM_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_KNIGHT_PHANTOM_FIXED_AFFIXES = ['dream_champions:royal', 'dream_champions:moon', 'dream_champions:shadow']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:knight_phantom') return

  const affixes = new EI_KNIGHT_PHANTOM_AFFIX_LIST()
  EI_KNIGHT_PHANTOM_FIXED_AFFIXES.forEach(id => {
    const affix = EI_KNIGHT_PHANTOM_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('幻影骑士冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_KNIGHT_PHANTOM_CHAMPION_BUILDER.spawnPreset(event.champion, 1, affixes)
})
