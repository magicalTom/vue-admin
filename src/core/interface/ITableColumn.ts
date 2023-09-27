/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumnCtx } from 'element-plus';

export default interface ITableColumn<T = any> extends Omit<Partial<TableColumnCtx<T>>, 'label' | 'prop'> {}
