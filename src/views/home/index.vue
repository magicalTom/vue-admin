<template>
  <div>
    <ATable :data="[]" :entity="User" />
    <el-form :model="form" :rules="rules">
      <AFormItem :entity="User" field="username">
        <el-input v-model="form.username" />
      </AFormItem>
      <AFormItem :entity="User" field="password">
        <el-input v-model="form.password" />
      </AFormItem>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import AFormItem from '@/core/components/formItem/a-form-item.vue';
import ATable from '@/core/components/table/a-table.vue';
import { buildFormRules } from '@/core/helper/form';
import User from '@/model/database/User';
import { reactive, readonly } from 'vue';

const userInstance = readonly(new User());
const rules = buildFormRules(userInstance, ['username', 'password']);

const form = reactive<Partial<User>>({
  username: '',
  password: '',
});
</script>
