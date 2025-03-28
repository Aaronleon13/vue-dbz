import { createRouter, createWebHistory } from 'vue-router'
import PersonajesView from '@/Personajes/views/PersonajeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personajes',
      component: PersonajesView,
    },
  ],
})

export default router
