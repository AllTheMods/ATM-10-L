// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


ServerEvents.recipes(allthemods => {

//Patric Star - Extended Craft
allthemods.custom({
  "type": "extendedcrafting:shaped_table",
  "key": {
    "A": {"item": "minecraft:magenta_concrete"},
    "B": {"item": "minecraft:pink_concrete"},
    "C": {"item": "minecraft:pink_concrete_powder"},
    "D": {"item": "minecraft:green_concrete"},
    "E": {"item": "minecraft:green_concrete_powder"},
    "F": {"item": "minecraft:lime_concrete"},
    "G": {"item": "minecraft:magenta_concrete_powder"}
  },
  "pattern": [
    "    B    ",
    "   BCA   ",
    "BBBGCABBB",
    "ACGCGGGCA",
    " AAGGGBA ",
	  "  EDDDE  ",
	  " EFEDEFE ",
	  "BEDD DDEB",
	  "AAA   AAA"
  ],
  "result": {
    "count": 1,
    "id": "allthetweaks:patrick_star"
  }
}).id("allthetweaks:allthetweaks/patrick_star")

//ATM Star - Extended Craft
allthemods.custom({
  type: "extendedcrafting:shaped_table",
    pattern: [
      '    A    ',
      '   AJA   ',
      'AAAJLJAAA',
      'AJJCDGJJA',
      ' AMBIHMA ',
      '  AKEFA  ',
      ' AJJAJJA ',
      'AJJA AJJA',
      'AAA   AAA'
    ],
    key: {
      A: {"item": 'allthemodium:unobtainium_allthemodium_alloy_block'},
      B: {"item": 'allthetweaks:nexium_emitter'},
      C: {"item": 'allthetweaks:dragon_soul'},
      D: {"item": 'allthetweaks:withers_compass'},
      E: {"item": 'allthetweaks:pulsating_black_hole'},
      F: {"item": 'allthetweaks:oblivion_shard'},
      G: {"item": 'allthetweaks:improbable_probability_device'},
      H: {"item": 'allthetweaks:dimensional_seed'},
      I: {"item": 'allthetweaks:patrick_star'},
      J: {"item": 'allthecompressed:nether_star_block_2x'},
      K: {"item": 'allthetweaks:philosophers_fuel'},
      L: {"item": 'extendedcrafting:ultimate_singularity'},
      M: {"item": 'allthemodium:unobtainium_vibranium_alloy_block'}
    },
    result: {id: 'allthetweaks:atm_star'}
}).id('allthemods:allthetweaks/extended_atm_star')

//ATM Shard Star - Extended Craft
allthemods.custom({
  "type": "extendedcrafting:shaped_table",
  "key": {
    "S": {"item": "allthetweaks:atm_star_shard"},
    "P": {"item": "allthetweaks:patrick_star"},
  },
  "pattern": [
    '    S    ',
    '   SSS   ',
    'SSSSSSSSS',
    'SSSSSSSSS',
    ' SSSPSSS ',
    '  SSSSS  ',
    ' SSSSSSS ',
    'SSSS SSSS',
    'SSS   SSS'
  ],
  "result": {"count": 1, "id": 'allthetweaks:atm_star'}
}).id('allthemods:allthetweaks/extended_atm_shard_star')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.