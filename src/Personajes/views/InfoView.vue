<template>
  <HeaderComp title="Nombre de personaje" />
  <h1>{{ route.param.id }}</h1>
</template>

<script setup>
import HeaderComp from '../componets/headerComp.vue'
import { useRoute } from 'vue-router'

const route = useRoute
</script>
