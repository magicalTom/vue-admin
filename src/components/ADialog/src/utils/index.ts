import router from '@/router';
import { ElMessageBox, type ElMessageBoxOptions } from 'element-plus';
import { type Component } from 'vue';

interface MessageOptions extends Omit<ElMessageBoxOptions, 'beforeClose'> {
  onConfirm: () => Promise<unknown>;
  onCancel?: () => unknown;
}

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

  static delete(options: MessageOptions) {
    const { onConfirm, onCancel, ...reset } = options;

    const _options: ElMessageBoxOptions = {
      title: '提示',
      message: '确定删除此数据吗？',
      type: 'warning',
      confirmButtonText: '确定',
      confirmButtonClass: 'el-button--danger',
      showCancelButton: true,
      cancelButtonText: '取消',
      ...reset,
      async beforeClose(action, instance, done) {
        if (action === 'confirm') {
          try {
            instance.confirmButtonLoading = true;
            await onConfirm();
            done();
          } finally {
            instance.confirmButtonLoading = false;
          }
        } else {
          instance.confirmButtonLoading = false;
          onCancel?.();
          done();
        }
      },
    };

    ElMessageBox(_options);
  }

  static info(options: MessageOptions) {
    const { onConfirm, onCancel, ...reset } = options;

    const _options: ElMessageBoxOptions = {
      title: '提示',
      confirmButtonText: '确定',
      showCancelButton: true,
      cancelButtonText: '取消',
      ...reset,
      async beforeClose(action, instance, done) {
        if (action === 'confirm') {
          try {
            instance.confirmButtonLoading = true;
            await onConfirm();
            done();
          } finally {
            instance.confirmButtonLoading = false;
          }
        } else {
          instance.confirmButtonLoading = false;
          onCancel?.();
          done();
        }
      },
    };

    ElMessageBox(_options);
  }
}
