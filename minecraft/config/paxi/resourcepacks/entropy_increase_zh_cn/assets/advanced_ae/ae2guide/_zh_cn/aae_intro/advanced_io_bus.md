---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: ME 高级 IO 总线
  icon: advanced_ae:advanced_io_bus_part
categories:
  - advanced items
item_ids:
  - advanced_ae:advanced_io_bus_part
---

# ME 高级 IO 总线

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_advanced_io_bus.snbt"></ImportStructure>
</GameScene>

高级 IO 总线是一种功能强大的外部库存交互设备，由<ItemLink id="advanced_ae:import_export_bus_part"/>和<ItemLink id="advanced_ae:stock_export_bus_part"/>融合而成，兼具两者的功能。它的基础速度还达到了<ItemLink id="ae2:export_bus"/>基础速度的 8 倍。总线需要一段时间逐渐提速，完全升级后速度极快。

## 输出

高级 IO 总线会按过滤设置向目标输出物品，达到指定数量后停止。界面左侧还可设置是否调节目标中的物品库存。

## 输入

高级 IO 总线也会输入所有未被设为输出目标的物品。输入与输出的操作次数分别计算，因此总线不会只顾其中一项而卡住。启用库存调节后，它会优先取回超过设定数量的物品；如果还有剩余操作次数，再取回未列入过滤器的物品。

<RecipeFor id="advanced_ae:advanced_io_bus_part"/>