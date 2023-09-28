import { FormRules } from 'element-plus';
import { getFormConfig } from '../decorators/form';

export function buildFormRules<T extends object>(target: T, keys?: (keyof T)[]) {
  const _keys = (keys ? keys : Object.keys(target)) as (keyof T)[];

  return _keys.reduce<FormRules>((pre, key) => {
    const formConfig = getFormConfig(target, key);
    if (formConfig?.formItem?.rules) {
      return { ...pre, [key]: formConfig.formItem.rules };
    }
    return pre;
  }, {});
}
