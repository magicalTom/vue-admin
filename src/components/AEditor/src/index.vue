<script setup lang="ts">
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
// @ts-ignore
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';

const toolbarConfig: Partial<IToolbarConfig> = {};
const editorConfig: Partial<IEditorConfig> = { placeholder: '请输入内容...' };

const modelValue = defineModel({
  type: String,
  default: '',
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>();

const handleUpdateModelValue = (value: string) => {
  modelValue.value = value;
};

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
</script>

<template>
  <div class="border border-[#ccc]">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" mode="default" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      :modelValue="modelValue"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
      @update:modelValue="handleUpdateModelValue"
    />
  </div>
</template>
