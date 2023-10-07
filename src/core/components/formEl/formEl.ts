import { App } from 'vue';
import aInputVue from './input/a-input.vue';

export const coreComponent = {
  install(app: App<Element>) {
    app.component('a-input', aInputVue);
  },
};
