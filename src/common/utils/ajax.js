/**
 * 这里时用来放ajax封装的。
 * 该封装参考 https://juejin.im/post/59a22e71518825242c422604?utm_source=gold_browser_extension
 */
'use strict';
import qs           from 'qs';
import axios        from 'axios';
import { assign }   from './extends';
import logger       from './logger';
import member       from './member';
import router       from 'routers';

const _priviate = {
    // 服务端状态码
    // StatusCodes: {
    //     success: 200,               // 成功
    //     failure: 404,               // 失败
    //     invalidParam: 400,          // 参数验证失败
    //     sessionLost: 401,           // 会话丢失
    //     invalidCredential: 402,     // 无效的凭证
    //     unauthorized: 403,          // 未授权
    //     invalidSign: 405,           // 无效的签名
    //     serverError: 500            // 服务器异常
    // },
    // getTimestamp () {
    //     return (Date.parse(new Date()) / 1000).toString();
    // },
    defaultSettings: {
        // baseURL: 'api',               // 因为我本地做了反向代理
        timeout: 10000,
        responseType: 'json',
        withCredentials: true,      // 是否跨域请求携带cookies
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    },
    requestOptions: null
};

const Axios = axios.create(_priviate.defaultSettings);

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
    config => {
        // console.log('config', config);
        _priviate.requestOptions = config;
        // 在发送请求之前做某件事
        if (
            config.method === 'post' ||
            config.method === 'put' ||
            config.method === 'delete'
        ) {
            let isForm = config.data instanceof FormData;
            // 数据是否为表单类型
            isForm
                // 设置请求类型为表单
                ? (config.headers['Content-Type'] = 'multipart/form-data')
                // 序列化
                : (config.data = qs.stringify(config.data.params || config.data, { arrayFormat: 'indices' }));
        }

        // 若是有做鉴权token , 就给头部带上token
        if (localStorage.token) {
            config.headers.Authorization = localStorage.token;
        }
        return config;
    },
    error => {
        // let request = Axios.interceptors.request;
        // console.log('error', error);
        // logger.error('ajax', '参数错误', { url: request.url, request: request, reponse: error });
        // return Promise.reject(error.data.error.message);
        return Promise.reject(error.request);
    }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
    res => {
        // console.log('res', res);
        // 对响应数据做些事
        // if (res.data && !res.data.success) {
            // Message({ //  饿了么的消息弹窗组件,类似toast
            //     showClose: true,
            //     message: res.data.error.message.message
            //         ? res.data.error.message.message
            //         : res.data.error.message,
            //     type: 'error'
            // });
        // return Promise.reject(res.data);
        // }
        return res.data;
    },
    error => {
        /* eslint-disable */
        console.log('===URL: ', JSON.stringify(_priviate.requestOptions.url));
        console.log('===RESPONSE: ', JSON.stringify(error.response));
        console.error('============== ErrorCode: ', JSON.stringify(error.response && error.response.status), "==============");
        console.error('pesponseError: ', JSON.stringify(error.response && error.response.data));
        /* eslint-enable */
        // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
        // 直接丢localStorage或者sessionStorage
        // if (!member.getCredential()) {
        //     // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
        //     router.push({
        //         path: '/login'
        //     });
        // }
        // 下面是接口回调的satus ,因为我做了一些错误页面,所以都会指向对应的报错页面
        if (error.response.status === 302) {
            router.push({
                path: error.response.data.url
            });
        }
        if (error.response.status === 403) {
            router.push({
                path: '/error/403'
            });
        }
        // 返回 response 里的错误信息
        return Promise.reject(error.response && error.response.data);
    }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, '$http', { value: Axios });
    },
    Axios   // 这里写的是为了apis里面可以引用这个页面的Axios实例
};

// export default new Ajax();
