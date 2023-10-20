<template>
  <el-select v-model="modelValue">
    <template #prefix v-if="isHasSlotByKey('prefix')">
      <slot name="prefix" />
    </template>
    <el-option v-for="(item, index) in state.options" :key="index" :label="item.label" :value="item.value" />
  </el-select>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { getFormConfig } from '@/core/decorators/form';
import ClassConstructor from '@/core/interface/ClassConstructor';
import { reactive, useSlots } from 'vue';

const modelValue = defineModel('modelValue', { required: true });
const slots = useSlots();
const props = defineProps<{
  entity: ClassConstructor;
  field: string;
  options?: Record<string, any>[];
}>();

const state = reactive({
  props: {},
  slotsKeys: Object.keys(slots),
  options: <Record<string, any>[]>[],
});

const instance = new props.entity();
const formConfig = getFormConfig(instance, props.field);

if (import.meta.env.DEV && formConfig?.el?.type && formConfig?.el?.type !== 'select') {
  console.warn('配置元素名称与当前使用元素不匹配，应为 select');
}

state.props = formConfig?.el?.props || {};
state.options = formConfig?.el?.props?.options || [];
if (props.options) state.options = props.options;
if (formConfig?.el?.props.remote) {
  formConfig.el.props.remote().then((res) => {
    // 根据业务需求修改
    state.options = res.data.data;
  });
}

const isHasSlotByKey = (key: string) => state.slotsKeys.includes(key);
</script>

<style lang="scss" scoped>
.el-select {
  width: 100%;
}
</style>
