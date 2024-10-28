import type { PageRootObject } from '@/lib/net/types';

interface Options<T, P, R> {
  params?: P;
  manual?: boolean; // 设为 true，不立即加载
  map?(value: T, index: number, array: T[]): R;
}

export default function useTableData<T extends R, P extends Record<string, unknown>, R>(
  fn: (...args: any) => Promise<PageRootObject<T>>,
  options?: Options<T, P, R>,
) {
  const _options: Required<Options<T, P, R>> = {
    params: {} as P,
    manual: false,
    map: (value) => value,
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
      const res = await fn(form);
      list.value = res.data.records.map(_options.map);
      total.value = res.data.total;
    } finally {
      loading.value = false;
    }
  };

  if (!_options.manual) {
    run();
  }

  return { form, loading, total, list, run };
}

// const { list } = useTableData(
//   () => Promise.resolve({ code: '1', msg: null, data: { records: [{ name: '1' }], total: 1, size: 20, current: 1 } }),
//   {
//     map(item) {
//       return { age: item.name };
//     },
//   },
// );

// list.value[0].age;
