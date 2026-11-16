// 屏蔽未安装的蜜蜂联动；缺失机器物品使用静态空掉落表，注册后恢复模组原表。
// 原始掉落里的机器组件、爆炸条件及随机序列均保留。
ServerEvents.generateData('last', event => {
  if (!Platform.isLoaded('productivebees')) {
    var eiOptionalBeeRecipes = [
  "productivebees:recipe/bee_produce/enderio_evolution/construction_alloy",
  "productivebees:recipe/bee_produce/enderio_evolution/crude_steel",
  "productivebees:recipe/bee_produce/enderio_evolution/crystalline_alloy",
  "productivebees:recipe/bee_produce/enderio_evolution/crystalline_pink_slime",
  "productivebees:recipe/bee_produce/enderio_evolution/energetic_silver",
  "productivebees:recipe/bee_produce/enderio_evolution/melodic_alloy",
  "productivebees:recipe/bee_produce/enderio_evolution/stellar_alloy",
  "productivebees:recipe/bee_produce/enderio_evolution/vivid_alloy",
  "productivebees:recipe/centrifuge/enderio_evolution/construction_alloy",
  "productivebees:recipe/centrifuge/enderio_evolution/crude_steel",
  "productivebees:recipe/centrifuge/enderio_evolution/crystalline_alloy",
  "productivebees:recipe/centrifuge/enderio_evolution/crystalline_pink_slime",
  "productivebees:recipe/centrifuge/enderio_evolution/energetic_silver",
  "productivebees:recipe/centrifuge/enderio_evolution/melodic_alloy",
  "productivebees:recipe/centrifuge/enderio_evolution/stellar_alloy",
  "productivebees:recipe/centrifuge/enderio_evolution/vivid_alloy"
]
    eiOptionalBeeRecipes.forEach(resource => {
      event.json(resource, { 'neoforge:conditions': [{ type: 'neoforge:false' }] })
    })
  }

  var eiOptionalMachineLoot = [
  {
    "resource": "mekanism_extras:loot_table/blocks/absolute_chemical_infusing_factory",
    "item": "mekanism_extras:absolute_chemical_infusing_factory",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "entries": [
            {
              "type": "minecraft:item",
              "functions": [
                {
                  "function": "minecraft:copy_name",
                  "source": "block_entity"
                },
                {
                  "function": "minecraft:copy_components",
                  "include": [
                    "mekanism:ejector",
                    "mekanism:owner",
                    "mekanism:redstone_control",
                    "mekanism:security",
                    "mekanism:side_config",
                    "mekanism:sorting",
                    "mekanism:upgrades",
                    "mekanism:energy",
                    "mekanism:items",
                    "mekanism:chemicals"
                  ],
                  "source": "block_entity"
                }
              ],
              "name": "mekanism_extras:absolute_chemical_infusing_factory"
            }
          ],
          "name": "main",
          "rolls": 1.0
        }
      ],
      "random_sequence": "mekanism_extras:blocks/absolute_chemical_infusing_factory"
    }
  },
  {
    "resource": "mekanism_extras:loot_table/blocks/cosmic_chemical_infusing_factory",
    "item": "mekanism_extras:cosmic_chemical_infusing_factory",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "entries": [
            {
              "type": "minecraft:item",
              "functions": [
                {
                  "function": "minecraft:copy_name",
                  "source": "block_entity"
                },
                {
                  "function": "minecraft:copy_components",
                  "include": [
                    "mekanism:ejector",
                    "mekanism:owner",
                    "mekanism:redstone_control",
                    "mekanism:security",
                    "mekanism:side_config",
                    "mekanism:sorting",
                    "mekanism:upgrades",
                    "mekanism:energy",
                    "mekanism:items",
                    "mekanism:chemicals"
                  ],
                  "source": "block_entity"
                }
              ],
              "name": "mekanism_extras:cosmic_chemical_infusing_factory"
            }
          ],
          "name": "main",
          "rolls": 1.0
        }
      ],
      "random_sequence": "mekanism_extras:blocks/cosmic_chemical_infusing_factory"
    }
  },
  {
    "resource": "mekanism_extras:loot_table/blocks/infinite_chemical_infusing_factory",
    "item": "mekanism_extras:infinite_chemical_infusing_factory",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "entries": [
            {
              "type": "minecraft:item",
              "functions": [
                {
                  "function": "minecraft:copy_name",
                  "source": "block_entity"
                },
                {
                  "function": "minecraft:copy_components",
                  "include": [
                    "mekanism:ejector",
                    "mekanism:owner",
                    "mekanism:redstone_control",
                    "mekanism:security",
                    "mekanism:side_config",
                    "mekanism:sorting",
                    "mekanism:upgrades",
                    "mekanism:energy",
                    "mekanism:items",
                    "mekanism:chemicals"
                  ],
                  "source": "block_entity"
                }
              ],
              "name": "mekanism_extras:infinite_chemical_infusing_factory"
            }
          ],
          "name": "main",
          "rolls": 1.0
        }
      ],
      "random_sequence": "mekanism_extras:blocks/infinite_chemical_infusing_factory"
    }
  },
  {
    "resource": "mekanism_extras:loot_table/blocks/supreme_chemical_infusing_factory",
    "item": "mekanism_extras:supreme_chemical_infusing_factory",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "entries": [
            {
              "type": "minecraft:item",
              "functions": [
                {
                  "function": "minecraft:copy_name",
                  "source": "block_entity"
                },
                {
                  "function": "minecraft:copy_components",
                  "include": [
                    "mekanism:ejector",
                    "mekanism:owner",
                    "mekanism:redstone_control",
                    "mekanism:security",
                    "mekanism:side_config",
                    "mekanism:sorting",
                    "mekanism:upgrades",
                    "mekanism:energy",
                    "mekanism:items",
                    "mekanism:chemicals"
                  ],
                  "source": "block_entity"
                }
              ],
              "name": "mekanism_extras:supreme_chemical_infusing_factory"
            }
          ],
          "name": "main",
          "rolls": 1.0
        }
      ],
      "random_sequence": "mekanism_extras:blocks/supreme_chemical_infusing_factory"
    }
  },
  {
    "resource": "nuclearcraftneohaul:loot_table/blocks/create_turbine_rotor_bearing",
    "item": "nuclearcraftneohaul:create_turbine_rotor_bearing",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "conditions": [
            {
              "condition": "minecraft:survives_explosion"
            }
          ],
          "entries": [
            {
              "type": "minecraft:item",
              "name": "nuclearcraftneohaul:create_turbine_rotor_bearing"
            }
          ],
          "rolls": 1.0
        }
      ],
      "random_sequence": "nuclearcraftneohaul:blocks/create_turbine_rotor_bearing"
    }
  },
  {
    "resource": "sfm:loot_table/blocks/buffer",
    "item": "sfm:buffer",
    "data": {
      "type": "minecraft:block",
      "pools": [
        {
          "bonus_rolls": 0.0,
          "conditions": [
            {
              "condition": "minecraft:survives_explosion"
            }
          ],
          "entries": [
            {
              "type": "minecraft:item",
              "name": "sfm:buffer"
            }
          ],
          "rolls": 1.0
        }
      ],
      "random_sequence": "sfm:blocks/buffer"
    }
  }
]
  eiOptionalMachineLoot.forEach(definition => {
    if (Item.exists(definition.item)) event.json(definition.resource, definition.data)
  })
})
