/**
 * 这里时用来放ajax封装的。
 */
'use strict';
let qs = require('qs');
let axios = require('axios');
let assign = require('./_extends').assign;

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
    }
};

class Ajax {
    constructor (params) {
        this.params = params;
    }
    get () {
        return 'it s a get methods';
    }
    post () {
        return 'it s a post methods';
    }
}

export default new Ajax();
