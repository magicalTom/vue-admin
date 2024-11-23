<script setup lang="ts">
import { AButtonClose, AButtonConfirm } from '@/components/AButton';
import ADialog, { ADialogTip } from '@/components/ADialog';

const visible = ref(true);
</script>

<template>
  <ADialog v-model="visible" title="Title">
    <el-descriptions title="xx" border>
      <el-descriptions-item label="aa">bb</el-descriptions-item>
      <el-descriptions-item label="aa">bb</el-descriptions-item>
      <el-descriptions-item label="aa">bb</el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <div class="flex items-center justify-between">
        <ADialogTip> 这事提示 </ADialogTip>
        <div>
          <AButtonClose v-model:visible="visible" />
          <AButtonConfirm />
        </div>
      </div>
    </template>
  </ADialog>
</template>
