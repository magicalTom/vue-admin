import Home from '@/views/home/index.vue';
import Login from '@/views/login/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Home },
  ],
  history: createWebHashHistory(),
});

export default router;
