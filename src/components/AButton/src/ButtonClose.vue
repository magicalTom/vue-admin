<script setup lang="ts">
import { CircleClose } from '@element-plus/icons-vue';
import { ButtonProps } from 'element-plus';
import { omit } from 'lodash';

const props = withDefaults(defineProps<Partial<ButtonProps> & { visible?: boolean }>(), {
  icon: CircleClose,
});
const emits = defineEmits<{ click: []; 'update:visible': [boolean] }>();

const _props = computed(() => omit(props, ['visible']));

const handleClick = () => {
  emits('update:visible', false);
  emits('click');
};
</script>

<template>
  <el-button v-bind="_props" @click="handleClick">
    <slot v-if="$slots.default" />
    <span v-else>关闭</span>
  </el-button>
</template>
