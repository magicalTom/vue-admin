<template>
  <Page>
    <SearchContainer :model="form">
      <AFormItem :entity="User" field="username">
        <AInput v-model="form.username" :entity="User" field="username" />
      </AFormItem>
      <AFormItem :entity="User" field="sex">
        <ASelect v-model="form.sex" :entity="User" field="sex" />
      </AFormItem>
    </SearchContainer>

    <TableContainer>
      <template #top>
        <el-button type="primary" @click="state.show = true">创建</el-button>
      </template>
      <ATable height="100%" :entity="User" :data="list">
        <template #right>
          <el-table-column label="操作">
            <el-button type="danger">删除</el-button>
            <el-button>详情</el-button>
          </el-table-column>
        </template>
      </ATable>
    </TableContainer>

    <Create v-model="state.show" />
  </Page>
</template>

<script setup lang="ts">
import Page from '@/components/Page.vue';
import SearchContainer from '@/components/SearchContainer.vue';
import TableContainer from '@/components/TableContainer.vue';
import AFormItem from '@/core/components/formItem/a-form-item.vue';
import AInput from '@/core/components/input/a-input.vue';
import ASelect from '@/core/components/select/a-select.vue';
import ATable from '@/core/components/table/a-table.vue';
import User from '@/model/database/User';
import Create from '@/views/user/Create.vue';
import { reactive, ref } from 'vue';

const form = reactive<Partial<User>>({
  username: '',
  sex: '',
});
const list = ref<User[]>([{ username: 'Rose', password: '***', sex: '男', phone: '13111111111' }]);
const state = reactive({
  show: false,
});
</script>

<style lang="scss" scoped></style>
