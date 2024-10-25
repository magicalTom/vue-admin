<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';

withDefaults(defineProps<{ label?: string }>(), { label: '删除' });
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="danger" :icon="Delete" :underline="false" @click="handleClick">{{ label }}</el-link>
</template>
