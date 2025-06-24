// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  // Waystones
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

})

ServerEvents.tags('item', allthemods => {
  // Tiny Coal
  allthemods.add('atm10:tiny_coals', ['utilitarian:tiny_coal'])
  allthemods.add('atm10:tiny_charcoals', ['utilitarian:tiny_charcoal'])
  // Allthemodium Alloy Dusts
  allthemods.add('c:dusts/unobtainium_allthemodium_alloy', 'allthemodium:unobtainium_allthemodium_alloy_dust')
  allthemods.add('c:dusts/unobtainium_vibranium_alloy', 'allthemodium:unobtainium_vibranium_alloy_dust')
  allthemods.add('c:dusts/vibranium_allthemodium_alloy', 'allthemodium:vibranium_allthemodium_alloy_dust')
  allthemods.add('c:dusts', [
    '#c:dusts/unobtainium_allthemodium_alloy',
    '#c:dusts/unobtainium_vibranium_alloy',
    '#c:dusts/vibranium_allthemodium_alloy',
  ])
  //ATO
  allthemods.add('c:dusts', 'alltheores:netherite_dust')
  allthemods.add('c:dusts/netherite', 'alltheores:netherite_dust')
  allthemods.add('c:storage_blocks/sulfur', 'alltheores:sulfur_block')
  //MEGA cells
  allthemods.add('megacells:compression_overrides', 'minecraft:string')
  allthemods.add('megacells:compression_overrides', 'minecraft:honeycomb')
  //Powah
  allthemods.add('c:storage_blocks/blaze_rod', 'allthecompressed:blaze_rod_block')
  //Potionsmaster
  global.potions_server.forEach(potion => {
    allthemods.add(`potionsmaster:calcinated/${potion.id}`, `potionsmaster:calcinated_${potion.id}_oresight_powder`)
  })

})

ServerEvents.tags('entity_type', allthemods => {
  // Allthemodium
  allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

  // Occultism
  allthemods.add('justdirethings:paradox_deny', /occultism:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /occultism:/)

  //Industrial Foregoing
  allthemods.add('industrialforegoing:mob_crusher_blacklist', [
    "minecraft:warden",
    "minecraft:elder_guardian",
    "minecraft:ender_dragon",
    "minecraft:wither",
    "artifacts:mimic",
    "allthemodium:piglich"
  ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
