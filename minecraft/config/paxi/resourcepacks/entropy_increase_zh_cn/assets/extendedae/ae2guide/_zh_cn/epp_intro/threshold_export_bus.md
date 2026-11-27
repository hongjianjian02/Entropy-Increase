---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME阈值输出总线
    icon: extendedae:threshold_export_bus
categories:
- extended devices
item_ids:
- extendedae:threshold_export_bus
---

# ME阈值输出总线

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_threshold_export_bus.snbt"></ImportStructure>
</GameScene>

当ME网络中某种物品的存量高于或低于设定阈值时，ME阈值输出总线才会工作。

## 示例

![操作示例](../pic/thr_bus_gui1.png)

铜的阈值设为128，因此当网络中的铜超过128个时，总线就会输出铜。

![操作示例](../pic/thr_bus_gui2.png)

阈值与上例相同，但模式设为“低于”。当铜的存量低于128个时，总线就会输出铜。
