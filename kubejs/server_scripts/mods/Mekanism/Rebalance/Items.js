// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    //Upgrades
    allthemods.replaceInput(
        { output: ['mekanism:upgrade_speed', 'mekanism:upgrade_energy', 'mekanism:upgrade_filter', 'mekanism:upgrade_chemical', 'mekanism:upgrade_stone_generator' ] }, // Arg 1: the filter
        '#c:glass_blocks/cheap',
        'mekanism:structural_glass'
    )

    //polonium
    allthemods.remove('mekanism:processing/lategame/polonium')
    allthemods.custom(
        {
            type: "mekanism:activating",
            input: {
                amount: 5,
                chemical: "mekanism:nuclear_waste"
            },
            output: {
                amount: 1,
                id: "mekanism:polonium"
            }
        }
    ).id('mekanism:processing/lategame/polonium')
    //plutonium
    allthemods.remove('mekanism:processing/lategame/plutonium')
    allthemods.custom(
        {
            type: "mekanism:centrifuging",
            input: {
                amount: 5,
                chemical: "mekanism:nuclear_waste"
            },
            output: {
                amount: 1,
                id: "mekanism:plutonium"
            }
        }
    ).id('mekanism:processing/lategame/plutonium')

    //Thermal Evaporation Blocks
    allthemods.remove('mekanism:thermal_evaporation/block')
    allthemods.shaped('8x mekanism:thermal_evaporation_block', ['BSB', 'SMS', 'BSB'], {
        B: '#c:ingots/bronze',
        S: '#c:ingots/steel',
        M: 'mekanism:superheating_element'
    })

    //Solar Neutron Activator
    allthemods.remove('mekanism:solar_neutron_activator')
    allthemods.shaped('mekanism:solar_neutron_activator', ['APA', 'CSC', 'BBB'], {
        A: 'mekanism:alloy_atomic',
        P: 'mekanismgenerators:advanced_solar_generator',
        C: 'mekanism:elite_control_circuit',
        S: 'mekanism:steel_casing',
        B: '#c:ingots/bronze'
    })

    //Electric Pump
    allthemods.remove('mekanism:electric_pump')
    allthemods.shaped('mekanism:electric_pump', ['CBC', 'ASA', 'OTO'], {
        B: '#c:buckets/empty',
        C: 'mekanism:advanced_control_circuit',
        A: 'mekanism:alloy_reinforced',
        S: 'mekanism:steel_casing',
        O: '#c:ingots/osmium',
        T: 'mekanism:energy_tablet'
    })

    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.