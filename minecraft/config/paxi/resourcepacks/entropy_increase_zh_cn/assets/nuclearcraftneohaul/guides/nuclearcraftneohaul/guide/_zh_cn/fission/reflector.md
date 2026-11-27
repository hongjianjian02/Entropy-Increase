---
navigation:
  title: 中子反射器
  icon: beryllium_carbon_reflector
  parent: fission/fission.md
  position: 7

categories:
  - General Fission

data_maps:
  - fission_reflector_data
---

# 中子反射器

中子反射器放在[减速剂](moderators.md)链的末端时，会将中子通量反射回原处。反射率为 100% 的反射器能让燃料单元的通量翻倍，因为中子会毫无损失地再次经过[减速剂](moderators.md)。反射器与活跃燃料部件之间最多只能隔着两个减速剂。

<GameScene zoom="2" interactive={true}>
<ImportStructure src="reflector.snbt" />

<LineAnnotation from="0.5 0.5 1.5" to="0.5 0.5 0.6" color="#ff0000" alwaysOnTop={true} />

<LineAnnotation from="0.5 0.5 0.6" to="3.5 0.5 0.6" color="#ff0000" alwaysOnTop={true} >

线条表示中子通量（N）的传播路径

</LineAnnotation>
<LineAnnotation from="3.5 0.5 0.4" to="0.5 0.5 0.4" color="#ff0000" alwaysOnTop={true} >

线条表示中子通量（N）的传播路径

</LineAnnotation>
<LineAnnotation from="3.5 0.5 0.4" to="3.5 0.5 0.6" color="#ff0000" alwaysOnTop={true} >

线条表示中子通量（N）的传播路径

</LineAnnotation>

<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>