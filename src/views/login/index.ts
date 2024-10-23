import { createRoutes } from '@/router/utils';
import Login from './index.vue';

createRoutes([
  {
    path: '/login',
    isRoot: true,
    component: Login,
  },
]);
