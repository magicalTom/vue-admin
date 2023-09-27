import field from '@/core/decorators/field';
import form from '@/core/decorators/form';

export default class User {
  /**
   * # 用户名
   */
  @form({
    formItem: {},
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
