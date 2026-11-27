---
navigation:
  title: 热交换器
  icon: heat_exchanger_controller
  parent: multiblocks/multiblocks.md

item_ids:
  - heat_exchanger_controller
  - heat_exchanger_casing
  - heat_exchanger_glass
---

# 热交换器

使用<ItemLink id="multitool" />可以切换热交换管的模式。

<Row>
<Column alignItems="center">

#### 热侧路径：12 格
#### 冷侧路径：6 格
<GameScene zoom="2">
<ImportStructure src="hx_no_wrap.snbt" />
<LineAnnotation from="-0.25 0.5 1.5" to="4.37 0.5 1.5" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="4.5 0.5 1.37" to="4.5 0.5 2.37" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="4.62 0.5 2.5" to="1.63 0.5 2.5" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="1.5 0.5 2.37" to="1.5 0.5 3.38" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="1.37 0.5 3.5" to="6.25 0.5 3.5" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>

<LineAnnotation from="1.25 0.5 -0.25" to="1.25 0.5 4" color="#0000ff" thickness="0.25"  >
路径长度：6
</LineAnnotation>
<LineAnnotation from="1.38 0.5 3.88" to="4.62 0.5 3.88" color="#0000ff" thickness="0.25"  >
路径长度：6
</LineAnnotation>
<LineAnnotation from="4.5 0.5 4" to="4.5 0.5 5.25" color="#0000ff" thickness="0.25"  >
路径长度：6
</LineAnnotation>

<IsometricCamera yaw="0" pitch="90" />
</GameScene>
</Column>

<Column alignItems="center">

#### 热侧路径：12 格
#### 冷侧路径：12 格
<GameScene zoom="2">
<ImportStructure src="hx_wrap.snbt" />
<LineAnnotation from="-0.25 0.5 1.5" to="1.13 0.5 1.5" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>

<LineAnnotation from="1.13 0.5 1.5" to="4.37 0.5 1.5" color="#ff00ff" thickness="0.25" >

路径长度：12

</LineAnnotation>
<LineAnnotation from="4.5 0.5 1.37" to="4.5 0.5 2.37" color="#ff00ff" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="4.62 0.5 2.5" to="1.63 0.5 2.5" color="#ff00ff" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="1.5 0.5 2.37" to="1.5 0.5 3.38" color="#ff00ff" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="1.37 0.5 3.5" to="4.63 0.5 3.5" color="#ff00ff" thickness="0.25" >
路径长度：12
</LineAnnotation>
<LineAnnotation from="4.63 0.5 3.5" to="6.25 0.5 3.5" color="#ff0000" thickness="0.25" >
路径长度：12
</LineAnnotation>

<LineAnnotation from="1.25 0.5 -0.25" to="1.25 0.5 1.37" color="#0000ff" thickness="0.25"  >
路径长度：12
</LineAnnotation>
<LineAnnotation from="4.5 0.5 3.62" to="4.5 0.5 5.25" color="#0000ff" thickness="0.25"  >
路径长度：12
</LineAnnotation>

<IsometricCamera yaw="0" pitch="90" />
</GameScene>
</Column>
</Row>