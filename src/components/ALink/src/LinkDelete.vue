<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';
import { LinkProps } from 'element-plus';

const props = withDefaults(defineProps<Partial<LinkProps>>(), {
  type: 'danger',
  icon: Delete,
  underline: false,
});
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link v-bind="props" @click="handleClick">
    <slot v-if="$slots.default" />
    <span v-else>删除</span>
  </el-link>
</template>
