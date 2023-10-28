<template>
  <div class="table-container">
    <div class="top" v-if="isHasSlotKey('top')">
      <slot name="top" />
    </div>
    <slot />
    <el-pagination small background layout="prev, pager, next, sizes, jumper" :total="50" />
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();
const slotKeys = Object.keys(slots);

const isHasSlotKey = (key: string) => slotKeys.includes(key);
</script>

<style scoped lang="scss">
.table-container {
  background-color: white;
  padding: 20px;
  height: 100%;
  overflow: hidden;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .top {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .el-pagination {
    margin-top: 20px;
  }
}
</style>
