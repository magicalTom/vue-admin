import router from '@/router';
import { type Component } from 'vue';

export default class DialogUtils {
  static create<T extends Record<string, unknown>>(node: Component<T>, props?: T, id = 'dialog-id') {
    const oldContainer = document.getElementById(id);
    if (oldContainer) oldContainer.remove();

    const container = document.createElement('div');
    container.id = id;
    document.body.append(container);

    const component = defineComponent(() => {
      return () => {
        const route = useRoute();

        watch(route, () => {
          container.remove();
        });

        return h('div', h(node, props));
      };
    });

    const app = createApp(component);
    app.use(router);
    app.mount(container);
  }
}
