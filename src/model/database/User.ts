import field from '@/core/decorator/decorators/field';
import form from '@/core/decorator/decorators/form';

export default class User {
  /**
   * # 用户名
   */
  @form({
    itemElement: {
      rules: [{ required: true, message: '请输入账号', trigger: 'blur' }],
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
  password!: string;
}
