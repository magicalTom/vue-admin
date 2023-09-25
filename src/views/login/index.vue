<template>
  <div class="container">
    <el-form ref="formRef" :model="form" :rules="rules" @submit.prevent="handleSubmit">
      <div class="title">管理系统</div>
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" type="password" placeholder="username" />
      </el-form-item>
      <el-form-item>
        <el-button nativeType="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/pinia/user';
import { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const formRef = ref<FormInstance>();
const form = reactive({
  username: '',
  password: '',
});
const rules = reactive<FormRules<typeof form>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const handleSubmit = async () => {
  await formRef.value?.validate(async (valid) => {
    if (valid) {
      await userStore.login(form);
      router.replace('/');
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: rgb(71, 70, 70);
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    padding: 20px 20px 0 20px;
    width: 300px;
    background-color: white;
    border-radius: 10px;
    .title {
      font-size: 26px;
      text-align: center;
      margin-bottom: 20px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
