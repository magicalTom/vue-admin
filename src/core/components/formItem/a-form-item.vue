<template>
  <el-form-item v-bind="state.props" :label="state.label" :prop="state.prop">
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
import { formContextKey } from 'element-plus';
import { inject, reactive, useSlots } from 'vue';

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

const formContext = inject(formContextKey, undefined);

{
  const instance = new props.entity();
  const formConfig = getFormConfig(instance, props.field);

  state.label = props.showLabel ? getFieldLabel(instance, props.field) : '';
  state.prop = Object.keys(formContext?.rules || {}).includes(props.field) ? props.field : '';
  state.props = {
    ...(formConfig?.formItem || {}),
    required: props.required || props.required === false ? props.required : state.prop ? true : false,
    rules: undefined,
  };
}

const isHasSlotByProp = (key: string) => state.slotKeys.includes(key);
</script>
