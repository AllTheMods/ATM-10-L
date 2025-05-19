// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Tools
    allthemods.remove({ id: 'mekanismtools:steel/tools/sword'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/pickaxe'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/axe'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/shovel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/hoe'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/paxel'})

    allthemods.shaped('mekanismtools:steel_sword', [' S ', ' S ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_sword')
    allthemods.shaped('mekanismtools:steel_pickaxe', ['SSS', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_pickaxe')
    allthemods.shaped('mekanismtools:steel_axe', ['SS ', 'SR ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_axe')
    allthemods.shaped('mekanismtools:steel_shovel', [' S ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_shovel')
    allthemods.shaped('mekanismtools:steel_hoe', ['SS ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_hoe')
    allthemods.shaped('mekanismtools:steel_paxel', ['APS', ' R ', ' R '], {
        A: 'mekanismtools:steel_axe',
        P: 'mekanismtools:steel_pickaxe',
        S: 'mekanismtools:steel_shovel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_paxel')

    // Armor


    // Shields

})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.