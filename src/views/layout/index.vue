<template>
  <el-container class="layout-container">
    <el-aside width="200px">
      <Menu :isCollapse="false" />
    </el-aside>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Menu from './Menu.vue';
</script>

<style lang="scss">
.layout-container {
  height: 100vh;
  .el-header {
    padding: 0;
  }
  .el-main {
    background-color: #eee;
  }
}
</style>
