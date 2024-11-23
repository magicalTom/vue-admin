<script setup lang="ts">
import { AButtonAdd, AButtonDelete } from '@/components/AButton';
import AContainer, { AContent } from '@/components/AContainer';
import { DialogUtils } from '@/components/ADialog';
import { ATableToolbar } from '@/components/ATable';
import Auth from '@/components/Auth';
import Edit from './Edit.vue';

const handleClick = () => {
  DialogUtils.create(Edit);
};
</script>

<template>
  <AContainer row>
    <AContent class="w-[200px]"> ss </AContent>
    <AContainer>
      <AContent>
        <ATableToolbar>
          <AButtonAdd @click="handleClick" />
          <Auth auth="*">
            <AButtonDelete />
          </Auth>
        </ATableToolbar>
      </AContent>
    </AContainer>
  </AContainer>
</template>
