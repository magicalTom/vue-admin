/* eslint-disable @typescript-eslint/no-explicit-any */
import Decorator from '../helper/Decorator';
import ClassConstructor from '../interface/ClassConstructor';
import IFormField from '../interface/IFormField';

const buildKey = (property: any) => `form_${property}`;

export default function form(config: IFormField) {
  return function (target: any, property: string) {
    Decorator.setProperty(target, buildKey(property), config);
  };
}

export function getFormConfigByInstance<T>(target: T, property: keyof T) {
  return Decorator.getProperty(target, buildKey(property)) as IFormField;
}

export function getFormConfigByClass<T>(target: ClassConstructor<T>, property: keyof T) {
  return getFormConfigByInstance(new target(), property);
}
