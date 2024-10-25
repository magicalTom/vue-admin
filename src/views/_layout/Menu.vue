<script setup lang="ts">
const route = useRoute();

const path = computed(() => route.fullPath);
</script>

<template>
  <el-menu :default-active="path" class="h-full" router>
    <el-menu-item index="/editor">
      <template #title>Editor</template>
    </el-menu-item>
    <el-menu-item index="/user">
      <template #title>User</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
