<template>
  <component :is="elType" v-bind="props" v-model="modelValue" ref="elRef"></component>
</template>

<script setup lang="ts">
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    entity: ClassConstructor;
    field: string;
  }>(),
  {},
);
const modelValue = defineModel('modelValue', { required: true });
const elRef = ref();
const _ref = computed(() => elRef.value.ref);

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);
if (!formConfig?.el?.type) throw new Error('未配置元素类型');
const elType = computed(() => `a-${formConfig?.el?.type}`);

defineExpose({
  ref: _ref,
});
</script>
