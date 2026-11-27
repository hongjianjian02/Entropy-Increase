---
navigation:
  title: 辐照器
  icon: fission_irradiator
  parent: fission/fission.md
  position: 6

categories:
  - General Fission

item_ids:
  - fission_irradiator
---

# 辐照器

将<Color id="dark_purple">辐照器</Color>放在[减速剂](moderators.md)链的末端，就能利用中子通量进行加工。中子通量越高，加工速度就越快。辐照器工作时会产生热量，并向环境释放辐射。

<GameScene zoom="2" interactive={true}>
<ImportStructure src="basic_moderator.snbt" />
<Block x="4" id="fission_irradiator" />

<BlockAnnotationTemplate id="fission_fuel_cell">
<BlockAnnotation>
接收 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" mult="3" /> N/t

<ItemImage id="leu_233_ni" /> 内含一颗低浓缩铀-233 氮化物燃料丸

工作所需通量为 <nuclearcraftneohaul:FuelInfo id="leu_233_ni" value="getFissionFuelCriticality" /> N/t

</BlockAnnotation>
</BlockAnnotationTemplate>

<BlockAnnotationTemplate id="fission_irradiator">
<BlockAnnotation>
接收 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" mult="3" /> N/t
</BlockAnnotation>
</BlockAnnotationTemplate>

<BlockAnnotationTemplate id="radium_beryllium_source">
<BlockAnnotation color="#22cc00">
中子源沿此方向发出中子通量（N）
</BlockAnnotation>
</BlockAnnotationTemplate>

<BlockAnnotation x="1" y="0" z="0" color="#22cc00">
此减速剂与<Color id="green">活跃</Color>的燃料部件相邻，因此处于<Color id="green">活跃</Color>状态

贡献通量为 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" /> N/t

</BlockAnnotation>
<BlockAnnotation x="2" y="0" z="0" color="#cccccc">
此减速剂处于<Color id="red">非活跃</Color>状态

贡献通量为 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" /> N/t

</BlockAnnotation>
<BlockAnnotation x="3" y="0" z="0" color="#22cc00">
辐照器加工配方时，此减速剂处于<Color id="green">活跃</Color>状态

贡献通量为 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" /> N/t

</BlockAnnotation>

<LineAnnotation from="0.5 0.5 1.5" to="0.5 0.5 0.5" color="#ff0000" alwaysOnTop={true} />
<LineAnnotation from="0.5 0.5 0.5" to="4.5 0.5 0.5" color="#ff0000" alwaysOnTop={true} >
线条表示中子通量（N）从中子源传向燃料部件的路径
</LineAnnotation>
<DiamondAnnotation pos="0.5 0.5 0.5" color="#ff0000" />
<DiamondAnnotation pos="4.5 0.5 0.5" color="#ffff00" />
<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>