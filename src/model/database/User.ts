import field from '@/core/decorators/field';
import form from '@/core/decorators/form';

export default class User {
  /**
   * # 用户名
   */
  @form({
    formItem: {
      rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    },
    el: {
      type: 'input',
      props: {
        placeholder: '请输入用户名',
      },
    },
  })
  @field({
    label: '用户名',
  })
  username!: string;

  /**
   * # 密码
   */
  @field({
    label: '密码',
  })
  @form({
    formItem: {
      rules: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    },
    el: {
      type: 'input',
      props: {
        type: 'password',
        placeholder: '请输入密码',
      },
    },
  })
  password!: string;

  /**
   * # 性别
   */
  @field({ label: '性别' })
  @form({
    formItem: {
      rules: [{ required: true, message: '请选择性别', trigger: 'change' }],
    },
    el: {
      type: 'select',
      props: {
        placeholder: '请选择性别',
        options: [
          { label: '男', value: 1 },
          { label: '女', value: 0 },
          { label: '其他', value: -1 },
        ],
      },
    },
  })
  sex!: string;

  /**
   * # 电话
   */
  @field({ label: '电话' })
  @form({
    formItem: {
      rules: [{ required: true, message: '请输入电话', trigger: 'blur' }],
    },
    el: {
      type: 'input',
      props: {
        placeholder: '请输入电话',
      },
    },
  })
  phone!: string;
}
