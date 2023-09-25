import { FormItemRule } from 'element-plus';

export default interface IFormField {
  itemElement: {
    labelWidth?: string | number;
    required?: boolean;
    rules?: Array<FormItemRule>;
    error?: string;
    showMessage?: boolean;
  };
}
