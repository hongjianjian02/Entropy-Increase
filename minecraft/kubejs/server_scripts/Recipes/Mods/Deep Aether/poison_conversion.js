ServerEvents.recipes(event => {
  event.custom({
    type: 'deep_aether:poison_recipe',
    ingredient: { item: 'aether:cold_aercloud' },
    result: { id: 'deep_aether:sterling_aercloud', count: 1 }
  }).id('deep_aether:sterling_aercloud_from_poison')
})
