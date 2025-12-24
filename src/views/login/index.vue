<script setup lang="ts">
import { AButtonClose, AButtonConfirm, AButtonReset, AButtonSearch } from '@/components/AButton';
import { FormInstance } from 'element-plus';

const formRef = ref<FormInstance>();
const form = reactive({
  username: '',
});

const handleClick = () => {
  console.log(form.username);
};

const handleReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <div>
    <AButtonClose />
    <AButtonConfirm @click="handleClick" />

    <el-form ref="formRef" :model="form" inline>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="Placeholder" />
      </el-form-item>
      <el-form-item>
        <AButtonSearch type="primary" @click="handleClick" native-type="submit" />
        <AButtonReset @click="handleReset" />
      </el-form-item>
    </el-form>
  </div>
</template>
