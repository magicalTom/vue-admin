<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue';
import { ButtonProps } from 'element-plus';
import { omit } from 'lodash';
import { LocationQueryRaw } from 'vue-router';

const props = withDefaults(
  defineProps<
    Partial<ButtonProps> & {
      path?: string;
      query?: LocationQueryRaw;
    }
  >(),
  {
    icon: Plus,
    type: 'primary',
  },
);
const emits = defineEmits<{ click: [] }>();
const router = useRouter();

const _props = computed(() => omit(props, ['path', 'query']));

const handleClick = () => {
  if (props.path)
    router.push({
      path: props.path,
      query: props.query,
    });
  emits('click');
};
</script>

<template>
  <el-button v-bind="_props" @click="handleClick">
    <slot v-if="$slots.default" />
    <span v-else>添加</span>
  </el-button>
</template>
