---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: ME 高级样板供应器
  icon: advanced_ae:adv_pattern_provider
categories:
  - advanced devices
item_ids:
  - advanced_ae:adv_pattern_provider
  - advanced_ae:small_adv_pattern_provider
  - advanced_ae:adv_pattern_provider_part
  - advanced_ae:small_adv_pattern_provider_part
---

# ME 高级样板供应器

<Row gap="20">
<BlockImage id="advanced_ae:adv_pattern_provider" scale="8"></BlockImage>
<BlockImage id="advanced_ae:adv_pattern_provider" p:push_direction="up" scale="8"></BlockImage>
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_app_part.snbt"></ImportStructure>
</GameScene>
</Row>

ME 高级样板供应器是一种新型<ItemLink id="ae2:pattern_provider" />，可由普通版本或<ItemLink id="extendedae:ex_pattern_provider" />升级而来，允许分别设置样板内每种物品送入目标机器的哪个面。即使机器要求不同原料从不同面输入，也可以只用一个方块完成自动化，无需另接管道！

*说的就是你，Mekanism。*

要使用这项功能，需要将已编码的样板放入<ItemLink id="advanced_ae:adv_pattern_encoder" />，取出生成的<ItemLink id="advanced_ae:adv_processing_pattern" />，再把它放入供应器。

还有扩展版本，可在一个供应器中容纳最多 36 个样板。

![高级样板供应器界面](../pic/app_gui.png)
