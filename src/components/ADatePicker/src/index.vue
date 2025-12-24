<script setup lang="ts">
import { DatePickerProps } from 'element-plus';
import _ from 'lodash';

const props = withDefaults(
  defineProps<
    Partial<DatePickerProps> & {
      startValue?: string;
      endValue?: string;
      modelValue?: string;
    }
  >(),
  {
    type: 'date',
  },
);
const emits = defineEmits<{
  'update:startValue': [string | Date];
  'update:endValue': [string | Date];
  'update:modelValue': [[string, string] | [Date, Date] | null | string];
}>();

const _props = computed(() => _.omit(props, ['valueFormat', 'startValue', 'endValue', 'modelValue']));
const _valueFormat = computed(() => {
  if (props.valueFormat) return props.valueFormat;
  if (['date', 'daterange'].includes(props.type)) return 'yyyy-MM-dd';
  if (['datetime', 'datetimerange'].includes(props.type)) return 'yyyy-MM-dd HH:mm:ss';
  return;
});

const handleChange = (e: [string, string] | [Date, Date] | null | string) => {
  if (props.type && /^[a-z]+range$/i.test(props.type)) {
    if (e) {
      emits('update:startValue', e[0]);
      emits('update:endValue', e[1]);
    } else {
      emits('update:startValue', '');
      emits('update:endValue', '');
    }
  }
  emits('update:modelValue', e);
};
</script>

<template>
  <el-date-picker :model-value="modelValue" :value-format="_valueFormat" v-bind="_props" @change="handleChange" />
</template>
