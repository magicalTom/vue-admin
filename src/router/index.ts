import Layout from '@/views/layout/index.vue';
import Login from '@/views/login/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout, children: [{ path: '/', component: () => import('@/views/user/index.vue') }] },
  ],
  history: createWebHashHistory(),
});

export default router;
