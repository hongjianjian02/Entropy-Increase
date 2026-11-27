---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: 装配矩阵
    icon: extendedae:assembler_matrix_frame
categories:
- extended devices
item_ids:
- extendedae:assembler_matrix_frame
- extendedae:assembler_matrix_wall
- extendedae:assembler_matrix_glass
- extendedae:assembler_matrix_pattern
- extendedae:assembler_matrix_crafter
- extendedae:assembler_matrix_speed
---

# 装配矩阵

<Row>
<BlockImage id="extendedae:assembler_matrix_frame" p:formed="true" p:powered="true" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_wall" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_glass" scale="5"></BlockImage>
</Row>
<Row>
<BlockImage id="extendedae:assembler_matrix_pattern" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_crafter" scale="5"></BlockImage>
<BlockImage id="extendedae:assembler_matrix_speed" scale="5"></BlockImage>
</Row>

装配矩阵是一种多方块结构，整合了<ItemLink id="ae2:molecular_assembler" />和<ItemLink id="ae2:pattern_provider" />的功能。
只要ME网络中有足够的<ItemLink id="ae2:crafting_accelerator" />，它就能同时执行许多合成任务，并节省频道。

## 结构

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/assembler_matrix.snbt"></ImportStructure>
</GameScene>

结构为长方体，每条边的长度均须在3到7格之间。
- 棱边由装配矩阵框架组成。
- 表面由装配矩阵墙壁或玻璃组成。
- 内部由装配矩阵样板核心、合成核心或速度核心填充。

有效的装配矩阵必须至少包含一个样板核心和一个合成核心。
内部必须完全填满，不能留空。
装配矩阵正确成型并获得供电后，框架上的线条会变为蓝色。

## 装配矩阵核心

装配矩阵共有3种核心。

- 装配矩阵样板核心

装配矩阵只会读取样板核心中的样板。每个样板核心为矩阵提供36个样板槽位。

- 装配矩阵合成核心

装配矩阵会将收到的合成任务分配给合成核心。每个合成核心可以同时执行8个合成任务。

- 装配矩阵速度核心

它相当于装配矩阵的<ItemLink id="ae2:speed_card" />。安装5个速度核心即可让矩阵全速运行。
安装超过5个速度核心不会进一步提速。

## 操作界面

右键点击已成型并在线的装配矩阵，即可打开操作界面。

![操作示例](../pic/assembler_matrix.png)

你可以在界面中放入或搜索样板，并查看当前正在执行的合成任务数量。
