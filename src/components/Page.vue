<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
</style>
