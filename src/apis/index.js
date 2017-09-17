/**
 * 改文件主要用来导出接口相关方法
 */
// import Vue from 'vue';
import API from './api-urls';
import ajax from 'utils/ajax';

let send = (options, config, url, method) => {
    // 如果未传入url以及参数抛出异常
    // if (!url || !options) {
    if (!url) {
        throw new Error('url is null.');
        // throw new Error('url or options is null.');
    }

    // 如果没有设置请求方式默认请求方式为POST
    method = method || 'post';

    // 返回promise实例由用户处理
    return ajax.Axios[method](url, options, config);
};

/* 登录注册相关接口 */
export const login          = (options, config) => send(options, config, API.login);                          // 登录接口
export const register       = (options, config) => send(options, config, API.register);                       // 注册接口
export const logout         = (options, config) => send(options, config, API.logout);                         // 注销接口

/* 新闻 */
export const getNews        = (options, config) => send(options, config, API.news, 'post');                   // 获取新闻

/* 关于我们 */
export const recruitments   = (options, config) => send(options, config, API.recruitments, 'get');            // 招聘
export const jobs           = (options, config) => send(options, config, API.jobs, 'post');                   // 提交简历

/* 行业链接 */
export const industryLink   = (options, config) => send(options, config, API.industryLink, 'get');            // 获取行业链接

/* 文档列表(荣誉资质和合作伙伴) */
export const getDocuments   = (options, config) => send(options, config, API.documents, 'get');            // 获取文档列表
