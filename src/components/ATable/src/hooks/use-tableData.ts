import type { PageRootObject } from '@/lib/net/types';

interface Options<T, P, R> {
  params?: P;
  manual?: boolean; // 设为 true，不立即加载
  map?(value: T, index: number, array: T[]): R;
}

export default function useTableData<T extends R, P extends Record<string, unknown>, R>(
  request: (...args: any) => Promise<PageRootObject<T>>,
  options?: Options<T, P, R>,
) {
  const _options: Required<Omit<Options<T, P, R>, 'map'>> & Pick<Options<T, P, R>, 'map'> = {
    params: {} as P,
    manual: false,
    ...(options || {}),
  };

  const list = ref<R[]>([]);
  const loading = ref(false);
  const total = ref(0);
  const form = reactive({
    ..._options.params,
    current: 1,
    size: 20,
  });

  const run = async () => {
    try {
      loading.value = true;
      const res = await request(form);
      if (!_options.map) {
        list.value = res.data.records;
      } else {
        list.value = res.data.records.map(_options.map);
      }
      total.value = res.data.total;
      return list.value;
    } finally {
      loading.value = false;
    }
  };

  if (!_options.manual) {
    run();
  }

  return { form, loading, total, list, run };
}
