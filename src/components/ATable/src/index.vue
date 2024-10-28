<script setup lang="ts">
import TableColumnCheckbox from './TableColumnCheckbox.vue';
import TableColumnIndex from './TableColumnIndex.vue';

withDefaults(
  defineProps<{
    data?: any[];
    showIndex?: boolean;
    showCheckBox?: boolean;
    showOverflowTooltip?: boolean;
    loading?: boolean;
  }>(),
  {
    showIndex: true,
    showCheckBox: true,
    showOverflowTooltip: true,
    loading: false,
  },
);
</script>

<template>
  <el-table :data="data" height="100%" v-loading="loading" :show-overflow-tooltip="showOverflowTooltip">
    <TableColumnIndex v-if="showIndex" />
    <TableColumnCheckbox v-if="showCheckBox" />
    <slot />
  </el-table>
</template>
