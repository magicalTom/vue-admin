<script setup lang="ts">
import { AButtonAdd, AButtonDelete, AButtonEdit } from '@/components/AButton';
import AContainer, { AContent, ASearchForm } from '@/components/AContainer';
import ADialog, { DialogUtils } from '@/components/ADialog';
import { ALinkDelete, ALinkEdit, ALinkView } from '@/components/ALink';
import ATable, { ATableColumnOperate, ATableToolbar } from '@/components/ATable';

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

const handleDelete = (row: unknown) => {
  console.log(row);
  DialogUtils.delete({
    async onConfirm() {},
  });
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
      <ATable :data="[{ id: 1 }]">
        <el-table-column label="序号"></el-table-column>
        <ATableColumnOperate>
          <template #default="scope">
            <ALinkView />
            <ALinkEdit />
            <ALinkDelete @click="handleDelete(scope.row)" />
          </template>
        </ATableColumnOperate>
      </ATable>
    </AContent>
  </AContainer>
</template>
