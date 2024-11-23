import { ElMessage } from 'element-plus';

export default class ToastUtils {
  static success(msg: string = '操作成功') {
    ElMessage.success(msg);
  }

  static warning(msg?: string) {
    ElMessage.warning(msg);
  }

  static error(msg?: string) {
    ElMessage.error(msg);
  }
}
