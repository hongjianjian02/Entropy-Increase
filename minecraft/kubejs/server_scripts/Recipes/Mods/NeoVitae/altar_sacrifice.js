const NV_ALTAR_TILE = Java.loadClass('com.breakinblocks.neovitae.common.blockentity.AraVitaeTile')
const NV_INTERACT_PRIORITY = Java.loadClass('net.neoforged.bus.api.EventPriority')
const NV_RIGHT_CLICK_BLOCK = Java.loadClass('net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock')
const NV_MAIN_HAND = Java.loadClass('net.minecraft.world.InteractionHand').MAIN_HAND
const NV_INTERACTION_RESULT = Java.loadClass('net.minecraft.world.InteractionResult')
const NV_INTERACTION_DENIED = Java.loadClass('net.neoforged.neoforge.common.util.TriState').FALSE
const NV_PAGAN_HEART_EV = 10000

NativeEvents.onEvent(NV_INTERACT_PRIORITY.LOWEST, NV_RIGHT_CLICK_BLOCK, event => {
  const level = event.getLevel()
  if (level.isClientSide() || event.isCanceled() || event.getHand() !== NV_MAIN_HAND) return
  if (event.getUseBlock() === NV_INTERACTION_DENIED || event.getUseItem() === NV_INTERACTION_DENIED) return

  const heart = event.getItemStack()
  if (String(heart.id) !== 'eeeabsmobs:heart_of_pagan') return

  const player = event.getEntity()
  const pos = event.getPos()
  if (player.isSpectator() || !level.mayInteract(player, pos)) return

  const altar = level.getBlockEntity(pos)
  if (!(altar instanceof NV_ALTAR_TILE)) return

  event.setCancellationResult(NV_INTERACTION_RESULT.CONSUME)
  event.setCanceled(true)

  const multiplier = Math.fround(1 + altar.getSacrificeBonus())
  const sacrifice = Math.ceil(NV_PAGAN_HEART_EV / multiplier)
  const generated = Math.floor(sacrifice * multiplier)
  const mainSpace = Math.max(0, altar.getMainCapacity() - altar.getMainTank())
  const reserveSpace = altar.getReserveCapacity() - altar.getReserveTank()
  if (generated > mainSpace && (reserveSpace < 0 || mainSpace + reserveSpace < NV_PAGAN_HEART_EV)) {
    player.tell('§c命血祭坛剩余容量不足，需要腾出 10 B 空间。')
    return
  }

  const overflow = altar.addSacrificeEV(sacrifice, true)
  altar.drainMainTank(generated - overflow - NV_PAGAN_HEART_EV)
  heart.shrink(1)
  player.swing(NV_MAIN_HAND, true)
  player.tell('§a已献祭 1 颗异教徒的心脏，获得 10 B 生命源质。')
})
