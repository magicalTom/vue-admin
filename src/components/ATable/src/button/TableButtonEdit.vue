<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';

withDefaults(defineProps<{ label?: string }>(), { label: '修改' });
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="primary" :icon="Edit" :underline="false" @click="handleClick">{{ label }}</el-link>
</template>
