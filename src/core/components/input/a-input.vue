<template>
  <el-input v-model="modelValue" v-bind="state.props">
    <template #prefix v-if="isHasSlotByKey('prefix')">
      <slot name="prefix" />
    </template>
    <template #suffix v-if="isHasSlotByKey('suffix')">
      <slot name="suffix" />
    </template>
    <template #prepend v-if="isHasSlotByKey('prepend')">
      <slot name="prepend" />
    </template>
    <template #append v-if="isHasSlotByKey('append')">
      <slot name="append" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { reactive, useSlots } from 'vue';

const modelValue = defineModel('modelValue', { required: true });
const slots = useSlots();
const props = defineProps<{
  entity: ClassConstructor;
  field: string;
}>();

const state = reactive({
  props: {},
  slotsKeys: Object.keys(slots),
});

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);

if (import.meta.env.DEV && formConfig?.el?.type && formConfig?.el?.type !== 'input') {
  console.warn('配置元素名称与当前使用元素不匹配，应为 input');
}

state.props = formConfig?.el?.props || {};

const isHasSlotByKey = (key: string) => state.slotsKeys.includes(key);
</script>
