import axios from 'axios';
import { getToken } from './auth';

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

/**
 * 处理状态码
 * @param code 状态码
 * @param msg 提示消息
 */
function statusCodeHandle(code: number, msg: string): void {
  if (code === 401) {
    window.$dialog.warning({
      title: '提示',
      content: '登录状态已过期，您可以继续留在该页面，或者重新登录',
      positiveText: '重新登录',
      negativeText: '留在当前',
      onPositiveClick() {
        // TODO: 跳转登录页
      },
    });
    throw new Error('无效的会话，或者会话已过期，请重新登录。');
  } else if (code === 500) {
    window.$message.error(msg || '服务器错误');
    throw new Error(msg);
  } else if (code !== 200) {
    if (msg.includes('timeout')) {
      window.$message.error('网络连接超时');
    } else if (msg.includes('Network Error')) {
      window.$message.error('网络连接错误');
    } else if (msg.includes('Request failed with status code')) {
      window.$message.error(`网络请求${msg.substring(msg.length - 3)}异常`);
    } else {
      window.$message.error(msg || '未知错误');
    }
    throw new Error(msg);
  }
}

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
    const { code, msg } = res.data.status;
    try {
      statusCodeHandle(code, msg);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    const { status: code, message: msg } = error;
    try {
      statusCodeHandle(code, msg);
      return Promise.reject(error);
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

export default service;
