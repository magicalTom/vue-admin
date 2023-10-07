<template>
  <el-input v-model="modelValue" v-bind="state.props" />
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { InputEl } from '@/core/interface/IForm';
import { reactive } from 'vue';

export interface IAInputProps {
  entity: ClassConstructor;
  field: string;
}

const modelValue = defineModel('modelValue', { required: true });
const props = withDefaults(defineProps<IAInputProps>(), {});

const state = reactive({
  props: {} as InputEl['props'],
});

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);
state.props = formConfig?.el?.props as InputEl;
</script>
