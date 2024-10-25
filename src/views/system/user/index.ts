import { createRoutes } from '@/router/utils';

createRoutes([{ path: 'user', component: () => import('./index.vue') }]);
