<script setup lang="ts">
withDefaults(
  defineProps<{
    row?: boolean;
  }>(),
  {
    row: false,
  },
);
</script>

<template>
  <div class="flex overflow-hidden h-full w-full gap-[12px]" :class="[{ 'flex-col': !row }]">
    <slot />
  </div>
</template>
