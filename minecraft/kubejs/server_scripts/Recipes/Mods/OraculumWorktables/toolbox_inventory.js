// Oraculum 1.0.1 尚未从 1.21 容器组件恢复库存。
// 掉落表保存原生 itemStackHandler，BlockItem 放置时携带 custom_data；在放置事件恢复。
// 使用原生序列化结构保留槽位、物品数量与数据组件，恢复后移除临时数据以防重复。
const EI_TOOLBOX_DATA_COMPONENTS = Java.loadClass('net.minecraft.core.component.DataComponents')
const EI_TOOLBOX_COMPONENT_MAP = Java.loadClass('net.minecraft.core.component.DataComponentMap')
const EI_TOOLBOX_CUSTOM_DATA = Java.loadClass('net.minecraft.world.item.component.CustomData')

function restoreEiToolboxInventory(event) {
  var eiToolboxLevel = event.block.getLevel()
  if (eiToolboxLevel.isClientSide()) return
  var eiToolboxEntity = event.block.getEntity()
  if (eiToolboxEntity == null) return
  var eiToolboxComponents = eiToolboxEntity.components()
  var eiToolboxCustom = eiToolboxComponents.get(EI_TOOLBOX_DATA_COMPONENTS.CUSTOM_DATA)
  if (eiToolboxCustom == null) return
  var eiToolboxTag = eiToolboxCustom.copyTag()
  if (!eiToolboxTag.contains('ei_toolbox_inventory', 10)) return

  eiToolboxEntity.getItemStackHandler().deserializeNBT(
    eiToolboxLevel.registryAccess(), eiToolboxTag.getCompound('ei_toolbox_inventory')
  )
  eiToolboxTag.remove('ei_toolbox_inventory')
  var eiToolboxUpdatedComponents = EI_TOOLBOX_COMPONENT_MAP.builder().addAll(eiToolboxComponents)
  eiToolboxUpdatedComponents.set(EI_TOOLBOX_DATA_COMPONENTS.CUSTOM_DATA,
    eiToolboxTag.isEmpty() ? null : EI_TOOLBOX_CUSTOM_DATA.of(eiToolboxTag))
  eiToolboxEntity.setComponents(eiToolboxUpdatedComponents.build())
  eiToolboxEntity.setChanged()
}

BlockEvents.placed('oraculumworktables:toolbox', restoreEiToolboxInventory)
BlockEvents.placed('oraculumworktables:mechanical_toolbox', restoreEiToolboxInventory)
