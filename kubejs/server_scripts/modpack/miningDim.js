// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

var miningDimOres = [
    {path: 'uraninite_ore',                     id:'allthemodium:uraninite_ore',                 min:65,  max:250,size:8, count:8,   stoneReplaces:"powah:uraninite_ore",                        deepslateReplaces:"powah:deepslate_uraninite_ore",                       endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'mithril_ore',                       id:'allthemodium:mithril_ore',                   min:65,  max:250,size:2, count:1,   stoneReplaces:"irons_spellbooks:mithril_ore",               deepslateReplaces:"irons_spellbooks:deepslate_mithril_ore",              endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'sulfur_ore',                        id:'allthemodium:sulfur_ore',                    min:-63, max:250,size:8, count:3,   stoneReplaces:"alltheores:sulfur_ore",                      deepslateReplaces:"alltheores:deepslate_sulfur_ore",                     endStoneReplaces:"alltheores:end_sulfur_ore",                      netherrackReplaces:"alltheores:nether_sulfur_ore"},
    {path: 'fluorite_ore',                      id:'allthemodium:fluorite_ore',                  min:-63, max:250,size:8, count:3,   stoneReplaces:"alltheores:fluorite_ore",                    deepslateReplaces:"alltheores:deepslate_fluorite_ore",                   endStoneReplaces:"alltheores:end_fluorite_ore",                    netherrackReplaces:"alltheores:nether_fluorite_ore"},
    {path: 'cinnabar_ore',                      id:'allthemodium:cinnabar_ore',                  min:-63, max:250,size:8, count:2,   stoneReplaces:"alltheores:cinnabar_ore",                    deepslateReplaces:"alltheores:deepslate_cinnabar_ore",                   endStoneReplaces:"alltheores:end_cinnabar_ore",                    netherrackReplaces:"alltheores:nether_cinnabar_ore"},
    {path: 'salt_ore',                          id:'allthemodium:salt_ore',                      min:-63, max:250,size:6, count:8,   stoneReplaces:"alltheores:salt_ore",                        deepslateReplaces:"alltheores:deepslate_salt_ore",                       endStoneReplaces:"alltheores:end_salt_ore",                        netherrackReplaces:"alltheores:nether_salt_ore"},
    {path: 'dimensionalshard',                  id:'allthemodium:dimensionalshard',              min:-63, max:250,size:12,count:2,   stoneReplaces:"rftoolsbase:dimensionalshard_overworld",     deepslateReplaces:null,                                                  endStoneReplaces:"rftoolsbase:dimensionalshard_end",               netherrackReplaces:"rftoolsbase:dimensionalshard_nether"},

]

ServerEvents.generateData('after_mods', allthemods => {
    let addMiningDimOre = (path, id, min, max, size, count, stoneReplaces, deepslateReplaces, endStoneReplaces, netherrackReplaces) => {
        
        let jsonPlaced = JsonIO.toObject({
            "feature": id,
            "placement": [
              {
                "count": count,
                "type": "minecraft:count"
              },
              {
                "type": "minecraft:in_square"
              },
              {
                "height": {
                  "min_inclusive": {
                    "absolute": min
                  },
                  "max_inclusive": {
                    "absolute": max
                  },
                  "type": "minecraft:trapezoid"
                },
                "type": "minecraft:height_range"
              },
              {
                "type": "minecraft:biome"
              }
            ]
          })
        let jsonConfigured = JsonIO.toObject({
            type: "minecraft:ore",
            config: {
              "size": size,
              "discard_chance_on_air_exposure": 0.0,
              "targets": []
            }
          })

        let jsonForge = JsonIO.toObject({
            type: "neoforge:add_features",
            biomes: "#allthemodium:mining_features/mining_biomes",
            "features": [id],
            "step": "underground_ores"
        })
        if(stoneReplaces!==null){
            jsonConfigured.config.targets.push(
              JsonIO.toObject({
                "target": {
                  "predicate_type": "minecraft:tag_match",
                  "tag": "minecraft:stone_ore_replaceables"
                },
                "state": {
                  "Name": stoneReplaces
                }
              }))
        }
        if(deepslateReplaces!==null){
          jsonConfigured.config.targets.push(
            JsonIO.toObject({
              "target": {
                "predicate_type": "minecraft:tag_match",
                "tag": "minecraft:deepslate_ore_replaceables"
              },
              "state": {
                "Name": deepslateReplaces
              }
            }))
        }
        if(endStoneReplaces!==null){
            jsonConfigured.config.targets.push(
                JsonIO.toObject({
                    "target": {
                    "predicate_type": "minecraft:block_match",
                    "block": "minecraft:end_stone"
                    },
                    "state": {
                        "Name": endStoneReplaces
                    }
                })
            )
        }
        if(netherrackReplaces!==null){
            jsonConfigured.config.targets.push(
            JsonIO.toObject({
                "target": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:netherrack"
                },
                "state": {
                    "Name": netherrackReplaces
                }
            }))
        }  
        allthemods.json(`allthemodium:worldgen/placed_feature/${path}.json`, jsonPlaced)
        allthemods.json(`allthemodium:worldgen/configured_feature/${path}.json`, jsonConfigured)
        allthemods.json(`allthemodium:neoforge/biome_modifier/allthemodium/dim_ores/${path}.json`, jsonForge)
    }
    miningDimOres.forEach(ore=>{
        addMiningDimOre(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces, ore.endStoneReplaces, ore.netherrackReplaces);
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
