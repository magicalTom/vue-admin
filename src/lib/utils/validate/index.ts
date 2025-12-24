import validator, { type MobilePhoneLocale } from 'validator';

const _defaultLanguage: 'any' | MobilePhoneLocale | MobilePhoneLocale[] = 'zh-CN';

const ValidateUtils = {
  isMobile(phone: string) {
    return validator.isMobilePhone(phone, _defaultLanguage);
  },
  isIdentityCard(value: string) {
    return validator.isIdentityCard(value, _defaultLanguage);
  },
};

export default ValidateUtils;
