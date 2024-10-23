<script setup lang="ts">
import { AButtonReset, AButtonSearch } from '@/components/AButton';
import { FormInstance } from 'element-plus';

defineProps<{
  model?: Record<string, unknown>;
}>();
const emits = defineEmits<{ reset: []; search: [] }>();

const formRef = ref<FormInstance>();

const handleReset = () => {
  formRef.value?.resetFields();
  emits('reset');
};

const handleSearch = () => {
  emits('search');
};
</script>

<template>
  <div class="bg-white px-[18px] pt-[18px]">
    <el-form ref="formRef" :model="model" inline label-width="100px">
      <slot />
      <el-form-item>
        <AButtonReset @click="handleReset" />
        <AButtonSearch @click="handleSearch" />
      </el-form-item>
    </el-form>
  </div>
</template>
