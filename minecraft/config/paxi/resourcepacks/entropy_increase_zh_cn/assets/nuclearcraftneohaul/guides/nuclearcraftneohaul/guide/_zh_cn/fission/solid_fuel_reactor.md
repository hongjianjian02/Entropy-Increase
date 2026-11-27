---
navigation:
  title: 固态燃料裂变反应堆
  icon: solid_fuel_fission_controller
  parent: fission/fission.md
  position: 1

item_ids:
  - solid_fuel_fission_controller
---

# 固态燃料裂变反应堆

固态燃料裂变反应堆（SFR）使用丸状固态裂变燃料。产生的热量会将液态冷却剂变为气体，供[涡轮机](../multiblocks/turbine.md)使用。

#### 燃料

固态燃料反应堆的燃料丸通过<ItemLink id="fission_fuel_cell_port" />送入<ItemLink id="fission_fuel_cell" />。

以 LEU-235 为例：
<Row>
<RecipesFor id="leu_235" />
</Row>

它可以制成以下燃料丸：

<ItemGrid>
<ItemIcon id="leu_235_za" />
<ItemIcon id="leu_235_ox" />
<ItemIcon id="leu_235_ni" />
</ItemGrid>

即使使用同一种基础燃料，各类燃料丸的性质也有所不同，需要采用不同的反应堆设计。

#### 冷却

固态燃料反应堆通常使用<FluidLink id="minecraft:water" />冷却，产生<FluidLink id="high_pressure_steam" />，再由[涡轮机](../multiblocks/turbine.md)转化为 FE。