<script setup lang="ts">
import { Search } from '@element-plus/icons-vue';
import { ButtonProps } from 'element-plus';

const props = withDefaults(defineProps<Partial<ButtonProps>>(), {
  icon: Search,
  nativeType: 'submit',
});
const emits = defineEmits<{ click: [] }>();

const handleClick = () => {
  emits('click');
};
</script>

<template>
  <el-button v-bind="props" @click="handleClick">
    <slot v-if="$slots.default" />
    <span v-else>查询</span>
  </el-button>
</template>
