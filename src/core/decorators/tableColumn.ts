/* eslint-disable @typescript-eslint/no-explicit-any */
import Decorator from '../helper/Decorator';
import ITableColumn from '../interface/ITableColumn';

const buildKey = (property: any) => `table_column_${property}`;

export default function tableColumn<T>(config: ITableColumn<T>) {
  return function (target: any, property: any) {
    Decorator.setProperty(target, buildKey(property), config);
  };
}

export function getTableColumnConfig<T>(target: T, property: keyof T) {
  return Decorator.getProperty(target, buildKey(property)) as ITableColumn<T>;
}
