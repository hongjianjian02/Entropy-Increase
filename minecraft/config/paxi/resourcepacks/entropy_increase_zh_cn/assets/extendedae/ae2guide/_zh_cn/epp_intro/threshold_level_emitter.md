---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME阈值发信器
    icon: extendedae:threshold_level_emitter
categories:
- extended devices
item_ids:
- extendedae:threshold_level_emitter
---

# ME阈值发信器

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_level_emitter.snbt"></ImportStructure>
</GameScene>

它的工作方式类似于RS锁存器。当网络中某种物品的数量低于
下限时，关闭红石信号；当数量高于上限时，开启红石信号。

例如，将下限设为100，上限设为150。

起初网络为空，发信器不输出信号。

当物品数量增加到超过150时，发信器开始输出红石信号。

当数量下降到150以下时，发信器仍保持输出。

直到数量降至100以下，发信器才会停止输出。
