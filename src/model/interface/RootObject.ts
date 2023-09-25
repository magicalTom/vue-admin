export default interface RootObject<T> {
  code: string;
  msg: string | null;
  data: T;
}
