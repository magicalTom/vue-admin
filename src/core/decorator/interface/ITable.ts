export default interface ITable {
  width?: number | string;
  minWidth?: number | string;
  fixed?: boolean | 'left' | 'right';
  sortable?: boolean;
}
