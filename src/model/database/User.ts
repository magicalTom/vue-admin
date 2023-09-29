import field from '@/core/decorators/field';
import form from '@/core/decorators/form';
import tableColumn from '@/core/decorators/tableColumn';

export default class User {
  /**
   * # 用户名
   */
  @form({
    formItem: {
      rules: [{ required: true, message: 'error message', trigger: 'blur' }],
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
  @tableColumn({ sortable: true })
  password!: string;
}
