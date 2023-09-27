import { FormItemProps } from 'element-plus';

export interface IFormItem extends Partial<Omit<FormItemProps, 'label' | 'prop'>> {}

export default interface IForm {
  formItem: IFormItem;
}
