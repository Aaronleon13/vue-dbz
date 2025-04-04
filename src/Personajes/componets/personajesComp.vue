<template>
  <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-1 max-w-4xl mx-auto mt-12 gap-10">
    <div
      class="flex flex-col items-center justify-center rounded-lg bg-gradient-to-b from-amber-300 to-amber-600 p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      v-for="personaje in personajes"
      :key="personaje.id"
    >
      <h2 class="text-4xl font-bold text-amber-600 font-dbz tracking-widest">
        {{ personaje.name }}
      </h2>
      <div class="flex flex-col items-center justify-center">
        <img
          @click="sendInfoView(personaje.id)"
          :src="personaje.image"
          :alt="personaje.name"
          class="size-80 object-contain mb-4 hover:drop-shadow-3xl hover:scale-125 transition-all duration-300 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sendInfoView = (id) => {
  router.push({ name: 'informacion', params: { id: id } })
}

const personajes = ref([])
const links = ref([])

const fetchData = async () => {
  const response = await fetch('https://dragonball-api.com/api/characters')
  const data = await response.json()
  personajes.value = data.items
  links.value = data.links
}

onMounted(() => {
  fetchData()
})
</script>
