import { FormItemProps, InputProps } from 'element-plus';

export interface IFormItem extends Partial<Omit<FormItemProps, 'label' | 'prop'>> {}

export interface InputEl {
  type: 'input';
  props?: Partial<Omit<InputProps, 'modelValue'>>;
}

export interface SelectEl {
  type: 'select';
  props?: {
    multiple?: boolean;
    disabled?: boolean;
    valueKey?: string;
    size?: '' | 'large' | 'default' | 'small';
    clearable?: boolean;
    collapseTags?: boolean;
    collapseTagsTooltip?: boolean;
    multipleLimit?: boolean;
    name?: string;
    effect?: 'dark' | 'light';
    autocomplete?: string;
    placeholder?: string;
    filterable?: boolean;
  };
}

export default interface IForm {
  formItem?: IFormItem;
  el?: InputEl | SelectEl;
}
