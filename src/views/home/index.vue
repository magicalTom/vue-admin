<template>
  <div>
    <ATable :data="[]" :entity="User" />
    <el-form :model="form" :rules="rules" inline>
      <AFormItem :entity="User" field="username">
        <AField v-model="form.username" :entity="User" field="username" ref="inputRef" />
      </AFormItem>
      <AFormItem :entity="User" field="password">
        <AField v-model="form.password" :entity="User" field="password" />
      </AFormItem>
    </el-form>

    <el-button @click="handleClear">Clear</el-button>
  </div>
</template>

<script setup lang="ts">
import AField from '@/core/components/formEl/a-field.vue';
import AFormItem from '@/core/components/formItem/a-form-item.vue';
import ATable from '@/core/components/table/a-table.vue';
import { buildFormRules } from '@/core/helper/form';
import User from '@/model/database/User';
import { reactive, ref } from 'vue';

const instance = new User();
const form = reactive(instance);
const rules = buildFormRules(instance);

const inputRef = ref();

const handleClear = () => {
  inputRef.value.ref.clear();
};
</script>
