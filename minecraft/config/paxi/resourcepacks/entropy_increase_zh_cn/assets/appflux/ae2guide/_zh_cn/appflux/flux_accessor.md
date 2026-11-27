---
navigation:
  parent: appflux/appflux-index.md
  title: 通量访问点
  icon: appflux:flux_accessor
categories:
- flux accessor
item_ids:
- appflux:flux_accessor
- appflux:part_flux_accessor
---

# 通量访问点

<Row>
<BlockImage id="appflux:flux_accessor" scale="8"></BlockImage>
<GameScene zoom="8" background="transparent">
  <ImportStructure src="../structure/flux_accessor.snbt"></ImportStructure>
</GameScene>
</Row>

通量访问点可以向ME网络存入能量，也可以取出网络中储存的能量。默认没有
输入/输出速率限制，可在Appflux配置中调整。

它有快速和普通两种模式。快速模式下，每tick都会输出能量，大量使用时可能造成卡顿。
普通模式则根据目标的储能情况输出能量，以减少性能负担。

* 注意：这里所说的“能量”，指[能源存储元件](./flux_cells.md)中储存的FE，
而非[能量元件](ae2:items-blocks-machines/energy_cells.md)中的能量。

