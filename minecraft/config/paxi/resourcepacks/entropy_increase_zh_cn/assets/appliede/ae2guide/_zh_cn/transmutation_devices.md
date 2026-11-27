---
navigation:
  parent: appliede-index.md
  title: 转化设备
  icon: emc_interface
  position: 10
categories:
  - appliede
item_ids:
  - appliede:emc_interface
  - appliede:cable_emc_interface
  - appliede:emc_export_bus
  - appliede:emc_import_bus
  - appliede:learning_card
---

# 转化设备

<GameScene zoom="4" background="transparent">
  <ImportStructure src="assemblies/transmutation_devices.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

作为AE2现有<ItemLink id="ae2:interface" />、<ItemLink id="ae2:export_bus" />和
<ItemLink id="ae2:import_bus" />的补充，AppliedE提供了对应的转化设备。
它们的工作方式与AE2原设备几乎相同，也仍然处理普通物品，
关键区别在于每次操作都会将物品转化为EMC，或由EMC转化出物品。

虽然过滤器可以设置为任意物品，但设备只能处理至少一位玩家已经学会，
且该玩家已通过网络上的
<ItemLink id="appliede:emc_module">转化模块</ItemLink>接入的物品。对于
<ItemLink id="appliede:emc_interface" />，只有网络已知的物品才能进入其内部储存，转化并
送入EMC储存。同样，
<ItemLink id="appliede:emc_import_bus" />也不会提取尚未学会的物品。

## 炼金掌控卡

<ItemImage id="learning_card" scale="4" />

如果每种物品都必须事先学会，才能自动存入ME系统
转化为EMC，使用起来就会很繁琐。因此，可以将
<ItemLink id="appliede:learning_card" />安装到<ItemLink id="appliede:emc_interface" />或
<ItemLink id="appliede:emc_import_bus" />中，使设备自动学习输入的物品，
前提是该物品本身具有EMC值。

请注意，物品只会由设备的所有者学会，也就是放置
输入总线、接口，或向接口输送物品的网络设备的玩家。

## 配方

<Recipe id="appliede:emc_interface" />
<RecipeFor id="appliede:emc_export_bus" />
<RecipeFor id="appliede:emc_import_bus" />
<RecipeFor id="appliede:learning_card" />
