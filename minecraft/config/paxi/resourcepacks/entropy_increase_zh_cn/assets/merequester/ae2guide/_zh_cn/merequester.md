---
navigation:
  title: ME请求器
  icon: requester
  position: 100
item_ids:
  - merequester:requester
  - merequester:requester_terminal
---

# ME请求器

<Row>
  <ItemImage id="requester" scale="3"/>
  <ItemImage id="requester_terminal" scale="3"/>
</Row>

这个附属模组可让[ME系统](ae2:getting-started.md#你的第一个me系统)中的物品和流体保持一定存量。
<br/>

## 入门

首先，放置<ItemLink id="requester"/>并连接到网络。请确保它与
[自动合成](ae2:ae2-mechanics/autocrafting.md)设施处于同一个网络，其中应包含
[合成CPU](ae2:ae2-mechanics/autocrafting.md#合成cpu)和<ItemLink id="ae2:pattern_provider"/>。

<RecipeFor id="requester"/>

要让<ItemLink id="requester"/>工作，需要为待储备的物品或流体准备好样板，
并确保玩家手动请求时能够成功合成。请求器只负责自动发出请求，实际合成仍由
[ME系统](ae2:getting-started.md#你的第一个me系统)完成。
<br/>

<FloatingImage src="assets/gui.png" align="right"/>

## 配置

第一次打开<ItemLink id="requester"/>时，会看到请求配置总览。每个
方块能够提供的槽位数量可在配置中调整，界面中的每一行代表一项独立请求。
<br/>

### 启用开关

左侧复选框可开关该行请求。关闭后，不会继续检查，也不会维持
该请求的目标存量。<br/>
可以用它暂时停用某项请求，或在修改该行设置期间，阻止<ItemLink id="requester"/>
发出合成任务。
<br/>

### 储备内容

第二列用于指定储备内容。这些是虚拟槽位，不会存放实际物品。
拖入物品时，右键点击可将数量设为1，左键点击则采用所拖物品堆叠的数量。
拖入装有流体的桶时，右键点击可选择桶内流体，左键点击则选择桶物品本身。
也可以按住Shift点击物品，快速设置物品种类。如果物品栏中没有所需物品，还可以从
Applied Energistics支持的配方查看器中拖入。
<br/>

### 目标存量

“目标存量”栏用于指定要储备的数量。先设置储备内容，再输入目标值。对于非物品请求，
此栏会根据资源类型调整单位。例如，流体会显示`B`，表示桶。<br/>
当实际存量低于指定数量时，<ItemLink id="requester"/>就会请求补充。
<br/>

### 请求批量

下一栏用于指定请求批量。当实际存量低于“目标存量”栏设置的
阈值时，会按此批量发出请求。<br/>
这样可以一次请求完整批量，减少零碎任务对[合成CPU](ae2:ae2-mechanics/autocrafting.md#合成cpu)和参与合成的机器
造成的负担。
<br/>

### 提交按钮

在“目标存量”和“请求批量”栏输入所需数值后，按Enter键，或点击
该行右侧的提交按钮，即可应用修改。点击其他行会将尚未提交的数值恢复为原值。
<br/>

### 状态栏

输入框和提交按钮下方的状态栏，用于显示当前请求的状态。
<br clear="all" />
<br/>

## 状态说明

每项请求的状态栏会显示以下状态。
<br/>

### 灰色——空

当前行已停用，或尚未指定储备内容。
<br/>

### 绿色——空闲

已达到目标存量，或系统没有与该请求对应的样板。
<br/>

### 红色——缺少原料

系统缺少发起当前任务所需的原料。一旦在系统中找到足够的
原料，就会继续处理。
<br/>

### 黄色——正在合成

正在合成请求的内容，请求器正在等待任务完成。<br/>
处于此状态时，<ItemLink id="requester"/>中对应请求的设置会被锁定，无法修改。
<br/>

### 紫色——正在输出

<ItemLink id="requester"/>已收到当前任务的全部产物，正在尝试将它们输出到存储系统。<br/>
此状态通常转瞬即逝。如果持续很久，表示存储系统的剩余空间不足。
<br/>

### 方块外观

当<ItemLink id="requester"/>中的任意请求处于空闲、空以外的状态时，方块外观就会改变。

<Row>
  <Column>
    未激活
    <BlockImage id="requester" scale="3" p:active="false"/>
  </Column>
  <Column>
    已激活
    <BlockImage id="requester" scale="3" p:active="true"/>
  </Column>
</Row>
<br/>

## 终端

模组还提供了一种新终端：<ItemLink id="requester_terminal"/>。你可以在一处集中访问
同一网络中的所有<ItemLink id="requester"/>。

该终端具有<ItemLink id="ae2:pattern_access_terminal"/>的同类功能，还可以搜索特定请求。
由于所有<ItemLink id="requester"/>默认名称相同，其请求也会归入
同一个分组。如果想在<ItemLink id="requester_terminal"/>中为部分<ItemLink id="requester"/>建立独立分组，
可以使用铁砧或<ItemLink id="ae2:name_press"/>为它们改名。
