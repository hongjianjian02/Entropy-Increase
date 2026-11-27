---
navigation:
  title: 减速剂
  icon: heavy_water_moderator
  parent: fission/fission.md
  position: 4

data_maps:
  - fission_moderator_data
---

# 减速剂

<Color id="dark_purple">减速剂</Color>可以减慢[燃料部件](fuel_component.md)产生的高能中子，使其更容易在其他燃料部件中引发裂变。减速剂必须排成一条直线，长度不能超过 4 个方块，并且至少有一端连接*活跃*的燃料部件。

减速剂链另一端产生的中子通量，等于链中各减速剂的通量系数之和。如果两端都连接活跃的燃料单元，则两端都会接收到这份总通量。有些布局规则会要求“活跃”减速剂；这指的是与活跃[燃料部件](fuel_component.md)直接相邻的减速剂。

<Row fullWidth={true}>
<Column>

### 需要 1 个中子源：

<GameScene zoom="2" interactive={true}>
<ImportStructure src="basic_moderator.snbt" />
<BlockAnnotationTemplate id="fission_fuel_cell">
<BlockAnnotation>
接收 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" mult="3" /> N/t

<ItemImage id="leu_233_ni" /> 内含一颗低浓缩铀-233 氮化物燃料丸

工作所需通量为 <nuclearcraftneohaul:FuelInfo id="leu_233_ni" value="getFissionFuelCriticality" /> N/t

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
此减速剂与<Color id="green">活跃</Color>的燃料部件相邻，因此处于<Color id="green">活跃</Color>状态

贡献通量为 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" /> N/t

</BlockAnnotation>

<LineAnnotation from="0.5 0.5 1.5" to="0.5 0.5 0.5" color="#ff0000" alwaysOnTop={true} />
<LineAnnotation from="0.5 0.5 0.5" to="4.5 0.5 0.5" color="#ff0000" alwaysOnTop={true} >
线条表示中子通量（N）从中子源传向燃料部件的路径
</LineAnnotation>
<DiamondAnnotation pos="0.5 0.5 0.5" color="#ff0000" />
<DiamondAnnotation pos="4.5 0.5 0.5" color="#ff0000" />
<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>
</Column>

<Column alignItems="center">
### 需要 2 个中子源：

<GameScene zoom="2" interactive={true}>
<ImportStructure src="4_cell_moderator.snbt" />
<BlockAnnotationTemplate id="fission_fuel_cell">
<BlockAnnotation>
接收 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" mult="3" /> N/t

<ItemImage id="leu_233_ni" /> 内含一颗低浓缩铀-233 氮化物燃料丸

工作所需通量为 <nuclearcraftneohaul:FuelInfo id="leu_233_ni" value="getFissionFuelCriticality" /> N/t

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
此减速剂与<Color id="green">活跃</Color>的燃料部件相邻，因此处于<Color id="green">活跃</Color>状态

贡献通量为 <nuclearcraftneohaul:DataMapInfo datamap="fission_moderator_data" type="heavy_water_moderator" value="fluxFactor" /> N/t

</BlockAnnotation>

<LineAnnotation from="0.5 0.5 5.5" to="0.5 0.5 0.5" color="#ff0000" alwaysOnTop={true} />
<LineAnnotation from="0.5 0.5 4.5" to="4.5 0.5 4.5" color="#ff0000" alwaysOnTop={true} >
线条表示中子通量（N）从中子源传向燃料部件的路径
</LineAnnotation>

<LineAnnotation from="5.5 0.5 0.5" to="0.5 0.5 0.5" color="#ffff00" alwaysOnTop={true} />
<LineAnnotation from="4.5 0.5 4.5" to="4.5 0.5 0.5" color="#ffff00" alwaysOnTop={true} >
线条表示中子通量（N）从中子源传向燃料部件的路径
</LineAnnotation>
<DiamondAnnotation pos="0.5 0.5 0.5" color="#ff0000" />
<DiamondAnnotation pos="0.5 0.5 4.5" color="#ff0000" />
<DiamondAnnotation pos="4.5 0.5 0.5" color="#ffff00" />
<DiamondAnnotation pos="4.5 0.5 4.5" color="#ffff00" />
<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>
</Column>
</Row>

## 无效布局示例：

<Row fullWidth={true}>
<Column>
### 减速剂链过短：

<GameScene zoom="2" interactive={true}>
<ImportStructure src="basic_moderator.snbt" />
<Block x="1" id="nuclearcraftneohaul:fission_fuel_cell" />
<Block x="2" id="minecraft:air" />
<Block x="3" id="minecraft:air" />
<Block x="4" id="minecraft:air" />

<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>
</Column>
<Column alignItems="center">
### 减速剂链过长：

<GameScene zoom="2" interactive={true}>
<ImportStructure src="basic_moderator.snbt" />
<Block x="4" id="nuclearcraftneohaul:heavy_water_moderator" />
<Block x="5" id="nuclearcraftneohaul:heavy_water_moderator" />
<Block x="6" id="nuclearcraftneohaul:fission_fuel_cell" />

<IsometricCamera yaw="0" roll="0" pitch="60" />
</GameScene>
</Column>
</Row>