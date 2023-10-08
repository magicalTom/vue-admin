<template>
  <el-input v-model="modelValue" v-bind="state.props" ref="elRef">
    <template #prefix v-if="isHasSlotOf('prefix')">
      <slot name="prefix" />
    </template>
    <template #suffix v-if="isHasSlotOf('suffix')">
      <slot name="suffix" />
    </template>
    <template #prepend v-if="isHasSlotOf('prepend')">
      <slot name="prepend" />
    </template>
    <template #append v-if="isHasSlotOf('append')">
      <slot name="append" />
    </template>
  </el-input>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import InputConfig from '@/core/constants/InputConfig.default';
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { computed, reactive, ref, useSlots } from 'vue';

const modelValue = defineModel('modelValue', { required: true });
const props = withDefaults(
  defineProps<{
    entity: ClassConstructor;
    field: string;
  }>(),
  {},
);
const slots = useSlots();

const elRef = ref();
const state = reactive({
  props: {},
  slotKeys: Object.keys(slots),
});

const _ref = computed(() => elRef.value);

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);
state.props = { ...InputConfig, ...(formConfig?.el?.props || {}) };

const isHasSlotOf = (key: string) => state.slotKeys.includes(key);

defineExpose({
  ref: _ref,
});
</script>
