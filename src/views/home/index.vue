<template>
  <div>
    <ATable :data="[{}]" :entity="User">
      <template #right>
        <el-table-column label="操作">
          <el-button type="danger">delete</el-button>
        </el-table-column>
      </template>
    </ATable>
  </div>
</template>

<script setup lang="ts">
import ATable from '@/core/components/table/a-table.vue';
import User from '@/model/database/User';
</script>
