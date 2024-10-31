import axios from 'axios';

const instance = axios.create({});

instance.interceptors.response.use((response) => {
  return response.data;
});

const net = {
  async get<T>(...args: Parameters<typeof instance.get>) {
    const res = await instance.get<T>(...args);
    return res.data;
  },
  async post<T>(...args: Parameters<typeof instance.post>) {
    const res = await instance.post<T>(...args);
    return res.data;
  },
  async postForm<T>(...args: Parameters<typeof instance.postForm>) {
    const res = await instance.postForm<T>(...args);
    return res.data;
  },
};

export default net;
