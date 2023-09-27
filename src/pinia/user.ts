import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
  }),
  actions: {},
  persist: [{ paths: ['token'], storage: window.localStorage }],
});
