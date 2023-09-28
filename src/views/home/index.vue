<template>
  <div>
    <ATable :data="[]" :entity="User" />
    <el-form :model="form" :rules="rules">
      <el-form-item :label="getFieldLabel(userInstance, 'username')" prop="username">
        <el-input v-model="userInstance.username" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import ATable from '@/core/components/table/a-table.vue';
import { getFieldLabel } from '@/core/decorators/field';
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
