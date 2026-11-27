---
navigation:
    parent: epp_intro/epp_intro-index.md
    title: ME无线连接器
    icon: extendedae:wireless_connect
categories:
- extended devices
item_ids:
- extendedae:wireless_connect
- extendedae:wireless_tool
---

# ME无线连接器

<Row gap="20">
<BlockImage id="extendedae:wireless_connect" scale="6"></BlockImage>
<ItemImage id="extendedae:wireless_tool" scale="6"></ItemImage>
</Row>

ME无线连接器可以像<ItemLink id="ae2:quantum_link" />一样连接两个网络，但距离有限，而且无法
跨维度连接。ME无线连接器只支持一对一连接。如果需要多对多连接，
请使用<ItemLink id="extendedae:wireless_hub" />。

## 配对无线连接器

使用ME无线连接工具，依次点击需要配对的两个无线连接器。

潜行并点击即可清除ME无线连接工具当前记录的连接器。

成功建立连接后，ME无线连接器的贴图会发生变化。

未连接的ME无线连接器

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_off.snbt"></ImportStructure>
</GameScene>

已连接的ME无线连接器

<GameScene zoom="5" background="transparent">
  <ImportStructure src="../structure/wireless_connector_on.snbt"></ImportStructure>
</GameScene>

## 颜色

无线连接器可以像线缆一样染色，且只能连接同色的线缆或连接器。

需要使用<ItemLink id="ae2:color_applicator" />为连接器染色。

因此，可以像这样布置无线连接器：

<GameScene zoom="3" background="transparent" interactive={true}>
  <ImportStructure src="../structure/wireless_connector_setup.snbt"></ImportStructure>
</GameScene>

## 能耗

ME无线连接器之间的距离越远，能耗越高。能耗与距离之间并非线性关系，
因此距离过远时，耗电量会变得非常高。

可以安装<ItemLink id="ae2:energy_card" />来节能，每张卡可降低10%的能耗。

