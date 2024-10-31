<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: string | number;
  }>(),
  {
    width: 180,
  },
);
</script>

<template>
  <el-table-column label="操作" fixed="right" :width="width">
    <template #default="scope">
      <div class="flex items-center gap-x-[12px]">
        <slot v-bind="scope" />
      </div>
    </template>
  </el-table-column>
</template>
