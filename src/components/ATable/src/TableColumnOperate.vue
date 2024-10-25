<script setup lang="ts"></script>

<template>
  <el-table-column label="操作" fixed="right" width="180">
    <div class="flex items-center gap-x-[12px]">
      <slot />
    </div>
  </el-table-column>
</template>
