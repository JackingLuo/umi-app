/**
 * axios的二次封装
 */
import axios from 'axios';
// import qs from 'qs';//序列化工具,axios已经下载，可直接引用。什么时候需要序列化？post的请求格式为form-data时使用，即content-type为application/x-www-form-urlencoded时使用；

//公共请求头
// const BASE_URL = process.env.NODE_ENV === 'development' ? 'https://test.com' : '';

const httpCreater = (config) => {

    const createConfig = {
        // baseURL:BASE_URL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json'
        },
        // auth: {
        //     username: 'janedoe',
        //     password: 's00pers3cret'
        // },
        ...(config || {}),
    };
    
    //注册请求实例
    const instance = axios.create(createConfig);

    //请求拦截
    instance.interceptors.request.use(function(config) {
        // 对请求数据做些什么
        return config;
    }, function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    //响应拦截
    instance.interceptors.response.use(function(response) {
        // 对响应数据做点什么
        return response;
    }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    const request = async (config) => {
        let requestBack;
        if (config?.onBeforeRequest){
            const res = await config.onBeforeRequest();
            if (res === false){ return; }
        }
        requestBack = await instance.request(config);
        // if (config?.onAfterRequest){
        //     await config.onAfterRequest(requestBack);
        // }
        return requestBack;
    };
    
    return {
        get instance() {
            return instance;
        },
        get(url, params, opts = {}){
            const config = {
                ...opts,
                method : 'get',
                url : url,
                params : params
            };
            return request(config);
        },
        post(url, params, opts = {}) {
            const config = {
                ...opts,
                method : 'post',
                url : url,
                data : params
            };
            return request(config);
        },
    };
};

const request = httpCreater();

export default request;