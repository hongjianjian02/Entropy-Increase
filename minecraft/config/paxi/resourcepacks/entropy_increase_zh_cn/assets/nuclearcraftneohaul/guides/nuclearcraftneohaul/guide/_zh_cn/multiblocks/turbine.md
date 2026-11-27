---
navigation:
  title: 涡轮机
  icon: turbine_controller
  parent: multiblocks/multiblocks.md

item_ids:
  - turbine_controller
  - turbine_casing
  - turbine_glass
---

# 涡轮机

涡轮机从加压气体中提取能量，并排出相应的流体或气体。

<Row>
<GameScene zoom="2" interactive={true}>
<ImportStructure src="turbine.snbt" />
<LineAnnotation from="1.5 0.5 3.5" to="7.5 0.5 3.5" color="#0000ff" thickness="0.25">
气体从入口进入，从出口排出。

入口与出口必须位于涡轮机相对的两侧，并与转子轴承位于相同的端面。

</LineAnnotation>
</GameScene>

<GameScene zoom="2" interactive={true}>
<ImportStructure src="turbine_large.snbt" />
<BoxAnnotation min="4 0 2" max="5 4 6" color="#118888" >
同一转子段上的所有叶片必须为同一种类。

不同转子段可以使用不同种类的叶片。

</BoxAnnotation>
</GameScene>

<GameScene zoom="2" interactive={true}>
<ImportStructure src="turbine_complete.snbt" />
<Block x="0" y="1" z="2" id="turbine_controller" p:facing="west" />
<BoxAnnotation min="1 1 0" max="4 4 1" color="#118888" >
按放置规则布置发电机线圈后，气体推动涡轮机叶片时便会产生 FE。
</BoxAnnotation>

<BoxAnnotation min="1 1 4" max="4 4 5" color="#118888" >
按放置规则布置发电机线圈后，气体推动涡轮机叶片时便会产生 FE。
</BoxAnnotation>
</GameScene>
</Row>