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
import { reactive, useSlots } from 'vue';
import { getFieldConfigByInstance } from '../decorator/decorators/field';
import { getTableConfigByInstance } from '../decorator/decorators/table';
import ClassConstructor from '../decorator/interface/ClassConstructor';

const props = withDefaults(
  defineProps<{
    data: any[];
    keys?: string[];
    entity: ClassConstructor;
  }>(),
  {},
);

const slots = useSlots();
const state = reactive<{ tableColumns: Record<string, any>[]; slotsKeys: string[] }>({
  tableColumns: [],
  slotsKeys: Object.keys(slots),
});

{
  const entity = new props.entity();
  const keys = props.keys ? props.keys : Object.keys(entity);
  state.tableColumns = keys.map((key) => {
    const fieldConfig = getFieldConfigByInstance(entity, key);
    const tableConfig = getTableConfigByInstance(entity, key);
    return { id: Math.random().toString(16), label: fieldConfig?.label, ...(tableConfig || {}), prop: key };
  });
}

const isHasSlotByProp = (prop: string) => state.slotsKeys.includes(prop);
</script>

<style lang="scss" scoped></style>
