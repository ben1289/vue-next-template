import request from '@/utils/request';

/**
 * 登录
 * @param data
 */
export function login(data: LoginParams) {
  return request({
    url: '/login',
    method: 'POST',
    data,
  });
}

/**
 * 服务状态-401
 */
export function statusSessionInvalid() {
  return request({
    url: '/status/sessionInvalid',
    method: 'GET',
  });
}

/**
 * 服务状态-500
 */
export function statusServiceError() {
  return request({
    url: '/status/serviceError',
    method: 'GET',
  });
}

/**
 * 网络状态-401
 */
export function networkSessionInvalid() {
  return request({
    url: '/network/sessionInvalid',
    method: 'GET',
  });
}

/**
 * 网络状态-500
 */
export function networkServiceError() {
  return request({
    url: '/network/serviceError',
    method: 'GET',
  });
}
