import axios from 'axios';

export const axiosAbortController = new AbortController();

const net = axios.create({
  baseURL: '',
  signal: axiosAbortController.signal,
});

net.interceptors.request.use((config) => {
  return config;
});

net.interceptors.response.use(
  (response) => {
    if (response.data.code === '00') return response;
    else return Promise.reject(response);
  },
  (error) => {
    switch (error.response.status) {
      case 500:
        alert('服务器错误');
        break;
    }
  },
);

export default net;
