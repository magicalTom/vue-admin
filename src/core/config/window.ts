import { axiosAbortController } from '../net';

document.addEventListener('beforeunload', function () {
  axiosAbortController.abort();
});
