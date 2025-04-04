<template>
  <HeaderComp title="Nombre de personaje" />
  <section class="h-screen my-20">
    <div
      class="flex flex-row items-center justify-center max-w-4xl mx-auto mt-12 gap-10 bg-white rounded-3xl p-4 shadow-lg text-white"
    >
      <div class="flex flex-col items-center justify-center">
        <HeaderComp
          :title="personaje.name"
          class="text-4xl font-bold text-amber-600 font-dbz tracking-widest"
        />
        <p>ki: {{ personaje.ki }}</p>
        <p>max ki: {{ personaje.maxKi }}</p>
        <img
          :src="personaje.image"
          :alt="personaje.name"
          class="w-72 object-contain mb-4 hover:drop-shadow-3xl"
        />
      </div>
      <div class="flex flex-row items-center justify-center">
        <p class="w-72 text-amber-600 text-left text-balance">
          {{ personaje.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeaderComp from '../componets/headerComp.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const idPersonaje = route.params.id
const personaje = ref({})

const getInfo = async () => {
  const response = await fetch(`https://dragonball-api.com/api/characters/${idPersonaje}`)
  const data = await response.json()
  personaje.value = data

  console.log(personaje.value)
}

onMounted(() => {
  getInfo()
})
</script>
