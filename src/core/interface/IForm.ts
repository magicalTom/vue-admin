/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormItemProps } from 'element-plus';

export interface IFormItem extends Partial<Omit<FormItemProps, 'label' | 'prop'>> {}

export default interface IForm {
  formItem?: IFormItem;
  el?: {
    type: 'input' | 'select';
    props: {
      placeholder?: string;
      options?: Record<string, any>[];
      remote?: () => Promise<any>;
    };
  };
}
