import { App } from 'vue';
import AInput from './input/a-input.vue';
import ASelect from './select/a-select.vue';

export const coreComponent = {
  install(app: App<Element>) {
    app.component('a-input', AInput);
    app.component('a-select', ASelect);
  },
};
