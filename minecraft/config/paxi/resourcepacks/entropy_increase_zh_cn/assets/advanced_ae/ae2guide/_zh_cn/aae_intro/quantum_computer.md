---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 量子计算机
  icon: advanced_ae:quantum_core
categories:
  - advanced devices
item_ids:
  - advanced_ae:quantum_unit
  - advanced_ae:quantum_core
  - advanced_ae:quantum_structure
  - advanced_ae:quantum_accelerator
  - advanced_ae:quantum_multi_threader
  - advanced_ae:quantum_storage_128
  - advanced_ae:quantum_storage_256
  - advanced_ae:data_entangler
---

# 量子计算机

量子计算机是一种特殊的合成计算机。只要合成存储空间足够，它就能同时处理不限数量的合成请求。

<GameScene zoom="2" background="transparent">
  <ImportStructure src="../structure/quantum_computer_multiblock.snbt"></ImportStructure>
</GameScene>

## 量子计算机核心

<BlockImage id="advanced_ae:quantum_core" p:powered="true" p:formed="true" scale="4"></BlockImage>

量子计算机核心是整台计算机的中心，自带 256M 合成存储空间和 8 个协处理线程。它是唯一能单独构成量子计算机，并提供其全部功能的方块；搭建为多方块结构后，性能还能进一步提升。单独使用时，需要从带连接器的顶面或底面供电。

## 量子计算机合成存储器

<Row gap="20">
<BlockImage id="advanced_ae:quantum_storage_128" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_storage_256" scale="4"></BlockImage>
</Row>

这些方块扩大量子核心的合成存储空间，从而增加量子计算机能够同时执行的任务数。有 128M 和 256M 两种容量。

## 量子数据纠缠器

<BlockImage id="advanced_ae:data_entangler" scale="4"></BlockImage>

数据纠缠器会作用于多方块结构中的所有存储器，使其能在多个维度中储存数据，从而将存储容量提高为 4 倍。每台量子计算机最多只能安装一个。

## 量子计算机加速器

<BlockImage id="advanced_ae:quantum_accelerator" scale="4"></BlockImage>

每个量子计算机加速器为多方块结构增加 8 个协处理器。量子计算机正在执行的所有合成样板都可以共享全部协处理器，因此多安装一些通常很有帮助。

## 量子计算机多线程处理器

<BlockImage id="advanced_ae:quantum_multi_threader" scale="4"></BlockImage>

与数据纠缠器类似，多线程处理器让加速器能在其他维度中运行额外线程，将协处理能力提高为 4 倍。每台量子计算机最多只能安装一个。

## 量子计算机结构玻璃

<Row gap="20">
<BlockImage id="advanced_ae:quantum_structure" scale="4"></BlockImage>
<BlockImage id="advanced_ae:quantum_structure" p:formed="true" p:powered="true" scale="4"></BlockImage>
</Row>

这些方块用于搭建量子计算机的框架，将整个结构连接起来。

## 多方块结构

搭建多方块量子计算机时，必须遵守以下规则：
- 外部尺寸最大为 7x7x7；
- 内部不能留空，可使用<ItemLink id="advanced_ae:quantum_unit" />填充，但它不提供额外功能；
- 必须恰好有一个<ItemLink id="advanced_ae:quantum_core" />；
- 最多一个<ItemLink id="advanced_ae:data_entangler" />；
- 最多一个<ItemLink id="advanced_ae:quantum_multi_threader" />；
- 最外层的全部方块都必须是<ItemLink id="advanced_ae:quantum_structure" />；
- 内部不能放置<ItemLink id="advanced_ae:quantum_structure" />。

## 服务端配置

服务端配置可以调整多项数值，例如：
- 多方块结构的最大尺寸；
- 每个量子计算机加速器提供的协处理器数量；
- 量子计算机多线程处理器的数量上限；
- 多线程处理器的线程倍率；
- 数据纠缠器的数量上限；
- 数据纠缠器的存储容量倍率。

当前实例中的具体限制可通过物品工具提示查看。