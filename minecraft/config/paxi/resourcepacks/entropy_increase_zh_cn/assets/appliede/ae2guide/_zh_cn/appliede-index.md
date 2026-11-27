---
navigation:
  title: "附属模组：AppliedE"
  position: 150
---

# AppliedE

<GameScene zoom="4" background="transparent">
  <ImportStructure src="assemblies/appliede.snbt" />
  <IsometricCamera yaw="195" pitch="30" />
</GameScene>

这是一个同时面向
[*Applied Energistics 2*](https://github.com/AppliedEnergistics/Applied-Energistics-2)和
[*ProjectE*](https://www.curseforge.com/minecraft/mc-mods/projecte)的Minecraft附属模组，使
二者能够更紧密地联动。AppliedE会将ProjectE的*EMC*转化为
ME网络能够显示、报告和操作的独立资源，再通过AE2自动合成
以及直接调用炼金术师能力的新设备，按需将EMC转化为物品。

首先，制作<ItemLink id="emc_module" />，将其放置在ME
网络的任意位置。之后，网络便能通过专用储存调用你的炼金知识和EMC，
既可用于自动合成，也能供AppliedE提供的各种[转化设备](transmutation_devices.md)
使用。
