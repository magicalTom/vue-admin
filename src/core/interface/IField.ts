/* eslint-disable @typescript-eslint/no-explicit-any */
import ClassConstructor from './ClassConstructor';

export default interface IField {
  /**
   * # 中文名
   */
  label: string;

  /**
   * # 字段类型
   */
  type?: ClassConstructor;

  /**
   * # 默认值
   */
  default?: any;
}
