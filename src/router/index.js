import { createRouter, createWebHistory } from '@ionic/vue-router';
import Memories from '../views/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/memories',
  },
  {
    path: '/memories',
    name: 'Memories',
    component: Memories,
  },
  {
    path: '/memories/:id',
    name: 'Memory',
    component: () => import('../views/MemoryDetails.vue'), // lazy loading
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
