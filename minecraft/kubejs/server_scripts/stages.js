// 阶段限制 · 全六章
// AStages 参数顺序：(id, stage, ...)
// 每个 chapterN 阶段 = 完成第 N 章后解锁
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
   
    // ===== 第二章未完成时锁住：第三章内容 =====
    // AE2 本体 + 附属
    AStages.addRestrictionForModRecipe('ch2_ae2', 'chapter2', 'ae2') // AE2
    AStages.addRestrictionForModRecipe('ch2_ae2_adv', 'chapter2', 'advanced_ae') // AdvancedAE
    AStages.addRestrictionForModRecipe('ch2_ae2_ext', 'chapter2', 'extendedae') // ExtendedAE
    AStages.addRestrictionForModRecipe('ch2_ae2_ext_plus', 'chapter2', 'extendedae_plus') // ExtendedAE-Plus
    AStages.addRestrictionForModRecipe('ch2_ae2_megacells', 'chapter2', 'megacells') // MEGA Cells
    AStages.addRestrictionForModRecipe('ch2_ae2_flux', 'chapter2', 'appflux') // 应用通量
    AStages.addRestrictionForModRecipe('ch2_ae2_pneumatic', 'chapter2', 'appliedpneumatics') // 应用气动
    AStages.addRestrictionForModRecipe('ch2_ae2_appliede', 'chapter2', 'appliede') // AppliedE
    AStages.addRestrictionForModRecipe('ch2_ae2_requester', 'chapter2', 'merequester') // ME Requester
    AStages.addRestrictionForModRecipe('ch2_ae2_placement', 'chapter2', 'meplacementtool') // ME 放置工具
    AStages.addRestrictionForModRecipe('ch2_ae2_wcwt', 'chapter2', 'wcwt') // AE2 WCWT
    AStages.addRestrictionForModRecipe('ch2_ae2_lt', 'chapter2', 'ae2lt') // AE2 闪电科技
    AStages.addRestrictionForModRecipe('ch2_ae2_thaumic', 'chapter2', 'thaumicenergistics_ce') // 神秘能源学
    AStages.addRestrictionForModRecipe('ch2_ae2_soulplied', 'chapter2', 'soulplied_energistics') // 灵魂涌动
    AStages.addRestrictionForModRecipe('ch2_ae2_appliedsoul', 'chapter2', 'appliedsoul') // Applied Soul
    AStages.addRestrictionForModRecipe('ch2_ae2_sticks', 'chapter2', 'appliedsticks') // Applied 建筑棍

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

    // 击败末影龙后解锁
    AStages.addRestrictionForModRecipe('Dd_draconic', 'Defeat dragon', 'draconicevolution') // 龙之研究
    AStages.addRestrictionForModRecipe('Dd_draconic_add', 'Defeat dragon', 'draconicadditions') // 龙研附属


    // ===== 第三章未完成时锁住：第四章内容 =====
    AStages.addRestrictionForModRecipe('ch3_nc', 'chapter3', 'nuclearcraftneohaul') // 核电工艺 NC

    AStages.addRestrictionForModRecipe('ch3_starlight', 'chapter3', 'eternal_starlight') // 永恒星光
    AStages.addRestrictionForDimension('ch3_dim_starlight', 'chapter3', 'eternal_starlight:starlight') // 永恒星光维度

    // ===== 第四章未完成时锁住：第五章内容（外域维度）=====
    // 注意：thaumaturge 整个 mod 在第二章就解锁，这里只锁外域维度
    AStages.addRestrictionForDimension('ch4_dim_outer', 'chapter4', 'thaumaturge:outer_lands') // 神秘外域维度

    // ===== 第五章未完成时锁住：第六章内容 =====
    // NC 聚变与裂变同属一个 mod，无法按配方类型细分，暂留空

    console.info('[stages] 六章阶段限制已注册')
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
