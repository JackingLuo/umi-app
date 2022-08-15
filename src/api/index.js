/**
 * 请求集合
 */
import http from './http';

export const testGet = async (data) => {
    return http.get('/api/getLoginInfo', data);
};