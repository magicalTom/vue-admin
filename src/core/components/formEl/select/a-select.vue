<template>
  <el-select v-model="modelValue" v-bind="state.props"> </el-select>
</template>

<script setup lang="ts">
import SelectConfig from '@/core/constants/SelectConfig.default';
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { reactive } from 'vue';

const modelValue = defineModel('modelValue', { required: true });
const props = withDefaults(
  defineProps<{
    entity: ClassConstructor;
    field: string;
  }>(),
  {},
);

const state = reactive({
  props: {},
});

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);
state.props = { ...SelectConfig, ...(formConfig?.el?.props || {}) };
</script>

<style scoped lang="scss">
.el-select {
  width: 100%;
}
</style>
