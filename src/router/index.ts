import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CatalogoView from '../views/CatalogoView.vue';
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/catalogo/:id?',
      name: 'catalogo',
      component: CatalogoView,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: AboutView,
    }
  ],
})

export default router
