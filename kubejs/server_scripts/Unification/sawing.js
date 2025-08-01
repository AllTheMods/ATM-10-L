// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {

    //allthemodium
    allthemods.add('allthemodium:ancient_logs', [
        'allthemodium:ancient_log_0',
        'allthemodium:ancient_log_1',
        'allthemodium:ancient_log_2',
        'allthemodium:stripped_ancient_log'
    ])
    allthemods.add('allthemodium:soul_logs', [
        'allthemodium:soul_log',
        'allthemodium:soul_log_0',
        'allthemodium:soul_log_1',
        'allthemodium:soul_log_2',
        'allthemodium:stripped_soul_log'
    ])
    allthemods.add('allthemodium:demonic_logs', [
        'allthemodium:demonic_log',
        'allthemodium:stripped_demonic_log',
    ])
    // completing #minecraft:logs
    allthemods.add('minecraft:logs', ["allthemodium:stripped_ancient_log"])
})

const $Collectors = Java.loadClass('java.util.stream.Collectors')

ServerEvents.recipes(allthemods => {
    let logsTag = Ingredient.of("#minecraft:logs")

    /** @type {$HashMap_<string, $UnknownKubeRecipe_>}} */
    let mekSawmillRecipes = allthemods.findRecipes({type: "mekanism:sawing"}).stream().filter(r => r.json.asMap().main_output != undefined && logsTag["matches(net.minecraft.world.item.crafting.Ingredient,boolean)"](Ingredient.of(r.json.asMap().input.has("ingredient") ? r.json.asMap().input.get("ingredient") : r.json.asMap().input), false)).collect($Collectors.toMap(r => r.json.asMap().main_output.get("id").asString, r => r))
    
    function mekSawing(output, input, extraOutput, id) {
        if (mekSawmillRecipes.containsKey(output.id)) {
            // console.info("Already exists a mek recipe for " + output.id)
            return
        }
        let recipe = {
            "type": "mekanism:sawing",
            "input": input,
            "main_output": output,
            "secondary_chance": extraOutput.chance,
            "secondary_output": Item.of(extraOutput.item)
        };

        allthemods.custom(recipe).id(`allthemods:mekanism/sawing/${id}`);
    }


    allthemods.forEachRecipe({type: "minecraft:crafting_shapeless", output: "#minecraft:planks"}, recipe => {
        /** @type {$Ingredient_} */
        let firstIngredient = recipe.get("ingredients").getFirst()
        /** @type {$ItemStackKJS_} */
        let output = recipe.get("result")
        if (!logsTag["matches(net.minecraft.world.item.crafting.Ingredient,boolean)"](firstIngredient, false)){
            console.info("Ingredient is not a log tag: " + Ingredient.of(firstIngredient).toJson())
            return
        }
        
        mekSawing(output.withCount(6), firstIngredient, {chance: 0.25, item: "mekanism:sawdust"}, recipe.getId().split(":")[0] + "/" + recipe.getId().split(":")[1])
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

