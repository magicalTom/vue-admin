import { isHasAuth } from './utils';

const Auth = defineComponent({
  name: 'Auth',
  props: {
    auth: {
      type: String,
      default: '',
    },
  },
  computed: {
    _isHasAuth() {
      return isHasAuth(this.auth);
    },
  },
  render() {
    return this._isHasAuth ? this.$slots.default?.() : null;
  },
});

export default Auth;
