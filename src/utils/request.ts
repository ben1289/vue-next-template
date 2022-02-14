import axios from 'axios';
import { getToken } from './auth';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

/**
 * request拦截器
 */
service.interceptors.request.use(
  (config) => {
    const configCopy = { ...config };
    const token = getToken();
    if (token && configCopy.headers) {
      configCopy.headers.Authorization = `Bearer ${token}`;
    }
    return configCopy;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * response拦截器
 */
service.interceptors.response.use(
  (res) => {
    const { code } = res.data.result;
    if (code === 401) {
      // TODO: 提示登录过期，可选择跳转登录页
      return Promise.reject(
        new Error('无效的会话，或者会话已过期，请重新登录。')
      );
    }
    if (code === 500) {
      // TODO: 提示错误信息
      const msg = res.data.result.msg || '服务器错误';
      return Promise.reject(new Error(msg));
    }
    if (code !== 200) {
      // TODO: 提示未知错误
      const msg = res.data.result.msg || '未知错误';
      return Promise.reject(new Error(msg));
    }
    return res.data;
  },
  (error) => {
    const { message } = error;
    if (message.includes('timeout')) {
      // TODO: 提示 网络超时
    } else if (message.includes('Network Error')) {
      // TODO: 提示 网络连接错误
    } else if (message.includes('Request failed with status code')) {
      // TODO: 提示 `系统接口${message.substring(message.length - 3)}异常`
    }
    return Promise.reject(error);
  }
);

export default service;
