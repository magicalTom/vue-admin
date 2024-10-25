<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import AButton from './index.vue';

const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <AButton :icon="Edit" type="primary" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>修改</span>
  </AButton>
</template>
