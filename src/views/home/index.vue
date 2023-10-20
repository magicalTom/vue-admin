<template>
  <div>
    <AInput v-model="username" :entity="User" field="username">
      <template #prefix>
        <span>https://</span>
      </template>
    </AInput>

    <ASelect v-model="username" :entity="User" field="password" :options="[{ label: 'hh', value: 'value' }]" />
  </div>
</template>

<script setup lang="ts">
import AInput from '@/core/components/input/a-input.vue';
import ASelect from '@/core/components/select/a-select.vue';
import User from '@/model/database/User';
import { ref } from 'vue';

const username = ref();
</script>
