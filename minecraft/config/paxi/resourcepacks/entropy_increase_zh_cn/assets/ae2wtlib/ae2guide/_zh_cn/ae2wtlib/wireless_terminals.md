---
navigation:
  parent: ae2wtlib/ae2wtlib-index.md
  title: AE2WTLib无线终端
  icon: ae2wtlib:wireless_universal_terminal
  position: 10
categories:
- ae2wtlib
item_ids:
  - ae2wtlib:wireless_pattern_encoding_terminal
  - ae2wtlib:wireless_pattern_access_terminal
---

# 无线终端

<ItemGrid>
  <ItemIcon id="ae2wtlib:wireless_universal_terminal" />
  <ItemIcon id="ae2:wireless_crafting_terminal" />
  <ItemIcon id="ae2wtlib:wireless_pattern_encoding_terminal" />
  <ItemIcon id="ae2wtlib:wireless_pattern_access_terminal" />
</ItemGrid>

除<ItemLink id="ae2:energy_card" />外，所有AE2WTLib无线终端均可安装<ItemLink id="ae2wtlib:quantum_bridge_card" />，
也可合并为<ItemLink id="ae2wtlib:wireless_universal_terminal" />。

与AE2的<ItemLink id="ae2:wireless_terminal" />一样，可通过快捷键打开，也能放入饰品槽位，
前提是安装了支持Curios API的模组。

无线终端也可以像普通的<ItemLink id="ae2:wireless_terminal" />一样，通过<ItemLink id="ae2:wireless_access_point" />绑定网络。

## 无线通用终端

<ItemImage id="ae2wtlib:wireless_universal_terminal" scale="3" />

<ItemLink id="ae2wtlib:wireless_universal_terminal" />可将多个无线终端合并为一个物品。

## 无线合成终端

<ItemImage id="ae2:wireless_crafting_terminal" scale="3" />

<ItemLink id="ae2:wireless_crafting_terminal" />是合成终端的无线版本。
与AE2基础版本相比，它具有一些[额外功能](wireless_crafting_terminal.md)。

## 无线样板终端

<ItemImage id="ae2wtlib:wireless_pattern_encoding_terminal" scale="3" />

<ItemLink id="ae2:pattern_encoding_terminal" />的无线版本。

<RecipeFor id="ae2wtlib:wireless_pattern_encoding_terminal" />

## 无线样板管理终端

<ItemImage id="ae2wtlib:wireless_pattern_access_terminal" scale="3" />

<ItemLink id="ae2:pattern_access_terminal" />的无线版本。

<RecipeFor id="ae2wtlib:wireless_pattern_access_terminal" />

## 附属模组终端

其他附属模组提供的多数无线终端，也支持并入<ItemLink id="ae2wtlib:wireless_universal_terminal" />。

## 无法并入通用终端的终端

<ItemLink id="ae2:wireless_terminal" />无法用于<ItemLink id="ae2wtlib:wireless_universal_terminal" />，
因为相较于<ItemLink id="ae2:wireless_crafting_terminal" />，它无法提供任何额外功能。
它也无法使用<ItemLink id="ae2wtlib:quantum_bridge_card" />。
