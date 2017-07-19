/**
 * 改文件主要用来导出接口相关方法
 */

import API from './api-urls';
import { Najax } from 'utils/ajax';

let send = (options, url, method) => {
    // 如果未传入url以及参数抛出异常
    if (!url || !options) {
        throw new Error('url or options is null.');
    }

    // 如果没有设置请求方式默认请求方式为POST
    method = method || 'post';

    let request = {
        url: url,
        data: options.params,
        success (response) {
            // 调用回调函数
            options.success && options.success.call(options.scope || this, response);
        },
        failure: options.failure,
        complete: options.complete
    };

    // 开始发送请求
    Najax[method](request);
};

/* 登录注册相关接口 */
export const login      = (options) => { send(options, API.login); };                    // 登录接口
export const register   = (options) => { send(options, API.register); };                 // 注册接口
export const logout     = (options) => { send(options, API.logout); };                   // 注销接口
