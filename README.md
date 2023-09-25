## ⚡️ 简介

vue-app vite 是一个开源的中后台管理系统基础解决方案，基于 vue3、typescript、Element Plus、axios、Pinia 等主流技术开发。框架采用注解开发，极大的减少了开发成本，大大的提升了开发效率。

## ✨ 特性

- **高效**：注解开发，一处配置，全局使用
- **Vue3**： setup 最新的组合式 api
- **Typescript**：javascript 超集
- **Pinia**：传说中的 Vuex5
- **Scss**：配合 Element Plus
- **Eslint**：代码检查
- **Prettier**：代码风格统一
- **Axios**：网络请求

## 🚀 开发

```
# 配置
1、node -v 18.16.0
2、npm -v 9.5.1

# 安装依赖
npm i

# 启动项目
npm run dev
```

## 🔥 使用

> 1、注解配置变量

```typescript
class User {
  @form({
    item: {
      rules: [{ required: true, message: '请输入账号', trigger: 'change' }],
    },
  })
  @field({ label: '用户名' })
  username: string;
  password: string;
}
```

> 2、页面渲染

```typescript
// form 表单
<template>
   <el-form :model="user" :rules="rules">
      <el-form-item :label="getFieldLabel(user, 'username')">
         <el-input v-model="user.username"/>
      </el-form-item>
   </el-form>
</template>

<script setup>
// import ...
const user = reactive(new User())
const rules = buildFormRules(user)
</script>

// table 表格
<template>
   <a-table :data="[]" :entity="User"/>
</template>

<script setup>
</script>
```

## 💗 感谢 Star

如果你也喜欢这个项目，欢迎支持一个 Star！
