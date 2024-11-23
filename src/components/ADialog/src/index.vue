<script setup lang="ts">
import { DialogProps } from 'element-plus';

withDefaults(
  defineProps<
    {
      title?: string;
    } & Partial<Omit<DialogProps, 'modelValue' | 'title'>>
  >(),
  {},
);

const visible = defineModel({
  type: Boolean,
  default: true,
});
</script>

<template>
  <el-dialog v-model="visible" :title="title">
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>
