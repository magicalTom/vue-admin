interface IConstants {
  label: string;
  value: unknown;
  color?: string;
}

export const constants = {
  getByValue<T extends IConstants>(source: T[], value: T['value']) {
    return source.find((item) => item.value === value);
  },
  verify: [
    { label: '通过', value: 'pass', color: '' },
    { label: '驳回', value: 'reject', color: '' },
  ],
};
