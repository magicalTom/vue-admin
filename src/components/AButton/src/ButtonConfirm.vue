<script setup lang="ts">
import { CircleCheck } from '@element-plus/icons-vue';
import AButton from './index.vue';

defineProps<{
  submit?: () => Promise<unknown>;
}>();

const slots = useSlots();

const isHasSlotDefault = computed(() => Object.keys(slots).includes('default'));
</script>

<template>
  <AButton :icon="CircleCheck" :submit="submit" type="primary">
    <slot v-if="isHasSlotDefault" />
    <span>确认</span>
  </AButton>
</template>
