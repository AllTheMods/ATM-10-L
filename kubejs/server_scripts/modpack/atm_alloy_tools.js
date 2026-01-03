// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_sword"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_sword"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_sword"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_sword"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_sword"}
}).id('allthemods:pedistal/allthemodium/alloy_sword')

allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_pickaxe"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_pickaxe"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_pickaxe"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_pickaxe"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_pick"}
}).id('allthemods:pedistal/allthemodium/alloy_pick')

allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_axe"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_axe"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_axe"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_axe"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_axe"}
}).id('allthemods:pedistal/allthemodium/alloy_axe')

allthemods.custom({
  "type": "extendedcrafting:combination",
  "power_cost": 100000,
  "input": {
    "item": "allthemodium:unobtainium_shovel"
  },
  "ingredients": [
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:allthemodium_shovel"},
    {"item": "allthemodium:allthemodium_ingot"},
    {"item": "allthemodium:vibranium_ingot"},
    {"item": "allthemodium:vibranium_shovel"},
    {"item": "allthemodium:vibranium_ingot"}, 
    {"item": "allthemodium:unobtainium_ingot"},
    {"item": "allthemodium:unobtainium_shovel"},
    {"item": "allthemodium:unobtainium_ingot"}
  ],
  "result": {"id": "allthemodium:alloy_shovel"}
}).id('allthemods:pedistal/allthemodium/alloy_shovel')

allthemods.custom({
  "type": "extendedcrafting:shaped_ender_crafter",
  "crafting_time": 240,
  "pattern": ["UOV","PNA","HSR"],
  "key": {
    "U": {"tag": "c:plates/unobtainium"},
    "O": {"item": "mekanismtools:refined_obsidian_paxel"},
    "V": {"tag": "c:plates/vibranium"},
    "P": {"item": "allthemodium:alloy_pick"},
    "N": {"item": "mekanismtools:netherite_paxel"},
    "A": {"item": "allthemodium:alloy_axe"},
    "H": {"item": "allthemodium:piglich_heart"},
    "S": {"item": "allthemodium:alloy_shovel"},
    "R": {"tag": "c:rods/allthemodium"},
  },
  "result": {"id": "allthemodium:alloy_paxel"}
}).id('allthemods:ender/allthemodium/alloy_paxel')

})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.