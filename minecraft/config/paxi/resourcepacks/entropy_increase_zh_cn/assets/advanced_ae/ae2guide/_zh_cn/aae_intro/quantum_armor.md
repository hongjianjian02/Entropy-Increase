---
navigation:
  parent: aae_intro/aae_intro-index.md
  title: 量子护甲套装
  icon: advanced_ae:quantum_helmet
categories:
  - advanced items
item_ids:
  - advanced_ae:quantum_helmet
  - advanced_ae:quantum_chestplate
  - advanced_ae:quantum_leggings
  - advanced_ae:quantum_boots
  - advanced_ae:quantum_upgrade_base
  - advanced_ae:walk_speed_card
  - advanced_ae:sprint_speed_card
  - advanced_ae:step_assist_card
  - advanced_ae:jump_height_card
  - advanced_ae:lava_immunity_card
  - advanced_ae:flight_card
  - advanced_ae:water_breathing_card
  - advanced_ae:auto_feeding_card
  - advanced_ae:auto_stock_card
  - advanced_ae:magnet_card
  - advanced_ae:hp_buffer_card
  - advanced_ae:evasion_card
  - advanced_ae:regeneration_card
  - advanced_ae:strength_card
  - advanced_ae:attack_speed_card
  - advanced_ae:luck_card
  - advanced_ae:reach_card
  - advanced_ae:swim_speed_card
  - advanced_ae:night_vision_card
  - advanced_ae:flight_drift_card
  - advanced_ae:recharging_card
  - advanced_ae:portable_workbench_card
  - advanced_ae:pick_craft_card
---

# 量子护甲套装

<Row gap="10">
<ItemImage id="advanced_ae:quantum_helmet" components="ae2:stored_energy=2.0E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_chestplate" components="ae2:stored_energy=3.0E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_leggings" components="ae2:stored_energy=2.5E8d" scale="4"></ItemImage>
<ItemImage id="advanced_ae:quantum_boots" components="ae2:stored_energy=2.0E8d" scale="4"></ItemImage>
</Row>

<ItemGrid>
<ItemIcon id="advanced_ae:quantum_helmet" components="ae2:stored_energy=2.0E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_chestplate" components="ae2:stored_energy=3.0E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_leggings" components="ae2:stored_energy=2.5E8d"></ItemIcon>
<ItemIcon id="advanced_ae:quantum_boots" components="ae2:stored_energy=2.0E8d"></ItemIcon>
</ItemGrid>

想过把整套 AE 系统穿在身上会是什么感觉吗？量子护甲让这成为现实。这套低调的高科技装备能连接 AE2 系统，让你随时随地取用系统中的资源！基础护甲由能量驱动，防护能力与下界合金装备相当，还能消耗缓冲能量生成护盾，吸收大量伤害。战靴可以免除摔落伤害，胸甲则能消除飞行时的挖掘速度惩罚。不过，装入各种升级卡后，才能发挥它的真正实力！

<br/>

## 绑定护甲

将各件护甲分别放入<ItemLink id="ae2:wireless_access_point" />的相应槽位，即可绑定到系统。绑定后获得的功能取决于护甲部位和安装的升级卡，后文会逐一介绍。要正常使用这些额外功能，还必须处于所绑定无线访问节点的覆盖范围内。

<br/>

## 安装升级

先穿上护甲，再按快捷键打开量子护甲配置菜单（默认为 N），即可安装升级卡。

![量子护甲配置界面](../pic/quantum_armor_config.png)

在此界面中，你可以添加、移除或开关升级，也能调整部分升级提供的设置。

<br/>

## 量子升级基础卡

<ItemImage id="advanced_ae:quantum_upgrade_base" scale="2"></ItemImage>

<ItemLink id="advanced_ae:quantum_upgrade_base" />本身没有特殊功能，但它是制作所有升级卡的基础材料。

<br/>

## 自动喂食卡

<ItemImage id="advanced_ae:auto_feeding_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:auto_feeding_card" />允许指定用于进食的物品。把需要的食物拖入过滤槽；护甲绑定到 AE2 网络后，就会在你饥饿时尝试从系统中取出这些食物供你食用。

<br/>

## 自动补货卡

<ItemImage id="advanced_ae:auto_stock_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:auto_stock_card" />同样要求护甲已绑定 AE2 系统，并处于无线访问节点的覆盖范围内。它可以让玩家物品栏中始终保有指定数量的物品。每个配置槽的数量可以超过一组，因此也能让同种物品持续补满多个物品栏槽位。

<br/>

## 速度卡

<Row gap="10">
<ItemImage id="advanced_ae:walk_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:sprint_speed_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:swim_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:walk_speed_card" />
* <ItemLink id="advanced_ae:sprint_speed_card" />
* <ItemLink id="advanced_ae:swim_speed_card" />

这些升级卡可以提高穿戴者的移动速度，具体速度均可配置，潜行和飞行时也会受到影响。如果已有其他加速效果，也可以通过这些升级降低速度，以便更好地控制移动。

<br/>

## 高度卡

<Row gap="10">
<ItemImage id="advanced_ae:jump_height_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:step_assist_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:jump_height_card" />
* <ItemLink id="advanced_ae:step_assist_card" />

这些升级影响竖直方向的移动，可配置跳跃高度或启用自动跨步。

<br/>

## 飞行卡

<Row gap="10">
<ItemImage id="advanced_ae:flight_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:flight_drift_card" scale="2"></ItemImage>
</Row>

### 飞行卡

安装<ItemLink id="advanced_ae:flight_card" />后即可使用创造模式飞行。飞行速度可通过界面中的滑块调整，并会叠加移动速度卡和疾跑速度卡的加速效果。

### 飞行惯性卡

<ItemLink id="advanced_ae:flight_drift_card" />只有在同时安装飞行卡时才会生效。它会增加一个滑块，用于调整创造模式飞行的惯性。数值越低，停止移动越快；设为 0 时可立即停下。

<br/>

## ME 无线充电卡

<ItemImage id="advanced_ae:recharging_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:recharging_card" />可为安装它的护甲部件无线充电，要求护甲已绑定网络，并处于无线访问节点的覆盖范围内。装在胸甲上时，还能额外为物品栏内的物品充电。

<br/>

## 便携式元件工作台功能卡

<ItemImage id="advanced_ae:portable_workbench_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:portable_workbench_card" />为量子护甲添加了便携式元件工作台。按对应快捷键即可打开，使用方式与方块形式的元件工作台相同。

<br/>

## Pick-Craft 功能卡

<ItemImage id="advanced_ae:pick_craft_card" scale="2"></ItemImage>

<ItemLink id="advanced_ae:pick_craft_card" />为护甲添加了一项快捷键功能：按下后，会尝试合成玩家当前指向的方块。此功能要求护甲已绑定网络，且网络中存在与目标匹配的样板。随后会弹出数量输入窗口，其余流程与普通自动合成请求相同。

<br/>

## 实用功能卡

<Row gap="10">
<ItemImage id="advanced_ae:night_vision_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:lava_immunity_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:water_breathing_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:magnet_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:camo_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:night_vision_card" />
* <ItemLink id="advanced_ae:lava_immunity_card" />
* <ItemLink id="advanced_ae:water_breathing_card" />
* <ItemLink id="advanced_ae:magnet_card" />
* <ItemLink id="advanced_ae:camo_card" />

这些卡为穿戴者提供多种便利功能，包括免疫部分伤害和获得夜视效果。其中，磁卡有独立的配置界面，可以设置拾取过滤器和作用范围。

<br/>

## 防御卡

<Row gap="10">
<ItemImage id="advanced_ae:hp_buffer_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:regeneration_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:evasion_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:hp_buffer_card" />
* <ItemLink id="advanced_ae:regeneration_card" />
* <ItemLink id="advanced_ae:evasion_card" />

这些升级以不同方式提升穿戴者的防御能力。生命值提升卡增加最大生命值，再生卡加快生命恢复，闪避卡则有一定概率完全免疫任意来源的伤害。

<br/>

## 攻击卡

<Row gap="10">
<ItemImage id="advanced_ae:strength_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:attack_speed_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:strength_card" />
* <ItemLink id="advanced_ae:attack_speed_card" />

这些升级可以提高穿戴者的攻击伤害和攻击速度，增强进攻能力。

<br/>

## 属性卡

<Row gap="10">
<ItemImage id="advanced_ae:luck_card" scale="2"></ItemImage>
<ItemImage id="advanced_ae:reach_card" scale="2"></ItemImage>
</Row>

* <ItemLink id="advanced_ae:luck_card" />
* <ItemLink id="advanced_ae:reach_card" />

这些升级直接提升穿戴者的属性：幸运卡有助于获得更好的战利品，交互范围卡则增加方块交互距离。交互范围可设置为所需的具体数值。

<br/>

## 敬请期待

这套装备目前已具备基础功能，后续还计划加入许多新功能，敬请期待！