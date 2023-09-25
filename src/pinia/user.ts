import net from '@/core/net';
import RootObject from '@/model/interface/RootObject';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
  }),
  actions: {
    async login(form: unknown) {
      const res = await net.post<RootObject<{ token: string }>>('/login', form);
      this.token = res.data.data.token;
    },
  },
  persist: [{ paths: ['token'], storage: window.localStorage }],
});
