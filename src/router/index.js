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
    path: '/memories/add',
    name: 'Add',
    component: () => import('../views/AddMemoryPage.vue'), // lazy loading
  },
  {
    path: '/memories/:id',
    name: 'Memory',
    component: () => import('../views/MemoryDetailsPage.vue'), // lazy loading
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
