---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME装罐机
    icon: extendedae:caner
categories:
- extended devices
item_ids:
- extendedae:caner
---

# ME装罐机

<BlockImage id="extendedae:caner" scale="8"></BlockImage>

ME装罐机可以将各种材料“装罐”，包括流体、Mekanism气体、Botania魔力，甚至能量！

第一个槽位放入待灌装的材料，第二个槽位放入待填充的物品。

运行需要能量，每次操作消耗80 AE。

![操作示例](../pic/caner_gui.png)

默认只能灌装流体；安装相应附属模组后，还能灌装其他材料。

### 支持的附属模组：
- Applied Flux
- Applied Mekanistics
- Applied Botanics Addon

## 使用ME装罐机自动合成

只有顶面和底面能够接收能量并连接网络。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_example.snbt"></ImportStructure>
</GameScene>

这是ME装罐机的简单搭建示例。收到<ItemLink id="ae2:pattern_provider" />提供的原料后，装罐机会自动输出填充完毕的物品。

<GameScene zoom="6" background="transparent">
  <ImportStructure src="../structure/caner_auto.snbt"></ImportStructure>
</GameScene>

样板中只能包含待灌装的材料和待填充的容器。以下是一些示例：

灌装一桶水：

![操作示例](../pic/fill_water.png)

为能量板充能（需要Applied Flux）：

![操作示例](../pic/fill_energy.png)


## 抽取容器内容物

切换为抽空模式后，ME装罐机也能抽出容器中的材料。你需要将样板中的输入与输出对调。
