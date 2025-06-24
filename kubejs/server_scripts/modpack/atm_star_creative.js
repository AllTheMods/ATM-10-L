// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {


    //AE2

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ae2:creative_energy_cell'
                }
            }
        ).id('allthemods:energizing/ae2_creative_energy_cell')


    //Iron Jetpacks

        allthemods.recipes.kubejs.shaped('ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                ' A ',
                'BCB',
                ' A ' 
            ],
            {
                A: '#c:storage_blocks/redstone',
                B: 'allthemodium:unobtainium_block',
                C: 'powah:battery_nitro' 
            }
        ).id('allthemods:ironjetpacks_creative_cell')

        allthemods.recipes.kubejs.shaped('ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ABA',
                'BCB',
                'ADA' 
            ],
            {
                A: 'allthemodium:unobtainium_block',
                B: 'powah:nitro_crystal_block',
                C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                D: 'ironfurnaces:unobtainium_furnace' 
            }
        ).id('allthemods:ironjetpacks_creative_thruster')

        allthemods.recipes.kubejs.shaped('ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ACA',
                'BDB',
                'AEA'
            ],
            {
                A: 'allthemodium:unobtainium_block',
                B: 'mekanism:sps_casing',
                C: 'powah:reactor_nitro',
                D: 'mekanism:ultimate_induction_cell',
                E: 'powah:reactor_nitro'
            }
        ).id('allthemods:ironjetpacks_creative_capacator')            
            
        allthemods.recipes.kubejs.shaped('ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ACA',
                'BFB',
                'DED'
            ],
            {
                A: 'minecraft:bedrock',
                B: 'allthemodium:vibranium_allthemodium_alloy_block',
                C: 'ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                D: 'ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                E: 'allthetweaks:atm_star',
                F: 'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:unobtainium"]'
            }
        ).id('allthemods:ironjetpacks_creative_jetpack')

    //Mekanism

        allthemods.recipes.kubejs.shaped('mekanism:creative_chemical_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_chemical_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_chemical_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_fluid_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_fluid_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_fluid_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_energy_cube',
            [
                'ATA', 
                'UCU', 
                'ATA'
            ],
            {
                A: 'mekanism:alloy_atomic',
                T: 'mekanism:energy_tablet',
                U: 'allthemodium:unobtainium_block',
                C: 'mekanism:ultimate_energy_cube'
            }
        ).id('allthemods:mekanism/creative_energy_cube')

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson()
                ],
                result: 
                    Item.of(
                        "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]"
                    ).toJson()
            }
        ).id('allthemods:energizing/mekanism_creative_energy_cube')
    
    //Powah

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson()
                ],
                result: Item.of('powah:energy_cell_creative').toJson()
            }
        ).id('allthemods:energizing/powah_creative_energy_cell')

    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
