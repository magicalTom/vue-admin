const HideUtils = {
  mobile(value: string) {
    return value.replace(/(^\d*)\d{4}(\d*)$/, '$1****$2');
  },
};

export default HideUtils;
