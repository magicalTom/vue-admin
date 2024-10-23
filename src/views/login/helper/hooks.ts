export function useDetail() {
  const state = reactive({
    loading: false,
  });

  return toRefs(state);
}

export const useRequest = (...args: unknown[]) => {
  const run = () => {
    console.log(args);
  };

  return { run };
};
