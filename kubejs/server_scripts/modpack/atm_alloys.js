// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function energizing(result, inputs, energy, id) {
        let recipe = {
            "type": "powah:energizing",
            "energy": energy,
            "ingredients": [],
            "result": {
                "count": result.count || 1,
                "id": result.item
            }
        };

        inputs.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.ingredients.push(ingredients);
        });

        allthemods.custom(recipe).id(`kubejs:energizing/${id}`);
    }

    //Vibranium - Allthemodium Alloy
    energizing(
        {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
        [
            {tag: 'c:ingots/allthemodium'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'powah:nitro_crystal_block'} ,
            {item: 'allthemodium:piglich_heart'},
            {tag: 'c:ingots/vibranium'}],
        1000000000,
        'vibranium_allthemodium_alloy_ingot'
    )
    energizing(
        {item: 'allthemodium:vibranium_allthemodium_alloy_block'},
        [
            {tag: 'c:storage_blocks/allthemodium'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'allthecompressed:nitro_crystal_block_1x'} ,
            {item: 'allthemodium:piglich_heart_block'},
            {tag: 'c:storage_blocks/vibranium'}],
        9000000000,
        'vibranium_allthemodium_alloy_block'
    )

    //Vibranium - Unobtainium Alloy
        energizing(
        {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
        [
            {tag: 'c:ingots/unobtainium'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'powah:nitro_crystal_block'} ,
            {item: 'allthemodium:piglich_heart'},
            {tag: 'c:ingots/vibranium'}],
        1000000000,
        'unobtainium_vibranium_alloy_ingot'
    )
    energizing(
        {item: 'allthemodium:unobtainium_vibranium_alloy_block'},
        [
            {tag: 'c:storage_blocks/unobtainium'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'allthecompressed:nitro_crystal_block_1x'} ,
            {item: 'allthemodium:piglich_heart_block'},
            {tag: 'c:storage_blocks/vibranium'}],
        9000000000,
        'unobtainium_vibranium_alloy_block'
    )
    
    //Unobtainium - Allthemodium Alloy
        energizing(
        {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
        [
            {tag: 'c:ingots/unobtainium'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'powah:nitro_crystal_block'} ,
            {item: 'allthemodium:piglich_heart'},
            {tag: 'c:ingots/allthemodium'}],
        1000000000,
        'unobtainium_allthemodium_alloy_ingot'
    )
    energizing(
        {item: 'allthemodium:unobtainium_allthemodium_alloy_block'},
        [
            {tag: 'c:storage_blocks/unobtainium'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'allthecompressed:nitro_crystal_block_1x'} ,
            {item: 'allthemodium:piglich_heart_block'},
            {tag: 'c:storage_blocks/allthemodium'}],
        9000000000,
        'unobtainium_allthemodium_alloy_block'
    )

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.