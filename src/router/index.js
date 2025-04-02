import { createRouter, createWebHistory } from 'vue-router'
import PersonajesView from '@/Personajes/views/PersonajeView.vue'
import InfoView from '@/Personajes/views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'personajes',
      component: PersonajesView,
    },
    {
      path: '/info/:id',
      name: 'informacion',
      component: InfoView,
    },
  ],
})

export default router
