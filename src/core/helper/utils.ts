import { getFieldConfig } from '../decorators/field';
import ClassConstructor from '../interface/ClassConstructor';

type Options = {
  isDefaultByType?: boolean;
};

export function classToInstance<T extends ClassConstructor>(clazz: T, options?: Options) {
  const instance = new clazz();

  for (const key in instance) {
    const fieldConfig = getFieldConfig(instance, key);

    if (options?.isDefaultByType && fieldConfig?.type) {
      switch (fieldConfig.type.name) {
        case 'String':
          instance[key] = '';
          break;
        case 'Array':
          instance[key] = [];
          break;
      }
    }
    if (fieldConfig?.default) instance[key] = fieldConfig.default;
  }

  return instance;
}
