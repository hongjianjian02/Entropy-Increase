// 奥术工作台(arcane_workbench)配方魔改

ServerEvents.recipes(event => {
  // 符文矩阵配方修改
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
  }).id('thaumaturge:arcane_workbench/infusion_matrix')

  // 注魔效能石
  event.custom({
     type: "thaumaturge:arcane_workbench_shaped",
     crystals: [
    { aspect: "thaumaturge:aer" },
    { aspect: "thaumaturge:aqua" },
    { aspect: "thaumaturge:perditio" }
  ],
  key: {
    N: { item: "thaumaturge:stone_arcane" },
    B: { item: "minecraft:diamond_block" },
    S: { item: "thaumaturge:mechanism_complex" },
    A: { item: "thaumaturge:alumentum" }
  },
  pattern: ["NBN","ASA","NAN"],
  research: { "entry": "thaumaturge:infusion", "stage": 2 },
  result: { "count": 1, "id": "thaumaturge:matrix_cost" },
  vis: 500
  }).id("thaumaturge:arcane_workbench/matrix_cost")

  // 注魔加速石
  event.custom({
    type: "thaumaturge:arcane_workbench_shaped",
  crystals: [
    { aspect: "thaumaturge:aer" },
    { aspect: "thaumaturge:ordo" }
  ],
  key: {
    N: { item: "thaumaturge:stone_arcane" },
    B: { item: "minecraft:diamond_block" },
    S: { item: "thaumaturge:mechanism_complex" },
    A: { item: "thaumaturge:nitor_yellow" }
  },
  pattern: ["NBN","ASA","NAN"],
  research: { entry: "thaumaturge:infusion", "stage": 2 },
  result: { "count": 1, "id": "thaumaturge:matrix_speed" },
  vis: 500
}).id("thaumaturge:arcane_workbench/matrix_speed")

})