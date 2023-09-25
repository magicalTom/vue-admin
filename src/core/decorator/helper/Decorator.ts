/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Decorator {
  static setProperty(target: any, key: string, value: any) {
    Reflect.defineProperty(target, key, {
      value: value,
      enumerable: false,
      configurable: true,
      writable: false,
    });
  }

  static getProperty(target: any, key: string) {
    return Reflect.get(target, key);
  }
}
