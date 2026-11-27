---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME精确输出总线
    icon: extendedae:precise_export_bus
categories:
- extended devices
item_ids:
- extendedae:precise_export_bus
---

# ME精确输出总线

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_precise_export_bus.snbt"></ImportStructure>
</GameScene>

ME精确输出总线按指定数量输出物品或流体。只有目标容器能够完整接收本次输出时，才会执行。

## 示例

![操作示例](../pic/pre_bus_gui1.png)

每次操作输出3个圆石。当网络中的圆石不足3个时，便会停止输出。

![操作示例](../pic/pre_bus_gui2.png)

若目标容器无法完整接收本次输出，也会停止。图中的箱子只能再容纳2个圆石，因此输出总线停止工作。
