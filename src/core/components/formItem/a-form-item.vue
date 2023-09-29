<template>
  <el-form-item v-bind="state.props" :label="state.label" :prop="props.field">
    <template #label="{ label }" v-if="isHasSlotByProp('label')">
      <slot name="label" :label="label" />
    </template>
    <slot />
    <template #error="{ error }" v-if="isHasSlotByProp('error')">
      <slot name="error" :error="error" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { getFieldLabel } from '@/core/decorators/field';
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { IFormItem } from '@/core/interface/IForm';
import { reactive, useSlots } from 'vue';

const props = withDefaults(
  defineProps<{
    entity: ClassConstructor;
    field: string;
    showLabel?: boolean;
    required?: boolean;
  }>(),
  {
    showLabel: true,
    required: undefined,
  },
);
const slots = useSlots();
const state = reactive({
  slotKeys: Object.keys(slots),
  label: '',
  prop: '',
  props: {} as IFormItem,
});

{
  const instance = new props.entity();
  const formConfig = getFormConfig(instance, props.field);
  state.props = {
    ...(formConfig?.formItem || {}),
    required: props.required || props.required === false ? props.required : formConfig?.formItem?.rules ? true : false,
  };

  state.label = props.showLabel ? getFieldLabel(instance, props.field) : '';
}

const isHasSlotByProp = (key: string) => state.slotKeys.includes(key);
</script>
