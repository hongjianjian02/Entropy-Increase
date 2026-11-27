---
navigation:
  parent: appliede-index.md
  title: ME转化模块
  icon: emc_module
  position: 0
categories:
  - appliede
item_ids:
  - appliede:emc_module
---

# ME转化模块

<GameScene zoom="8" background="transparent">
  <ImportStructure src="assemblies/transmutation_module.snbt" />
</GameScene>

**ME转化模块**是在ME网络中操作EMC和进行炼金转化的第一步。将它连接到ME
网络的*任意位置*后，模块就会使用放置者的炼金知识和能量，
将该玩家的EMC作为独立资源提供给网络，使
网络能够在自动合成等操作中直接消耗EMC来转化物品。
模块还会自动生成并提供对应的合成样板，
每个样板以该物品等值的EMC为原料。

![操作示例](diagrams/emc_storage.png)

同一网络可以由多个玩家放置多个模块，但对每位炼金术师而言，
只有一个模块会计入EMC总存量和已学会的可合成物品。网络中存在多个模块时，
所有模块提供的EMC会汇入同一个共享储存池，并由其中一个
模块统一接入网络。存入或取出的EMC会尽可能平均地分摊给所有
提供EMC的玩家。

为防止ME网络中的数值溢出，模块还为网络储存的EMC引入了*等级*机制，
每升一级，计量单位按10^12倍递增。每个等级
都使用不同于基础EMC的颜色表示；需要大量EMC的转化任务
可以按需将高等级EMC“向下合成”为低等级EMC。

![操作示例](diagrams/emc_tiers.png)

不过，如此强大的功能也有不小的能耗：模块默认消耗25 AE/tick，
实际数值可能因配置而增减。

## 配方

<RecipeFor id="appliede:emc_module" />
