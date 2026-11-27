---
navigation:
  title: 多方块结构
  position: 2
---

# 多方块结构

| 多方块结构                               | 结构类型 | 外壳类型                              | 玻璃类型                             |
|------------------------------------------|-----------------|------------------------------------------|----------------------------------------|
| [裂变反应堆](../fission/fission.md) | 长方体        | <ItemLink id="fission_reactor_casing" /> | <ItemLink id="fission_glass" />        |
| [涡轮机](turbine.md)                    | 长方体        | <ItemLink id="turbine_casing" />         | <ItemLink id="turbine_glass" />        |
| [热交换器](heat_exchanger.md)      | 长方体        | <ItemLink id="heat_exchanger_casing" />  | <ItemLink id="heat_exchanger_glass" /> |

### 长方体多方块结构

长方体多方块结构由框架和壁面组成。

#### 框架
框架必须使用该多方块结构对应的外壳方块搭建（见上表）。

#### 壁面
壁面必须使用对应的外壳、玻璃（见上表），或端口等其他结构部件搭建。


下方示例中，泥土方块表示框架，黏土块表示壁面。

<GameScene zoom="1" interactive={true}>
<ImportStructure src="cuboidal.snbt" />
</GameScene>