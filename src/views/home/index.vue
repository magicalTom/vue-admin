<template>
  <div>
    <el-form :model="form" :rules="rules">
      <AFormItem :entity="User" field="username">
        <AField v-model="form.username" :entity="User" field="username" />
      </AFormItem>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import AField from '@/core/components/formEl/a-field.vue';
import AFormItem from '@/core/components/formItem/a-form-item.vue';
import { buildFormRules } from '@/core/helper/form';
import User from '@/model/database/User';
import { reactive } from 'vue';

const instance = new User();
const form = reactive(instance);
const rules = buildFormRules(instance);
</script>
