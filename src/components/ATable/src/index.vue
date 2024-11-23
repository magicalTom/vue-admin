<script setup lang="ts">
import { TableProps } from 'element-plus';
import { omit } from 'lodash';
import TableColumnCheckbox from './TableColumnCheckbox.vue';
import TableColumnIndex from './TableColumnIndex.vue';

const props = withDefaults(
  defineProps<
    {
      showIndex?: boolean;
      showCheckBox?: boolean;
      loading?: boolean;
    } & Partial<TableProps<any>>
  >(),
  {
    showIndex: true,
    showCheckBox: true,
    showOverflowTooltip: true,
    loading: false,
  },
);

const _props = computed(() => omit(props, ['showIndex', 'showCheckBox', 'loading']));
</script>

<template>
  <el-table v-loading="loading" v-bind="_props">
    <TableColumnIndex v-if="showIndex" />
    <TableColumnCheckbox v-if="showCheckBox" />
    <slot />
  </el-table>
</template>
