import '@/theme/index.scss';
import '@/theme/tailwind.css';
import 'element-plus/theme-chalk/el-message-box.css';
import 'element-plus/theme-chalk/el-message.css';
import { createApp } from 'vue';
import App from './App.vue';
import pinia from './pinia';
import router from './router';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
