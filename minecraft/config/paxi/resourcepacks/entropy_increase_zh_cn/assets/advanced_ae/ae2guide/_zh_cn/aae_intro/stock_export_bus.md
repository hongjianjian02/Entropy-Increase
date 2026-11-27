---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: ME 库存输出总线
  icon: advanced_ae:stock_export_bus_part
categories:
  - advanced items
item_ids:
  - advanced_ae:stock_export_bus_part
---

# ME 库存输出总线

<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/cable_stock_export_bus.snbt"></ImportStructure>
</GameScene>

库存输出总线可按过滤设置输出精确数量的物品。它会监测目标库存中的现有数量，并在达到设定值后停止输入。打开界面，将物品拖入过滤槽，再用鼠标中键点击即可设置数量。它不会取回多余物品：如果目标库存中的物品或流体超过设定数量，总线也不会将超出部分抽走。