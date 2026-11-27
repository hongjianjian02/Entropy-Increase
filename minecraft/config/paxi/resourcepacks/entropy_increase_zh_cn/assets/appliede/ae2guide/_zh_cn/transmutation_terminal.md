---
navigation:
  parent: appliede-index.md
  title: ME转化终端
  icon: transmutation_terminal
  position: 20
categories:
  - appliede
item_ids:
  - appliede:transmutation_terminal
  - appliede:wireless_transmutation_terminal
---

# ME转化终端

<GameScene zoom="8" background="transparent">
  <ImportStructure src="assemblies/transmutation_terminal.snbt" />
</GameScene>

前文介绍了ME网络通过自动合成和
AppliedE的各种[转化设备](transmutation_devices.md)将EMC转化为物品的方法。那么，
玩家该如何通过ME系统直接操作自己的EMC呢？

答案就是**ME转化终端**。它提供了ProjectE的
<ItemLink id="projecte:transmutation_table" />的大部分功能，
并将这些功能整合到了背后的ME网络中。

通过这个终端，玩家可以直接消耗储存的EMC取出已学会的可转化物品，
无需物品预先存在于普通存储中。还可以通过终端为克莱因之星
及其他储存EMC的物品充能或放能。

![可转化物品](diagrams/transmutable_item.png)
![为克莱因之星充能](diagrams/klein_star_filling.png)

终端界面中也有转化桌上那种熟悉的火焰槽，通常用于将物品
转化为EMC，在这里的作用也大致相同。此外，界面还
增加了两个按钮，提供更多实用功能。

![操作示例](diagrams/terminal_ui.png)

左侧箭头按钮可以切换按住Shift点击物品时的去向。如果箭头
向上指向终端网格，按住Shift点击的物品就会进入网格，并存入普通物品
存储。如果箭头向左指向转化槽，按住Shift点击的整组物品就会转化为
EMC，存入全网络共享的EMC储存；如果玩家尚未学会该物品，
还会同时学习它。

最后一个带奇点图标的按钮，可以让玩家自动学习存储中所有尚未
学会的物品。不过，代价可能相当高：每种物品都必须在存储中
至少有一个，而且学习时会立即将这一个物品转化为
EMC。物品的EMC值越高，可能产生的能耗就越大。因此，
建议谨慎使用，按钮也会在你决定全部学习前提示再次确认。

![操作示例](diagrams/are_you_sure.png)

## 配方

<RecipeFor id="appliede:transmutation_terminal" />
