import { createRouter, createWebHashHistory } from 'vue-router';
import { buildRoutes } from './utils';

import.meta.glob('@/views/**/index.ts', { eager: true });

const router = createRouter({
  history: createWebHashHistory(),
  routes: buildRoutes(),
});

export default router;
