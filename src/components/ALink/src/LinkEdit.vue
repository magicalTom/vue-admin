<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-link type="primary" :icon="Edit" :underline="false" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>编辑</span>
  </el-link>
</template>
