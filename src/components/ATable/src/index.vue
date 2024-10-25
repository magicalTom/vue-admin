<script setup lang="ts">
import TableColumnCheckbox from './TableColumnCheckbox.vue';
import TableColumnIndex from './TableColumnIndex.vue';

withDefaults(
  defineProps<{
    data?: any[];
    showIndex?: boolean;
    showCheckBox?: boolean;
    showOverflowTooltip?: boolean;
  }>(),
  {
    showIndex: true,
    showCheckBox: true,
    showOverflowTooltip: true,
  },
);
</script>

<template>
  <el-table :data="data" height="100%" :show-overflow-tooltip="showOverflowTooltip">
    <TableColumnIndex v-if="showIndex" />
    <TableColumnCheckbox v-if="showCheckBox" />
    <slot />
  </el-table>
</template>
