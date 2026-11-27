---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 高级样板编码器
  icon: advanced_ae:adv_pattern_encoder
categories:
  - advanced items
item_ids:
  - advanced_ae:adv_pattern_encoder
  - advanced_ae:adv_processing_pattern
---

# 高级样板编码器

要让 ME 高级样板供应器知道物品应该送往哪个面，需要使用专用设备为样板编码这些信息。手持编码器右键即可打开界面。

<ItemImage id="advanced_ae:adv_pattern_encoder" scale="4"></ItemImage>

将已编码的处理样板放入左侧槽位后，编码器会解析样板，并列出全部原料。

![高级样板编码界面](../pic/ape_pattern.png)

每行都有一组按钮，代表原料可以送入的各个方块面。保持选中“A”时，原料会送入与样板供应器直接接触的面；选择某个具体面后，则会强制从该面输入。高级样板只有在<ItemLink id="advanced_ae:adv_pattern_provider" />中才能正确解析，放入其他样板供应器时会按普通样板处理。
此外，只要有一种物品无法从指定面插入，全部物品就会放弃定向输入，改用普通样板供应器的行为。