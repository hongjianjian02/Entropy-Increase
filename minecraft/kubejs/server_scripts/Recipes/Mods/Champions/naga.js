// 娜迦固定1星与三个指定词条，保留1星属性成长。
// Champions 2.1.11.3 的 createRank 对 maxTier 使用包含 maxTier+1 的上界，
// 因此在原生 preSpawn 事件中明确使用 spawnPreset，避免1～1仍抽到2星。
const EI_NAGA_CHAMPIONS = Java.loadClass('top.theillusivec4.champions.Champions')
const EI_NAGA_CHAMPION_BUILDER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionBuilder')
const EI_NAGA_AFFIX_LIST = Java.loadClass('java.util.ArrayList')
const EI_NAGA_CHAMPION_ATTACHMENT = Java.loadClass('top.theillusivec4.champions.common.capability.ChampionAttachment')
const EI_NAGA_CHAMPION_HELPER = Java.loadClass('top.theillusivec4.champions.common.util.ChampionHelper')
const EI_NAGA_CHAMPIONS_CONFIG = Java.loadClass('top.theillusivec4.champions.common.config.ChampionsConfig')
const EI_NAGA_FIXED_AFFIXES = ['champions:hasty', 'champions:knocking', 'champions:lively']

ChampionsJs.preSpawn(event => {
  if (String(event.entity.type) !== 'twilightforest:naga') return

  const affixes = new EI_NAGA_AFFIX_LIST()
  EI_NAGA_FIXED_AFFIXES.forEach(id => {
    const affix = EI_NAGA_CHAMPIONS.API.getAffix(id)
    if (!affix.isPresent()) throw new Error('娜迦冠军词条不存在：' + id)
    affixes.add(affix.get())
  })

  event.setCanceled(true)
  EI_NAGA_CHAMPION_BUILDER.spawnPreset(event.champion, 1, affixes)
  hideNagaNativeBossBar(event.entity)
})

// 仅在冠军HUD可用时隐藏娜迦原生血条，保留其他暮色Boss血条。
// 冠军HUD按模组默认规则在准星指向目标时显示。
function hideNagaNativeBossBar(naga) {
  if (naga.isRemoved() || !EI_NAGA_CHAMPIONS_CONFIG.showHud) return
  if (EI_NAGA_CHAMPIONS_CONFIG.bossBarBlackList.contains('twilightforest:naga')) return

  const champion = EI_NAGA_CHAMPION_ATTACHMENT.getAttachment(naga)
  if (!champion.isPresent()) return
  if (!EI_NAGA_CHAMPION_HELPER.isValidChampion(champion.get().getServer())) return

  naga.getBossBar().setVisible(false)
}

// EntityEvents.spawned也在已保存实体重新加载时触发。
// 延后一tick检查，确保冠军数据已完成读取与生成。
EntityEvents.spawned('twilightforest:naga', event => {
  const naga = event.entity
  event.level.scheduleInTicks(1, () => hideNagaNativeBossBar(naga))
})
