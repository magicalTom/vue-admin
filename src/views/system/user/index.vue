<script setup lang="ts">
import { AButtonAdd, AButtonDelete, AButtonEdit } from '@/components/AButton';
import AContainer, { AContent } from '@/components/AContainer';
import SearchForm from '@/components/AContainer/src/SearchForm.vue';
import ADialog, { DialogUtils } from '@/components/ADialog';
import ATable, {
  ATableButtonDelete,
  ATableButtonEdit,
  ATableButtonView,
  ATableColumnOperate,
  ATableToolbar,
} from '@/components/ATable';

const handleClick = () => {
  DialogUtils.create(ADialog, { title: 'xx' });
};
</script>

<template>
  <AContainer>
    <SearchForm>
      <el-form-item>
        <el-input placeholder="name" />
      </el-form-item>
    </SearchForm>
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
