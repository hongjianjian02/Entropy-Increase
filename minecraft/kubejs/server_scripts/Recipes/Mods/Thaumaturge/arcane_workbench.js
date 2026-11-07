// 奥术工作台(arcane_workbench)配方魔改

ServerEvents.recipes(event => {
  // 符文矩阵配方修改
  event.remove({ id: 'thaumaturge:infusion_matrix' }) // 移除原版配方
  event.custom({
    type: 'thaumaturge:arcane_workbench_shaped',
    crystals: [
      { aspect: 'thaumaturge:aer' },
      { aspect: 'thaumaturge:ignis' },
      { aspect: 'thaumaturge:terra' },
      { aspect: 'thaumaturge:aqua' },
      { aspect: 'thaumaturge:ordo' },
      { aspect: 'thaumaturge:perditio' }
    ],
    key: {
      N: { item: 'thaumaturge:stone_arcane_brick' },
      S: { item: 'thaumaturge:plate_thaumium' },
      A: { item: 'thaumaturge:alumentum' }
    },
    pattern: ['NSN', 'SAS', 'NSN'],
    research: { entry: 'thaumaturge:infusion', stage: 1 },  //想要取消研究锁就注释这一行
    result: { id: 'thaumaturge:infusion_matrix', count: 1 },
    vis: 150
  })
})