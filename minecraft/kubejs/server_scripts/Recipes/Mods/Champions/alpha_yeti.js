// 雪怪首领固定1星及魔术、创伤、活力，保留1星属性成长。
// 沿用娜迦的spawnPreset方式，避免当前Champions随机星级上界多包含一星。
const EI_ALPHA_YETI_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_ALPHA_YETI_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_ALPHA_YETI_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_ALPHA_YETI_FIXED_AFFIXES = ['dream_champions:ender', 'champions:wounding', 'champions:lively']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:alpha_yeti') return

  const affixes = new EI_ALPHA_YETI_AFFIX_LIST()
  EI_ALPHA_YETI_FIXED_AFFIXES.forEach(id => {
    const affix = EI_ALPHA_YETI_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('雪怪首领冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_ALPHA_YETI_CHAMPION_BUILDER.spawnPreset(event.champion, 1, affixes)
})
