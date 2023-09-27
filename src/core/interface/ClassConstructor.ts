/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface ClassConstructor<T = any> {
  new (...args: any[]): T;
}
