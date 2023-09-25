import { axiosAbortController } from '@/core/net';
import router from '.';

router.beforeEach((to, from, next) => {
  axiosAbortController.abort();

  console.log(to, from);

  next();
});
