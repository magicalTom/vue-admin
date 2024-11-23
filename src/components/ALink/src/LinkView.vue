<script setup lang="ts">
import { View } from '@element-plus/icons-vue';
import { LinkProps } from 'element-plus';

const props = withDefaults(defineProps<Partial<LinkProps>>(), {
  icon: View,
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
    <span v-else>查看</span>
  </el-link>
</template>
