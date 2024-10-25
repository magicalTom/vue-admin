<script setup lang="ts">
import { View } from '@element-plus/icons-vue';

withDefaults(defineProps<{ label?: string }>(), { label: '查看' });
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="default" :icon="View" :underline="false" @click="handleClick">{{ label }}</el-link>
</template>
