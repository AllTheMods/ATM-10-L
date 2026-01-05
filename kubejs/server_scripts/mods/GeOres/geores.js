// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods =>{
let GeOreI = ['gold','lead','copper','iron','zinc','aluminum','nickel','osmium','platinum','silver','tin','uranium','allthemodium','vibranium','unobtainium'] //ingots
let GeOreG = ['diamond','emerald','lapis', 'quartz','ruby','sapphire'] //gems
//let GeOreO = ['coal', 'redstone','ancient_debris/netherite','uraninite'] //others
GeOreI.forEach(GeOreI =>
    allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"tag": `c:dusts/${GeOreI}`},
        {"tag": `c:ingots/${GeOreI}`},
        {"tag": `c:dusts/${GeOreI}`},
        {"tag": `c:ingots/${GeOreI}`},
        {"tag": `c:dusts/${GeOreI}`},
        {"tag": `c:ingots/${GeOreI}`},
        {"tag": `c:dusts/${GeOreI}`},
        {"tag": `c:ingots/${GeOreI}`},
    ],
    "result": {"id": `geore:budding_${GeOreI}`}
    }).id(`geore:pedistal/budding_${GeOreI}`)
)

GeOreG.forEach(GeOreG =>
    allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"tag": `c:dusts/${GeOreG}`},
        {"tag": `c:gems/${GeOreG}`},
        {"tag": `c:dusts/${GeOreG}`},
        {"tag": `c:gems/${GeOreG}`},
        {"tag": `c:dusts/${GeOreG}`},
        {"tag": `c:gems/${GeOreG}`},
        {"tag": `c:dusts/${GeOreG}`},
        {"tag": `c:gems/${GeOreG}`},
    ],
    "result": {"id": `geore:budding_${GeOreG}`}
    }).id(`geore:pedistal/budding_${GeOreG}`)
)

//extras  'coal','redstone','ancient_debris/netherite','uraninite'
//coal
allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
        {"item": 'minecraft:coal_block'},
    ],
    "result": {"id": 'geore:budding_coal'}
}).id('geore:pedistal/budding_coal')
//redstone
allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"item": 'minecraft:redstone'},
        {"item": 'minecraft:redstone_block'},
        {"item": 'minecraft:redstone'},
        {"item": 'minecraft:redstone_block'},
        {"item": 'minecraft:redstone'},
        {"item": 'minecraft:redstone_block'},
        {"item": 'minecraft:redstone'},
        {"item": 'minecraft:redstone_block'},
    ],
    "result": {"id": 'geore:budding_redstone'}
}).id('geore:pedistal/budding_redstone')
//ancient_debris/netherite
allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"tag": `c:dusts/netherite`},
        {"tag": `c:ingots/netherite`},
        {"tag": `c:dusts/netherite`},
        {"tag": `c:ingots/netherite`},
        {"tag": `c:dusts/netherite`},
        {"tag": `c:ingots/netherite`},
        {"tag": `c:dusts/netherite`},
        {"tag": `c:ingots/netherite`},
    ],
    "result": {"id": 'geore:budding_ancient_debris'}
}).id('geore:pedistal/budding_ancient_debris')
//uraninite
allthemods.custom({
    "type": "extendedcrafting:combination",
    "power_cost": 50000,
    "input": {
        "item": 'minecraft:budding_amethyst'
    },
    "ingredients": [
        {"item": 'powah:uraninite'},
        {"item": 'powah:uraninite_block'},
        {"item": 'powah:uraninite'},
        {"item": 'powah:uraninite_block'},
        {"item": 'powah:uraninite'},
        {"item": 'powah:uraninite_block'},
        {"item": 'powah:uraninite'},
        {"item": 'powah:uraninite_block'},
    ],
    "result": {"id": 'geore:budding_uraninite'}
}).id('geore:pedistal/budding_uraninite')


})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.