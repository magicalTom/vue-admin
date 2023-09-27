<template>
  <el-table :data="data">
    <el-table-column
      v-for="item in state.tableColumns"
      :key="item.id"
      v-bind="item"
      show-overflow-tooltip
      align="center"
    >
      <template #default="scope" v-if="isHasSlotByProp(item.prop)">
        <slot :name="item.prop" v-bind="scope" />
      </template>
    </el-table-column>
    <slot name="append" />

    <template #empty>
      <el-empty description="哈哈" />
    </template>
  </el-table>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { TableProps } from 'element-plus';
import { reactive, useSlots } from 'vue';
import TableColumnConfig from '../constants/TableColumnConfig.default';
import { getFieldLabel } from '../decorators/field';
import { getTableColumnConfig } from '../decorators/tableColumn';
import ClassConstructor from '../interface/ClassConstructor';

type Props = {
  keys?: string[];
  entity: ClassConstructor;
} & TableProps<any>;

const props = withDefaults(defineProps<Props>(), {});

const slots = useSlots();
const state = reactive<{ tableColumns: Record<string, any>[]; slotsKeys: string[] }>({
  tableColumns: [],
  slotsKeys: Object.keys(slots),
});

{
  const entity = new props.entity();
  const keys = props.keys ? props.keys : Object.keys(entity);
  state.tableColumns = keys.map((key) => {
    const config = getTableColumnConfig(entity, key);
    return {
      id: Math.random().toString(16),
      ...TableColumnConfig,
      label: getFieldLabel(entity, key),
      ...(config || {}),
      prop: key,
    };
  });
}

const isHasSlotByProp = (prop: string) => state.slotsKeys.includes(prop);
</script>

<style lang="scss" scoped></style>
