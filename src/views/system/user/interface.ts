export interface Form {
  username: string;
  age: number | null;
}

export interface State {
  loading: boolean;
  list: string[];
  form: Form;
}
