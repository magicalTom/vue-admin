<script setup lang="ts">
import { View } from '@element-plus/icons-vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="default" :icon="View" :underline="false" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>查看</span>
  </el-link>
</template>
