import { FormItemProps, InputProps, SelectContext } from 'element-plus';

export interface IFormItem extends Partial<Omit<FormItemProps, 'label' | 'prop'>> {}

export interface InputEl {
  type: 'input';
  props?: Partial<Omit<InputProps, 'modelValue'>>;
}

export interface SelectEl {
  type: 'select';
  props: SelectContext;
}

export default interface IForm {
  formItem?: IFormItem;
  el?: InputEl | SelectEl;
}
