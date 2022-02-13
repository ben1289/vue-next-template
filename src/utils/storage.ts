/**
 * window.localStorage 浏览器永久缓存
 * @method get 获取永久缓存
 * @method set 设置永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
export const Local = {
  get(key: string) {
    return window.localStorage.getItem(key);
  },
  set(key: string, val: any) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

/**
 * window.sessionStorage 浏览器临时缓存
 * @method get 获取临时缓存
 * @method set 设置临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
export const Session = {
  get(key: string) {
    window.sessionStorage.getItem(key);
  },
  set(key: string, val: any) {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  },
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
  clear() {
    window.sessionStorage.clear();
  },
};
