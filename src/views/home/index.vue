<template>
  <div>
    <ATable :data="[{ username: 'user', password: 'pas' }]" :entity="User" />
  </div>
</template>

<script setup lang="ts">
import ATable from '@/core/components/a-table.vue';
import User from '@/model/database/User';
</script>
