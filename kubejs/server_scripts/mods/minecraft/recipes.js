// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'minecraft:cake'})

    allthemods.shaped(
        Item.of('minecraft:sculk', 1), // arg 1: output
        [
            'OOO',
            'OOO',
            'OOO'
        ],
        {
            O: 'minecraft:echo_shard',
        }
    )

    allthemods.shaped(
        Item.of('minecraft:sculk_sensor', 1), // arg 1: output
        [
            '   ',
            'VCV',
            'SSS'
        ],
        {
            V: 'minecraft:twisting_vines',
            C: 'minecraft:comparator',
            S: 'minecraft:sculk',
        }
    )


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
