<script setup lang="ts">
import { CircleClose } from '@element-plus/icons-vue';
import AButton from './index.vue';

withDefaults(defineProps<{ visible?: boolean }>(), {
  visible: false,
});
const emits = defineEmits<{ click: []; 'update:visible': [boolean] }>();
const slots = useSlots();

const isHasSlot = computed(() => Object.keys(slots).includes('default'));

const handleClick = () => {
  emits('update:visible', false);
  emits('click');
};
</script>

<template>
  <AButton :icon="CircleClose" @click="handleClick">
    <slot v-if="isHasSlot" />
    <span v-else>关闭</span>
  </AButton>
</template>
