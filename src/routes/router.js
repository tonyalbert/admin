// router.js
import { createRouter, createWebHistory } from 'vue-router';
import TheHome from '../views/TheHome.vue';
import TheAbout from '../views/TheAbout.vue';

const routes = [
  {
    path: '/',
    component: TheHome,
  },
  {
    path: '/about',
    component: TheAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
