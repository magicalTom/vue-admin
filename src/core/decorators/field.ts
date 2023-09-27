/* eslint-disable @typescript-eslint/no-explicit-any */
import Decorator from '../helper/Decorator';
import IField from '../interface/IField';

const buildKey = (property: unknown) => `field_${property}`;

export default function field(config: IField) {
  return function (target: any, property: string) {
    Decorator.setProperty(target, buildKey(property), config);
  };
}

export function getFieldConfig<T>(target: T, property: keyof T) {
  return Decorator.getProperty(target, buildKey(property)) as IField;
}

export function getFieldLabel<T>(target: T, property: keyof T) {
  const fieldConfig = getFieldConfig(target, property);
  return fieldConfig.label;
}
