---
navigation:
  title: 熔盐裂变反应堆
  icon: molten_salt_fission_controller
  parent: fission/fission.md
  position: 3

item_ids:
  - molten_salt_fission_controller
---

# 熔盐裂变反应堆

熔盐裂变反应堆（MSR）使用液态裂变燃料。产生的热量会传递给熔盐冷却剂，再通过[热交换器](../multiblocks/heat_exchanger.md)产生蒸汽。

#### 燃料

熔盐反应堆使用以熔融 FLiBe 盐为载体的燃料，通过<ItemLink id="fission_fuel_vessel_port" />输入。

例如：
<FluidLink id="leu_235_fluoride_flibe" /> 变为 <FluidLink id="depleted_leu_235_fluoride_flibe" />

#### 冷却

熔盐反应堆使用共晶钠钾合金冷却，例如将<FluidLink id="gold_nak" />加热成<FluidLink id="gold_nak_hot" />，再送入[热交换器](../multiblocks/heat_exchanger.md)。