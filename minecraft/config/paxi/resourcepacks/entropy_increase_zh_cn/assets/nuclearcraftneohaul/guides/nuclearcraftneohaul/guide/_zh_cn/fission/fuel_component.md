---
navigation:
  title: 燃料部件
  icon: fission_fuel_cell
  parent: fission/fission.md
  position: 5

categories:
  - General Fission

item_ids:
  - fission_fuel_cell
  - fission_fuel_cell_port
  - fission_fuel_vessel
  - fission_fuel_vessel_port
  - fission_fuel_chamber
  - fission_fuel_chamber_port
---

# 燃料部件

每种反应堆都有对应的<Color id="dark_purple">燃料部件</Color>，用于容纳裂变燃料。燃料发生裂变时会产生一定的热量。手持燃料右键点击<Color id="dark_purple">燃料部件</Color>还可以设置燃料过滤，从而在同一座反应堆中使用多种燃料。

| 反应堆类型                                  | 燃料部件                         | 燃料部件端口                         | 冷却方式 |
|-----------------------------------------------|----------------------------------------|---------------------------------------------|--------------|
| [固态燃料反应堆](solid_fuel_reactor.md)   | <ItemLink id="fission_fuel_cell" />    | <ItemLink id="fission_fuel_cell_port" />    | 液体      |
| [球床反应堆](pebble_bed_reactor.md)   | <ItemLink id="fission_fuel_chamber" /> | <ItemLink id="fission_fuel_chamber_port" /> | 气体        |
| [熔盐反应堆](molten_salt_reactor.md) | <ItemLink id="fission_fuel_vessel" />  | <ItemLink id="fission_fuel_vessel_port" />  | 熔盐  |

## 临界系数

燃料需要接收到足够的中子通量才能发生裂变，通量的单位为 N/t。当进入<Color id="dark_purple">燃料部件</Color>的中子通量超过燃料的临界系数时，燃料便会开始裂变，同时产生热量和更多中子。

如果<Color id="dark_purple">燃料部件</Color>中的中子通量超过其临界系数的两倍，反应堆的效率就会降低。中子通量也可用于[辐照器](irradiator.md)的加工配方。
