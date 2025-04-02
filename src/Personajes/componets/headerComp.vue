<template>
  <header class="mt-8">
    <h1
      class="text-center text-2xl md:text-4xl font-bold text-amber-600 capitalize font-dbz tracking-wider"
    >
      {{ title }}
    </h1>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Dragon Ball Z - Personajes',
  },
})
</script>
