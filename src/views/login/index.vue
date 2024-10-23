<script setup lang="ts">
import { AButtonClose, AButtonConfirm } from '@/components/AButton';

const handleClick = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  });
};
</script>

<template>
  <div>
    <AButtonClose />
    <AButtonConfirm :submit="handleClick" />
  </div>
</template>
