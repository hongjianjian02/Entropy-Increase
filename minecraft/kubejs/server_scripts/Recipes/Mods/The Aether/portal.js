// 天镜传送门：改用世界盐（thaumaturge:salis_mundus）激活
BlockEvents.rightClicked(event => {
  if (String(event.item.id) != 'thaumaturge:salis_mundus') return

  const Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  const clicked = event.block
  const clickedId = String(Registries.BLOCK.getKey(clicked.getBlockState().getBlock()))
  if (clickedId != 'minecraft:glowstone') return

  const level = clicked.getLevel()
  const pos = clicked.getPos()
  const Shape = Java.loadClass('com.aetherteam.aether.block.portal.AetherPortalShape')
  const Axis = Java.loadClass('net.minecraft.core.Direction$Axis')

  for (var dx = -2; dx <= 2; dx++) {
    for (var dy = -2; dy <= 2; dy++) {
      for (var dz = -2; dz <= 2; dz++) {
        var p = pos.offset(dx, dy, dz)
        for (var ai = 0; ai < 2; ai++) {
          var axis = (ai == 0) ? Axis.X : Axis.Z
          try {
            var opt = Shape.findEmptyAetherPortalShape(level, p, axis)
            if (opt == null || !opt.isPresent()) continue

            opt.get().createPortalBlocks()
            event.item.shrink()
            event.entity.tell
            return
          } catch (err) {
            console.error('[aether-portal] ' + err)
          }
        }
      }
    }
  }
})
