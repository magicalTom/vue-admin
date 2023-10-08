<template>
  <el-table
    ref="elRef"
    v-bind="props"
    @select="handleEvent('select')"
    @select-all="handleEvent('select-all')"
    @selection-change="handleEvent('selection-change')"
    @cell-mouse-enter="handleEvent('cell-mouse-enter')"
    @cell-mouse-leave="handleEvent('cell-mouse-leave')"
    @cell-click="handleEvent('cell-click')"
    @cell-dblclick="handleEvent('cell-dblclick')"
    @cell-contextmenu="handleEvent('cell-contextmenu')"
    @row-click="handleEvent('row-click')"
    @row-dblclick="handleEvent('row-dblclick')"
    @row-contextmenu="handleEvent('row-contextmenu')"
    @header-click="handleEvent('header-click')"
    @header-contextmenu="handleEvent('header-contextmenu')"
    @header-dragend="handleEvent('header-dragend')"
    @expand-change="handleEvent('expand-change')"
  >
    <el-table-column type="expand" v-if="showExpand"></el-table-column>
    <el-table-column type="selection" v-if="showSelection"></el-table-column>
    <el-table-column label="序号" type="index" width="80" v-if="showIndex"></el-table-column>
    <el-table-column v-for="item in state.tableColumns" :key="item.id" v-bind="item">
      <template #default="scope" v-if="isHasSlotOf(item.prop)">
        <slot :name="item.prop" v-bind="scope" />
      </template>
    </el-table-column>
    <slot name="right" />
    <template #append v-if="isHasSlotOf('append')">
      <slot name="append" />
    </template>

    <template #empty>
      <el-empty :description="emptyText" />
    </template>
  </el-table>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import TableColumnConfig from '@/core/constants/TableColumnConfig.default';
import { getFieldLabel } from '@/core/decorators/field';
import { getTableColumnConfig } from '@/core/decorators/tableColumn';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { TableProps } from 'element-plus';
import { computed, reactive, ref, useSlots } from 'vue';

type Props = {
  keys?: string[];
  entity: ClassConstructor;
  showExpand?: boolean;
  showSelection?: boolean;
  showIndex?: boolean;
} & TableProps<any>;

type EmitsEvent =
  | 'select'
  | 'select-all'
  | 'selection-change'
  | 'cell-mouse-enter'
  | 'cell-mouse-leave'
  | 'cell-click'
  | 'cell-dblclick'
  | 'cell-contextmenu'
  | 'row-click'
  | 'row-contextmenu'
  | 'row-dblclick'
  | 'header-click'
  | 'header-contextmenu'
  | 'sort-change'
  | 'filter-change'
  | 'current-change'
  | 'header-dragend'
  | 'expand-change';
type Emits = {
  (e: EmitsEvent, ...args: any[]): void;
};

const emits = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  emptyText: '暂无数据',
  fit: true,
  showHeader: true,
  selectOnIndeterminate: true,
});
const elRef = ref();
const slots = useSlots();
const state = reactive<{ tableColumns: Record<string, any>[]; slotsKeys: string[] }>({
  tableColumns: [],
  slotsKeys: Object.keys(slots),
});

const _ref = computed(() => elRef.value);

{
  const instance = new props.entity();
  const keys = props.keys ? props.keys : Object.keys(instance);
  state.tableColumns = keys.map((key) => {
    const config = getTableColumnConfig(instance, key);
    return {
      id: crypto.randomUUID(),
      ...TableColumnConfig,
      label: getFieldLabel(instance, key),
      ...(config || {}),
      prop: key,
    };
  });
}

const isHasSlotOf = (prop: string) => state.slotsKeys.includes(prop);
const handleEvent =
  (event: EmitsEvent) =>
  (...args: any[]) => {
    emits(event, ...args);
  };

defineExpose({
  ref: _ref,
});
</script>

<style lang="scss" scoped></style>
