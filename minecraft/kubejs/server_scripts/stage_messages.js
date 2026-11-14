// 中文阶段聊天提示：说明当前阶段实际配置的解锁内容。
// 只定制通知，不修改阶段 ID、授予范围、奖励或限制。
ServerEvents.loaded(event => {
  const stageMessages = [
    {
      id: 'chapter1',
      name: '第二章',
      details: [
        '解锁模组：神秘时代、沉浸工程、沉浸原油、气动工艺',
        '解锁模组：RFTools 基础 存储 能源、血魔法',
        '解锁模组：实用拓展、额外植物学、Excessive Utilities、',
        '解锁模组：神秘工匠、Building Gadgets 2',
        '解锁维度：天境、下界',
      ]
    },
    {
      id: 'chapter2',
      name: '第三章',
      details: [
        '解锁模组：AE2、AdvancedAE、ExtendedAE、ExtendedAE Plus、MEGA Cells',
        '解锁附属：Applied Flux、Applied Pneumatics、ME Requester、ME Placement Tool',
        '解锁附属：WCWT、AE2 Lightning Tech、神秘能源学、Applied Construction Sticks',
        '解锁模组：工业先锋、EnderIO、EnderIO Evolution、EnderIO 导管优化',
        '解锁模组：Mekanism、Mekanism Generators、Mekanism Tools、Mekanism Card',
        '解锁模组：星辉魔法、Hostile Neural Networks',
        '解锁物流：SFM、Pipez、模块化路由器、Flux Networks、DimStorage',
        '解锁模组：RFTools Builder、RFTools Utility、Rechiseled AE',
        '解锁附属：Neo ECO AE、Applied Mekanistics、AE2LT Packaged Pattern Provider、AE2 无线终端',
        '解锁维度：末地',
      ]
    },
    {
      id: 'chapter3',
      name: '第四章',
      details: [
        '解锁模组：NuclearCraft Neohaul 核电工艺、永恒星光、龙之研究、龙研附属',
        '解锁模组：Just Dire Things（时间系列在第六章开放）',
        '解锁维度：永恒星光(可以在永恒星光发现龙矿)',
      ]
    },
    {
      id: 'chapter4',
      name: '第五章',
      details: [
        '解锁模组：MMCE、扩展合成',
        '解锁维度：神秘时代外域',
      ]
    },
    {
      id: 'chapter5',
      name: '第六章',
      details: [
        '解锁模组：ExtraHNN、MekanismExtras、AE2 Overclocked',
        '解锁内容：JDT 时间水晶、时间流体、时间手杖、悖论机及相关升级',
      ]
    },
    {
      id: 'chapter6',
      name: '第七章',
      details: [
        '解锁模组：ProjectE、AppliedE、Re-Avaritia 无尽贪婪',
        '解锁附属：Applied Extended Crafting',
      ]
    },
    {
      id: 'has_controller',
      name: 'ME 控制器',
      details: [
        '解锁配方：AE2 原版 ME 控制器工作台配方',
      ]
    },
  ]

  stageMessages.forEach(definition => {
    const addMessage = ['§a§l' + definition.name + '阶段已解锁§r']
      .concat(definition.details.map(line => '§7' + line))
      .join('\n')
    const removeMessage = '§c' + definition.name + '阶段已移除。'

    AStages.customizeStage(definition.id, definition.name)
      .chatMessageOnAdd(stage => Text.literal(addMessage))
      .chatMessageOnRemove(stage => Text.literal(removeMessage))
  })
  console.info('[stages] 中文阶段聊天提示已注册')
})
