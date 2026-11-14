// 阶段限制 · 七章模组入口
// AStages 参数顺序：(id, stage, ...)
// 第一章无进入阶段；chapterN 在完成第 N 章后取得，开放第 N+1 章。
// 本轮补充模组配方入口；高阶配方分档、机器运行门禁仍需分别配置与实测。
// 限制语义：没有对应阶段 → 该内容被锁
ServerEvents.loaded(event => {
  try {

    // ===== 第一章未完成时锁住：第二章内容 =====
    AStages.addRestrictionForModRecipe('ch1_thaumaturge', 'chapter1', 'thaumaturge') // 神秘时代
    AStages.addRestrictionForModRecipe('ch1_ie', 'chapter1', 'immersiveengineering') // 沉浸工程 IE
    AStages.addRestrictionForModRecipe('ch1_ip', 'chapter1', 'immersivepetroleum') // IE 石油
    AStages.addRestrictionForModRecipe('ch1_pneumatic', 'chapter1', 'pneumaticcraft') // 气动工艺
    AStages.addRestrictionForModRecipe('ch1_rftools_base', 'chapter1', 'rftoolsbase') // RFTools 基础
    AStages.addRestrictionForModRecipe('ch1_rftools_storage', 'chapter1', 'rftoolsstorage') // RFTools 存储
    AStages.addRestrictionForModRecipe('ch1_rftools_power', 'chapter1', 'rftoolspower') // RFTools 能源
    AStages.addRestrictionForModRecipe('ch1_neovitae', 'chapter1', 'neovitae') // 血魔法 Neo Vitae
    AStages.addRestrictionForDimension('ch1_dim_aether', 'chapter1', 'aether:the_aether') // 天境维度
    AStages.addRestrictionForDimension('ch1_dim_nether', 'chapter1', 'minecraft:the_nether') // 下界维度
   
    // 第二章补充：工坊、魔法附属与建筑便利
    AStages.addRestrictionForModRecipe('ch1_entry_actuallyadditions', 'chapter1', 'actuallyadditions') // 实用拓展
    AStages.addRestrictionForModRecipe('ch1_entry_extrabotany', 'chapter1', 'extrabotany') // 额外植物学
    AStages.addRestrictionForModRecipe('ch1_entry_excessive_utilities', 'chapter1', 'excessive_utilities') // Excessive Utilities
    AStages.addRestrictionForModRecipe('ch1_entry_thaumaturge_tinkerer', 'chapter1', 'thaumaturge_tinkerer') // 神秘工匠

    // ===== 第二章未完成时锁住：第三章内容 =====
    // AE2 本体 + 附属
    AStages.addRestrictionForModRecipe('ch2_ae2', 'chapter2', 'ae2') // AE2
    AStages.addRestrictionForModRecipe('ch2_ae2_adv', 'chapter2', 'advanced_ae') // AdvancedAE
    AStages.addRestrictionForModRecipe('ch2_ae2_ext', 'chapter2', 'extendedae') // ExtendedAE
    AStages.addRestrictionForModRecipe('ch2_ae2_ext_plus', 'chapter2', 'extendedae_plus') // ExtendedAE-Plus
    AStages.addRestrictionForModRecipe('ch2_ae2_megacells', 'chapter2', 'megacells') // MEGA Cells
    AStages.addRestrictionForModRecipe('ch2_ae2_flux', 'chapter2', 'appflux') // 应用通量
    AStages.addRestrictionForModRecipe('ch2_ae2_pneumatic', 'chapter2', 'appliedpneumatics') // 应用气动
    AStages.addRestrictionForModRecipe('ch2_ae2_requester', 'chapter2', 'merequester') // ME Requester
    AStages.addRestrictionForModRecipe('ch2_ae2_placement', 'chapter2', 'meplacementtool') // ME 放置工具
    AStages.addRestrictionForModRecipe('ch2_ae2_wcwt', 'chapter2', 'wcwt') // AE2 WCWT
    AStages.addRestrictionForModRecipe('ch2_ae2_lt', 'chapter2', 'ae2lt') // AE2 闪电科技
    AStages.addRestrictionForModRecipe('ch2_ae2_thaumic', 'chapter2', 'thaumicenergistics_ce') // 神秘能源学
    AStages.addRestrictionForModRecipe('ch2_ae2_appliedsoul', 'chapter2', 'appliedsoul') // Applied Soul
    AStages.addRestrictionForModRecipe('ch2_ae2_sticks', 'chapter2', 'appliedsticks') // Applied 建筑棒

    AStages.addRestrictionForModRecipe('ch2_if', 'chapter2', 'industrialforegoing') // 工业先锋
    // EIO 本体 + 附属
    AStages.addRestrictionForModRecipe('ch2_eio', 'chapter2', 'enderio') // 末影接口 EIO
    AStages.addRestrictionForModRecipe('ch2_eio_core', 'chapter2', 'endercore') // EIO 前置
    AStages.addRestrictionForModRecipe('ch2_eio_evolution', 'chapter2', 'enderio_evolution') // EIO 进化
    AStages.addRestrictionForModRecipe('ch2_eio_conduit', 'chapter2', 'enderio_conduit_opt') // EIO 导管优化
    // MEK 本体 + 附属
    AStages.addRestrictionForModRecipe('ch2_mek', 'chapter2', 'mekanism') // 通用机械 MEK
    AStages.addRestrictionForModRecipe('ch2_mek_generators', 'chapter2', 'mekanismgenerators') // MEK 发电机
    AStages.addRestrictionForModRecipe('ch2_mek_tools', 'chapter2', 'mekanismtools') // MEK 工具

    AStages.addRestrictionForDimension('ch2_dim_end', 'chapter2', 'minecraft:the_end') // 末地维度

    // 第三章补充：星辉、材料工艺、资源与跨模组物流
    AStages.addRestrictionForModRecipe('ch2_entry_astralsorcery', 'chapter2', 'astralsorcery') // 星辉魔法
    AStages.addRestrictionForModRecipe('ch2_entry_hostilenetworks', 'chapter2', 'hostilenetworks') // Hostile Neural Networks
    AStages.addRestrictionForModRecipe('ch2_entry_sfm', 'chapter2', 'sfm') // SFM
    AStages.addRestrictionForModRecipe('ch2_entry_pipez', 'chapter2', 'pipez') // Pipez
    AStages.addRestrictionForModRecipe('ch2_entry_modularrouters', 'chapter2', 'modularrouters') // 模块化路由器
    AStages.addRestrictionForModRecipe('ch2_entry_fluxnetworks', 'chapter2', 'fluxnetworks') // Flux Networks
    AStages.addRestrictionForModRecipe('ch2_entry_dimstorage', 'chapter2', 'dimstorage') // DimStorage
    AStages.addRestrictionForModRecipe('ch2_entry_rftoolsbuilder', 'chapter2', 'rftoolsbuilder') // RFTools Builder
    AStages.addRestrictionForModRecipe('ch2_entry_rftoolsutility', 'chapter2', 'rftoolsutility') // RFTools Utility
    AStages.addRestrictionForModRecipe('ch2_entry_neoecoae', 'chapter2', 'neoecoae') // Neo ECO AE
    AStages.addRestrictionForModRecipe('ch2_entry_appmek', 'chapter2', 'appmek') // Applied Mekanistics
    AStages.addRestrictionForModRecipe('ch2_entry_ae2ltpp', 'chapter2', 'ae2ltpp') // AE2LT Packaged Pattern Provider
    AStages.addRestrictionForModRecipe('ch2_entry_ae2wtlib', 'chapter2', 'ae2wtlib') // AE2 无线终端
    AStages.addRestrictionForModRecipe('ch2_entry_rechiseledae', 'chapter2', 'rechiseledae') // Rechiseled AE
    AStages.addRestrictionForModRecipe('ch2_entry_mekanism_card', 'chapter2', 'mekanism_card') // Mekanism Card

    // ===== 第三章未完成时锁住：第四章内容 =====
    AStages.addRestrictionForModRecipe('ch2_entry_justdirethings', 'chapter3', 'justdirethings') // Just Dire Things；时间系列另需 chapter5
    AStages.addRestrictionForModRecipe('ch3_nc', 'chapter3', 'nuclearcraftneohaul') // 核电工艺 NC

    AStages.addRestrictionForModRecipe('ch3_draconic', 'chapter3', 'draconicevolution') // 龙之研究
    AStages.addRestrictionForModRecipe('ch3_draconic_add', 'chapter3', 'draconicadditions') // 龙研附属

    AStages.addRestrictionForModRecipe('ch3_starlight', 'chapter3', 'eternal_starlight') // 永恒星光
    AStages.addRestrictionForDimension('ch3_dim_starlight', 'chapter3', 'eternal_starlight:starlight') // 永恒星光维度

    // ===== 第四章未完成时锁住：第五章内容 =====
    // 神秘本体第二章开放；这里只锁外域，MMCE 通用配方与扩展合成在第五章开放。
    AStages.addRestrictionForDimension('ch4_dim_outer', 'chapter4', 'thaumaturge:outer_lands') // 神秘外域维度
    AStages.addRestrictionForModRecipe('ch4_entry_mmcece', 'chapter4', 'mmcece') // MMCE
    AStages.addRestrictionForModRecipe('ch4_entry_extendedcrafting', 'chapter4', 'extendedcrafting') // 扩展合成

    // ===== 第五章未完成时锁住：第六章强化附属 =====
    AStages.addRestrictionForModRecipe('ch5_entry_extrahnn', 'chapter5', 'extrahnn') // ExtraHNN
    AStages.addRestrictionForModRecipe('ch5_entry_mekanism_extras', 'chapter5', 'mekanism_extras') // MekanismExtras
    AStages.addRestrictionForModRecipe('ch5_entry_ae2_overclocked', 'chapter5', 'ae2_overclocked') // AE2 Overclocked

    // ===== 第六章未完成时锁住：第七章等价与终局合成 =====
    AStages.addRestrictionForModRecipe('ch2_ae2_appliede', 'chapter6', 'appliede') // AppliedE 随 ProjectE 开放
    AStages.addRestrictionForModRecipe('ch6_entry_applied_extended_crafting', 'chapter6', 'applied_extended_crafting') // Applied Extended Crafting
    AStages.addRestrictionForModRecipe('ch6_entry_projecte', 'chapter6', 'projecte') // ProjectE
    AStages.addRestrictionForModRecipe('ch6_entry_avaritia', 'chapter6', 'avaritia') // Re-Avaritia

    // NC / Mek 聚变、JDT 时间能力等同模组内分档，留待精确配方与使用入口配置。
    console.info('[stages] 七章模组入口限制已注册')
  } catch (err) {
    console.error('[stages] 注册失败: ' + err)
  }
})

// 天枢之星右键 → 给予 chapter2 阶段（第二章通关，开启第三章）
ItemEvents.rightClicked('eicore:tianshu_star', event => {
  const player = event.player
  if (AStages.playerHasStage(player, 'chapter2')) {
    player.tell('§7你已经开启过这条通路了')
    return
  }
  AStages.addStageToPlayer(player, 'chapter2')
  player.tell('§a天枢之星的力量涌入你的身体，新的通路开启了')
})
