/**
 * 这里时用来放ajax封装的。
 */
'use strict';
import qs           from 'qs';
import axios        from 'axios';
import { assign }   from './extends';
import logger       from './logger';
import router       from 'routers';

const _priviate = {
    // 服务端状态码
    StatusCodes: {
        success: 200,               // 成功
        failure: 404,               // 失败
        invalidParam: 400,          // 参数验证失败
        sessionLost: 401,           // 会话丢失
        invalidCredential: 402,     // 无效的凭证
        unauthorized: 403,          // 未授权
        invalidSign: 405,           // 无效的签名
        serverError: 500            // 服务器异常
    },
    getTimestamp () {
        return (Date.parse(new Date()) / 1000).toString();
    },
    defaultSettings: {
        // baseURL: 'api',               // 因为我本地做了反向代理
        timeout: 10000,
        responseType: 'json',
        withCredentials: true,      // 是否跨域请求携带cookies
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }
};

const Axios = axios.create(_priviate.defaultSettings);

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
        console.log('config', config);
        // 在发送请求之前做某件事
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            // 序列化
            config.data = qs.stringify(config.data, { arrayFormat: 'indices' });
        }

        // 若是有做鉴权token , 就给头部带上token
        if (localStorage.token) {
            config.headers.Authorization = localStorage.token;
        }
        return config;
    },
    error => {
        // let request = Axios.interceptors.request;
        console.log('error', error);
        // logger.error('ajax', '参数错误', { url: request.url, request: request, reponse: error });
        // return Promise.reject(error.data.error.message);
        return Promise.reject(error.data);
    }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        console.log('res', res);
        // 对响应数据做些事
        if (res.data && !res.data.success) {
            // Message({ //  饿了么的消息弹窗组件,类似toast
            //     showClose: true,
            //     message: res.data.error.message.message
            //         ? res.data.error.message.message
            //         : res.data.error.message,
            //     type: 'error'
            // });
            return Promise.reject(res.data);
        }
        return res;
    },
    error => {
        console.log('resError', error);
        // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
        // 直接丢localStorage或者sessionStorage
        if (!window.localStorage.getItem('loginUserBaseInfo')) {
            // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
            router.push({
                path: '/login'
            });
        } else {
            // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
            // 乖乖的返回去登录页重新登录
            // let lifeTime =
            //     JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime *
            //     1000;
            // let nowTime = (new Date()).getTime(); // 当前时间的时间戳
            // if (nowTime > lifeTime) {
            //     Message({
            //         showClose: true,
            //         message: '登录状态信息过期,请重新登录',
            //         type: 'error'
            //     });
            //     router.push({
            //         path: '/login'
            //     });
            // }
        }
        // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
        // if (error.response.status === 403) {
        //     router.push({
        //         path: '/error/403'
        //     });
        // }
        // if (error.response.status === 500) {
        //     router.push({
        //         path: '/error/500'
        //     });
        // }
        // if (error.response.status === 502) {
        //     router.push({
        //         path: '/error/502'
        //     });
        // }
        // if (error.response.status === 404) {
        //     router.push({
        //         path: '/error/404'
        //     });
        // }
        // 返回 response 里的错误信息
        return Promise.reject(error.data);
    }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, '$http', { value: Axios });
    }
};

// export default new Ajax();
