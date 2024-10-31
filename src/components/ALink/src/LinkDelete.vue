<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="danger" :icon="Delete" :underline="false" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>删除</span>
  </el-link>
</template>
