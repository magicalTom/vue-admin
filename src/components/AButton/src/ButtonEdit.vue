<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import { ButtonProps } from 'element-plus';

const props = withDefaults(defineProps<Partial<ButtonProps>>(), {
  icon: Edit,
});
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-button v-bind="props" @click="handleClick">
    <slot v-if="$slots.default" />
    <span v-else>修改</span>
  </el-button>
</template>
