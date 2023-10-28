<template>
  <div class="search-container">
    <el-form inline :model="model">
      <slot />
      <el-form-item>
        <el-button @click="handleReset">重置</el-button>
        <el-button type="primary" @click="handleSearch">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: 'search'): void;
  (e: 'reset'): void;
}>();
defineProps<{ model: object }>();

const handleReset = () => {
  emits('search');
};

const handleSearch = () => {
  emits('reset');
};
</script>

<style scoped lang="scss">
.search-container {
  padding: 20px 20px 0 20px;
  background-color: white;
  display: flex;
  align-items: flex-start;
}
</style>
