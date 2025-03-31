<template>
  <section>
    <header class="mt-8">
      <h1
        class="text-center text-2xl md:text-4xl font-bold text-amber-500 capitalize font-dbz tracking-wider"
      >
        dragon ball z - personajes
      </h1>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-1 max-w-4xl mx-auto mt-12">
        <div
          class="flex flex-col items-center justify-center"
          v-for="personaje in personajes"
          :key="personaje.id"
        >
          <h2 class="text-xl font-bold text-gray-800 font-dbz tracking-wider">
            {{ personaje.name }}
          </h2>
          <div class="flex flex-col items-center justify-center">
            <img
              :src="personaje.image"
              :alt="personaje.name"
              class="size-80 object-contain mb-4 drop-shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer hover:skew-30 hover:rotate-3"
            />
          </div>
        </div>
      </div>
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
