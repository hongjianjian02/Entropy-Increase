ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:processing/iron/enriched_dust' })
    event.remove({ id: 'mekanism:processing/iron/enriched' })
})