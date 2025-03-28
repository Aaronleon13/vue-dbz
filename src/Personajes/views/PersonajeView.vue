<template>
  <section>
    <header class="mt-8">
      <h1 class="text-center text-2xl md:text-4xl font-bold text-amber-500 capitalize">
        dragon ball z - personajes
      </h1>
    </header>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const personajes = ref([])
const links = ref([])

const fetchData = async () => {
  const response = await fetch('https://dragonball-api.com/api/characters')
  const data = await response.json()
  personajes.value = data.items
  links.value = data.links

  console.log(links.value)
  console.log(personajes.value)
}

onMounted(() => {
  fetchData()
})
</script>
