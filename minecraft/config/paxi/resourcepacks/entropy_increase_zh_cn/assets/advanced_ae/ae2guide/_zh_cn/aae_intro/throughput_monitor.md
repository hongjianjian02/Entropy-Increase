---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: ME 吞吐量监控器
  icon: advanced_ae:throughput_monitor
categories:
  - advanced items
item_ids:
  - advanced_ae:throughput_monitor
  - advanced_ae:throughput_monitor_configurator
---

# ME 吞吐量监控器

<GameScene zoom="8" background="transparent">
<ImportStructure src="../structure/throughput_monitors.snbt"></ImportStructure>
<IsometricCamera yaw="195" pitch="30" />
</GameScene>

吞吐量监控器拥有<ItemLink id="ae2:storage_monitor" />的全部功能，并额外提供吞吐量统计。它会跟踪一种物品或流体的数量变化，向玩家显示每秒的变化量。

它*不*需要频道。

## 操作方式

* 手持物品右键点击，或手持流体容器连续右键点击两次，将监控目标设为该物品或流体。
* 空手右键点击，清除监控目标。
* 空手 Shift+右键点击，锁定监控器。

## 吞吐量监控配置器

<ItemImage id="advanced_ae:throughput_monitor_configurator" scale="4"></ItemImage>

吞吐量监控配置器用于更改显示的数据单位。手持它右键点击监控器，会在以下三种模式间切换：

* 每刻数量
* 每秒数量
* 每分钟数量

注意：切换模式后，读数可能需要一段时间才能稳定，请勿直接采用刚切换时的数值！