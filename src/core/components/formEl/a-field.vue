<template>
  <component :is="elType" v-bind="props" v-model="modelValue"></component>
</template>

<script setup lang="ts">
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    entity: ClassConstructor;
    field: string;
  }>(),
  {},
);
const modelValue = defineModel('modelValue', { required: true });

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);
const elType = computed(() => `a-${formConfig?.el?.type}`);
</script>
