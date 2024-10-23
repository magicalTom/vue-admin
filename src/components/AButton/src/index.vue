<script setup lang="ts">
import { ButtonProps } from 'element-plus';
import _ from 'lodash';

const props = defineProps<
  {
    submit?: () => Promise<unknown>;
  } & Partial<Omit<ButtonProps, 'loading'>>
>();
const emits = defineEmits<{ click: [] }>();
const loading = ref(false);

const _props = computed(() => _.omit(props, ['submit']));

const handleClick = async () => {
  if (props.submit) {
    try {
      loading.value = true;
      await props.submit();
    } finally {
      loading.value = false;
    }
  }
  emits('click');
};
</script>

<template>
  <el-button :loading="loading" v-bind="_props" @click="handleClick">
    <slot />
  </el-button>
</template>
