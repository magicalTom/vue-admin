/* eslint-disable @typescript-eslint/no-explicit-any */
import Decorator from '../helper/Decorator';
import IForm from '../interface/IForm';

const buildKey = (property: any) => `form_${property}`;

export default function form(config: IForm) {
  return function (target: any, property: string) {
    Decorator.setProperty(target, buildKey(property), config);
  };
}

export function getFormConfig<T>(target: T, property: keyof T) {
  return Decorator.getProperty(target, buildKey(property)) as IForm;
}
