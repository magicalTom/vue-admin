<script setup lang="ts">
import AContainer, { AContent } from '@/components/AContainer';
import SearchForm from '@/components/AContainer/src/SearchForm.vue';
import AEditor from '@/components/AEditor';

const html = ref('');
const form = reactive({
  address: '',
});

watch(html, (value) => {
  console.log(value);
});
</script>

<template>
  <AContainer>
    <SearchForm :model="form">
      <el-form-item prop="address">
        <el-input v-model="form.address" placeholder="placeholder" />
      </el-form-item>
    </SearchForm>
    <AContent>
      <AEditor v-model="html" />
    </AContent>
  </AContainer>
</template>
