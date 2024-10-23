<script setup lang="ts">
import { Refresh } from '@element-plus/icons-vue';
import AButton from './index.vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <AButton :icon="Refresh" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>重置</span>
  </AButton>
</template>
