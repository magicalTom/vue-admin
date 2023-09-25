import { FormRules } from 'element-plus';
import { getFormConfigByInstance } from '../decorators/form';

export function buildFormRules<T extends object>(target: T, keys?: (keyof T)[]) {
  const _keys = (keys ? keys : Object.keys(target)) as (keyof T)[];

  return _keys.reduce<FormRules>((pre, key) => {
    const formField = getFormConfigByInstance(target, key);
    if (formField?.itemElement?.rules) {
      return { ...pre, [key]: formField.itemElement.rules };
    }
    return pre;
  }, {});
}
