// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
// Dragon Soul
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": 'apothic_enchanting:infused_breath'},
    {"item": 'occultism:soul_gem'},
    {"item": 'occultism:spawn_egg/familiar_dragon'},
    {"item": 'minecraft:bedrock'},
    {"item": ['hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1255]', 'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1254]']},    {"item": 'allthemodium:piglich_heart_block'},
    {"item": 'minecraft:bedrock'},
	  {"item": 'minecraft:bedrock'},
    {"item": 'minecraft:bedrock'}
  ],
  "result": {"id": "allthetweaks:dimensional_seed"}
}).id('allthemods:pedistal/allthetweaks/dimensional_seed')

// Improbable Probability Device/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": 'irons_spellbooks:lightning_upgrade_orb'},
    {"item": 'ironfurnaces:million_furnace'},
    {"item": 'minecraft:bedrock'},
    {"item": 'megacells:portable_item_cell_256m'},
    {"item": 'ae2:singularity'},
    {"item": 'mekanism:pellet_antimatter'},
  ],
  "result": {"id": "allthetweaks:improbable_probability_device"}
}).id('allthemods:pedistal/allthetweaks/improbable_probability_device')

// Dimensional Seed/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": 'allthecompressed:netherrack_3x'},
    {"item": 'allthecompressed:dirt_3x'},
    {"item": 'allthecompressed:obsidian_3x'},
    {"item": 'allthetweaks:mini_exit'},
    {"item": 'allthetweaks:mini_nether'},
    {"item": 'allthetweaks:mini_end'},
    {"item": 'allthecompressed:end_stone_3x'},
    {"item": 'allthecompressed:emerald_block_3x'},
    {"item": 'allthecompressed:diamond_block_3x'}
  ],
  "result": {"id": "allthetweaks:dimensional_seed"}
}).id('allthemods:pedistal/allthetweaks/dimensional_seed')

// Withers Compass
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": "minecraft:bedrock"},
    {"item": 'irons_spellbooks:scroll[irons_spellbooks:spell_container={data:[{id:"irons_spellbooks:wither_skull",index:0,level:10,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:0b}]'},
    {"item": 'minecraft:tipped_arrow[potion_contents={potion:"apothic_attributes:long_wither"}]'},
    {"item": "industrialforegoing:wither_builder"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"}
  ],
  "result": {"id": "allthetweaks:withers_compass"}
}).id('allthemods:pedistal/allthetweaks/withers_compass')

// Philosopher's Fuel/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": "ironfurnaces:rainbow_coal"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"}
  ],
  "result": {"id": "allthetweaks:philosophers_fuel"}
}).id('allthemods:pedistal/allthetweaks/philosophers_fuel')

// Nexium Emitter/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": "powah:player_transmitter_nitro"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "ae2wtlib:wireless_universal_terminal"},
    {"item": "mekanism:module_gravitational_modulating_unit"},
    {"item": "aeinfinitybooster:infinity_card"}
  ],
  "result": {"id": "allthetweaks:nexium_emitter"}
}).id('allthemods:pedestal/allthetweaks/nexium_emitter')

// Oblivion Shard/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"}
  ],
  "result": {"id": "allthetweaks:oblivion_shard"}
}).id('allthemods:pedestal/allthetweaks/oblivion_shard')

// Pulsating Black Hole/
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 400000,
  "input": {
    "item": "extendedcrafting:ultimate_singularity"
  },
  "ingredients": [
    {"item": "irons_spellbooks:fire_upgrade_orb"},
    {"item": "ae2:quantum_ring"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "minecraft:bedrock"},
    {"item": "occultism:stable_wormhole"},
    {"item": "minecraft:bedrock"},
    {"item": "industrialforegoing:mycelial_explosive"},
    {"item": "minecraft:bedrock"}
  ],
  "result": {"id": "allthetweaks:pulsating_black_hole"}
}).id('allthemods:pedestal/allthetweaks/pulsating_black_hole')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.