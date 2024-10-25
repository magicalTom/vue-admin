<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ButtonProps } from 'element-plus';
import AButton from './index.vue';

withDefaults(
  defineProps<{
    nativeType?: ButtonProps['nativeType'];
  }>(),
  {
    nativeType: 'submit',
  },
);
const emits = defineEmits<{ click: [] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <AButton :icon="Search" type="primary" :native-type="nativeType" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>查询</span>
  </AButton>
</template>
