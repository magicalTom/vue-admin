<script setup lang="ts">
import { AButtonAdd, AButtonDelete, AButtonEdit } from '@/components/AButton';
import AContainer, { AContent, ASearchForm } from '@/components/AContainer';
import ADialog, { DialogUtils } from '@/components/ADialog';
import ATable, {
  ATableButtonDelete,
  ATableButtonEdit,
  ATableButtonView,
  ATableColumnOperate,
  ATableToolbar,
} from '@/components/ATable';

const form = reactive({
  name: '',
});

const handleClick = () => {
  DialogUtils.create(ADialog, { title: 'xx' });
};

const handleSearch = () => {
  console.log(2);
};

const handleReset = () => {
  console.log(2);
};
</script>

<template>
  <AContainer>
    <ASearchForm :model="form" @search="handleSearch" @reset="handleReset">
      <el-form-item prop="name">
        <el-input v-model="form.name" placeholder="name" />
      </el-form-item>
    </ASearchForm>
    <AContent>
      <ATableToolbar>
        <AButtonAdd @click="handleClick" />
        <AButtonEdit />
        <AButtonDelete />
      </ATableToolbar>
      <ATable :data="[{}]">
        <el-table-column label="序号"></el-table-column>
        <ATableColumnOperate>
          <ATableButtonView />
          <ATableButtonEdit />
          <ATableButtonDelete />
        </ATableColumnOperate>
      </ATable>
    </AContent>
  </AContainer>
</template>
