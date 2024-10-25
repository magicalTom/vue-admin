<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue';
import AButton from './index.vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <AButton :icon="Delete" type="danger" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>删除</span>
  </AButton>
</template>
