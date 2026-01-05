// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

RecipeViewerEvents.removeEntriesCompletely('item', allthemods =>{
  allthemods.remove('allthetweaks:greg_star')
  allthemods.remove('allthetweaks:greg_star_block')
  allthemods.remove('sophisticatedstorage:stack_upgrade_omega_tier')
  allthemods.remove('sophisticatedbackpacks:stack_upgrade_omega_tier')
  
  for(let i=1; i < 10; i++){
      allthemods.remove(`allthecompressed:greg_star_block_${i}x`)}
  
  allthemods.remove('relics:researching_table')

  let unusedGeOres = ['monazite','tungsten','black_quartz','topaz']
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:${unusedGeOres}_shard`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:${unusedGeOres}_spyglass`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:budding_${unusedGeOres}`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:large_${unusedGeOres}_bud`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:medium_${unusedGeOres}_bud`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:small_${unusedGeOres}_bud`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:${unusedGeOres}_cluster`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:${unusedGeOres}_block`))
    unusedGeOres.forEach(unusedGeOres => allthemods.remove(`geore:${unusedGeOres}_tinted_glass`))


  allthemods.remove([
    'advanced_ae:quantum_unit','advanced_ae:quantum_core',
    'advanced_ae:quantum_storage_128','advanced_ae:quantum_storage_256',
    'advanced_ae:data_entangler','advanced_ae:quantum_accelerator',
    'advanced_ae:quantum_multi_threader','advanced_ae:quantum_structure'])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10 LITE.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.