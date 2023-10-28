<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    active-text-color="#ffd04b"
    background-color="#333"
    text-color="#fff"
  >
    <el-menu-item index="1">
      <el-icon>
        <Location />
      </el-icon>
      <template #title>用户</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><ChatDotRound /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
defineProps<{ isCollapse: boolean }>();
</script>

<style lang="scss">
.el-menu {
  height: 100%;
}
</style>
