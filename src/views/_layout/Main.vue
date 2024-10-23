<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<template>
  <el-container class="h-screen">
    <el-aside width="200px">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main class="bg-[var(--el-bg-color-page)] !p-[12px]">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
