import '@/router/permissions';
import '@/theme/reset.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './pinia';
import router from './router';

const app = createApp(App);
app.use(pinia);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
