// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
let Oreberry = ['iron', 'gold','copper','tin','aluminum','lead','nickel','uranium','osmium','zinc','silver']
// Add Pylon support, with higher rate than hand
Oreberry.forEach(Oreberry =>
allthemods.custom({
    "type": "pylons:harvesting",
    "block": `oreberriesreplanted:${Oreberry}_oreberry_bush`,
    "output": {
        "count": (4),//TODO get range working
        "id": `oreberriesreplanted:${Oreberry}_oreberry`
    }
}))
allthemods.custom({
    "type": "pylons:harvesting",
    "block": "oreberriesreplanted:essence_berry_bush",
    "output": {
        "count": 6,
        "id": "oreberriesreplanted:essence_berry"
    }
})

// Berry Bush recipes
Oreberry.forEach(Oreberry =>
allthemods.shaped(
    `2x oreberriesreplanted:${Oreberry}_oreberry_bush`,
    ['ISI','SBS','ISI'],
    { I: `#c:ingots/${Oreberry}`, S: '#minecraft:saplings', B:'minecraft:rose_bush'}
))
allthemods.shaped(
    '2x oreberriesreplanted:essence_berry_bush',
    ['ISI','SBS','ISI'],
    { I: 'minecraft:experience_bottle', S: '#minecraft:saplings', B:'minecraft:rose_bush'}
)
//remove and buff smelting and blasting recipes
Oreberry.forEach(Oreberry => allthemods.remove({id: `oreberriesreplanted:${Oreberry}_from_smelting`}))
Oreberry.forEach(Oreberry => allthemods.remove({id: `oreberriesreplanted:${Oreberry}_from_blasting`}))

let OreberryMC =['iron', 'gold']
let OreberryATO = ['copper','tin','aluminum','lead','nickel','uranium','osmium','zinc','silver']
OreberryMC.forEach(OreberryMC => allthemods.smelting(`3x minecraft:${OreberryMC}_nugget`, `oreberriesreplanted:${OreberryMC}_oreberry`))
OreberryATO.forEach(OreberryATO => allthemods.smelting(`3x alltheores:${OreberryATO}_nugget`, `oreberriesreplanted:${OreberryATO}_oreberry`))
OreberryMC.forEach(OreberryMC => allthemods.blasting(`3x minecraft:${OreberryMC}_nugget`, `oreberriesreplanted:${OreberryMC}_oreberry`))
OreberryATO.forEach(OreberryATO => allthemods.blasting(`3x alltheores:${OreberryATO}_nugget`, `oreberriesreplanted:${OreberryATO}_oreberry`))

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.