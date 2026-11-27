---
navigation:
  title: 球床裂变反应堆
  icon: pebble_bed_fission_controller
  parent: fission/fission.md
  position: 2

item_ids:
  - pebble_bed_fission_controller
---

# 球床裂变反应堆

球床裂变反应堆（PBR）使用具有多层包覆结构的固态燃料颗粒。产生的热量会传递给气体冷却剂，再由[涡轮机](../multiblocks/turbine.md)回收能量。

#### 燃料

球床反应堆的燃料颗粒通过<ItemLink id="fission_fuel_chamber_port" />送入<ItemLink id="fission_fuel_chamber" />。

例如：
<ItemGrid>
<ItemIcon id="leu_235_tr" />
</ItemGrid>

#### 冷却

球床反应堆使用气体冷却，产生的高温气体可在[涡轮机](../multiblocks/turbine.md)中转化为 FE。

例如：

<FluidLink id="hydrogen" /> 变为 <FluidLink id="hydrogen_hot" />