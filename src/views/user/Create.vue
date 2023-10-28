<template>
  <el-dialog v-model="modelValue" title="创建用户" @close="handleClose">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="80">
      <AFormItem field="username" :entity="User">
        <AInput field="username" :entity="User" v-model="form.username" />
      </AFormItem>
      <AFormItem field="password" :entity="User">
        <AInput field="password" :entity="User" v-model="form.password" />
      </AFormItem>
      <AFormItem field="sex" :entity="User">
        <ASelect field="sex" :entity="User" v-model="form.sex" />
      </AFormItem>
    </el-form>

    <template #footer>
      <span>
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button @click="handleClose">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import AFormItem from '@/core/components/formItem/a-form-item.vue';
import AInput from '@/core/components/input/a-input.vue';
import ASelect from '@/core/components/select/a-select.vue';
import { buildFormRules } from '@/core/helper/form';
import User from '@/model/database/User';
import { FormInstance } from 'element-plus';
import { reactive, ref } from 'vue';

const modelValue = defineModel('modelValue');

const form = reactive(new User());
const rules = buildFormRules(form);
const formRef = ref<FormInstance>();

const handleSave = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      console.log(form);
      modelValue.value = false;
    }
  });
};

const handleClose = () => {
  formRef.value?.resetFields();
  modelValue.value = false;
};
</script>

<style scoped lang="scss"></style>
