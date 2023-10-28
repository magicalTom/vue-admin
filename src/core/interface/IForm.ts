/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormItemProps, InputProps } from 'element-plus';

export interface IFormItem extends Partial<Omit<FormItemProps, 'label' | 'prop'>> {}

export interface InputElProps {
  type: 'input';
  props: Partial<Omit<InputProps, 'id' | 'modelValue'>>;
}

export interface SelectElProps {
  type: 'select';
  props: {
    placeholder?: string;
    options?: Record<string, any>[];
    remote?: () => Promise<any>;
    type?: 'password' | 'text' | 'radio' | 'checkbox';
  };
}

export default interface IForm {
  formItem?: IFormItem;
  el?: InputElProps | SelectElProps;
}
