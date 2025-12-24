<script setup lang="ts">
import { AButtonAdd, AButtonDelete, AButtonEdit } from '@/components/AButton';
import AContainer, { AContent } from '@/components/AContainer';
import { DialogUtils } from '@/components/ADialog';
import { ATableToolbar } from '@/components/ATable';
import Auth from '@/components/Auth';
import { file } from '@/lib/file';
import axios from 'axios';
import Edit from './Edit.vue';
import { State } from './interface';

const state = reactive<State>({
  loading: false,
  list: [],
  form: {
    username: '',
    age: null,
  },
});
const ss = ref('');

const handleEdit = () => {
  state.loading = true;
  DialogUtils.create(Edit, {
    close() {},
  });
};

const handleRemove = () => {
  file.select();
};

const handleClick = async () => {
  const res = await axios.postForm(
    '/api/v2beta/stable-image/generate/ultra',
    {
      prompt: ss.value,
      output_format: 'webp',
    },
    {
      validateStatus: undefined,
      responseType: 'arraybuffer',
      headers: {
        Authorization: `Bearer sk-ALiaNzdnO6Ew5MGCrpJCyUjQCRpvIotA4PjVwPWO6O2CFEc7`,
        Accept: 'image/*',
      },
    },
  );

  console.log(res);

  const b = new Blob([res.data]);
  const url = URL.createObjectURL(b);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'aa.png';
  a.click();
};
</script>

<template>
  <AContainer row>
    <AContent class="w-[200px]"> </AContent>
    <AContainer>
      <AContent>
        <ATableToolbar>
          <AButtonAdd path="/name" />
          <Auth auth="*">
            <AButtonEdit @click="handleEdit" />
          </Auth>
          <Auth auth="*">
            <AButtonDelete @click="handleRemove" />
          </Auth>
        </ATableToolbar>
        <el-input v-model:model-value="ss" type="textarea" />
        <el-button @click="handleClick">生成</el-button>
      </AContent>
    </AContainer>
  </AContainer>
</template>
