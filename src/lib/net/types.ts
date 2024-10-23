export interface RootObject<T> {
  data: T;
  code: string;
  msg: string | null;
}

export interface Page<T> {
  records: T[];
  total: number;
  current: number;
  size: number;
}

export type PageRootObject<T> = RootObject<Page<T>>;
