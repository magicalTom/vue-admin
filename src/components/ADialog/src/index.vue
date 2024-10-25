<script setup lang="ts">
import { AButtonClose, AButtonConfirm } from '@/components/AButton';

withDefaults(
  defineProps<{
    title?: string;
    showClose?: boolean;
    showConfirm?: boolean;
  }>(),
  {
    showClose: true,
    showConfirm: true,
  },
);

const visible = ref(true);
</script>

<template>
  <el-dialog v-model="visible" :title="title">
    <slot />
    <template #footer>
      <div class="flex items-center justify-between">
        <div>
          <slot name="tip" />
        </div>
        <div>
          <AButtonClose v-if="showClose" v-model:visible="visible" />
          <AButtonConfirm v-if="showConfirm" />
        </div>
      </div>
    </template>
  </el-dialog>
</template>
