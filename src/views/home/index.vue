<template>
  <div>
    <ATable :data="[]" :entity="User">
      <template #append>
        <el-table-column label="操作" fixed="right">
          <el-button type="danger" size="small">删除</el-button>
        </el-table-column>
      </template>
    </ATable>
    <div style="height: 10px; background-color: #eee"></div>
    <el-form :model="userInstance" :rules="rules">
      <el-form-item :label="getFieldLabel(userInstance, 'username')" prop="username">
        <el-input v-model="userInstance.username" />
      </el-form-item>
    </el-form>
    <el-button @click="handleClick">click</el-button>
  </div>
</template>

<script setup lang="ts">
import ATable from '@/core/components/a-table.vue';
import { getFieldLabel } from '@/core/decorator/decorators/field';
import { buildFormRules } from '@/core/decorator/helper/form';
import User from '@/model/database/User';
import { reactive } from 'vue';

const userInstance = reactive(new User());
const rules = buildFormRules(userInstance);

console.log(rules);

const handleClick = () => {
  console.log(userInstance);
};
</script>

<style lang="scss" scoped></style>
