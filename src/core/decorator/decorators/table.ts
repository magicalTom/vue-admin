/* eslint-disable @typescript-eslint/no-explicit-any */
import Decorator from '../helper/Decorator';
import ClassConstructor from '../interface/ClassConstructor';
import ITable from '../interface/ITable';

const buildKey = (key: any) => `table_${key}`;

export default function table(config: ITable) {
  return function (target: any, property: any) {
    Decorator.setProperty(target, buildKey(property), config);
  };
}

export function getTableConfigByInstance<T>(target: T, property: keyof T) {
  return Decorator.getProperty(target, buildKey(property)) as ITable;
}

export function getTableConfigByClass<T>(target: ClassConstructor<T>, property: keyof T) {
  return getTableConfigByInstance(new target(), property);
}
