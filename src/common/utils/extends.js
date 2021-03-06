'use strict';
// Object Assign 及 polify 深度复制对象 详细用法参考 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const assign = Object.assign || function (target) {
    for (let i = 1; i < arguments.length; i++) {
        let source = arguments[i];
        for (let key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
    }
    return target;
};

/**
 * 检测对象是否为空
 * @param height      [Object] 需要检测的对象类型数据
 * @return [Boolean] 返回对象是否为空的布尔值;
 */

const isEmptyObject = function (obj) {
    let t;
    for (t in obj) {
        return !1;
    }
    return !0;
};

/**
 * 获取网页参数键值对
 * @return [Object] 返回Url上的参数转换的对象;
 */
const getUrlParams = function () {
    let urlParam = {};

    if (window.location.search) {
        let url = window.location.search.slice(1, window.location.search.length).split('&');
        url.map(function (item) {
            let value = item.toLocaleLowerCase().split('=');
            urlParam[value[0]] = decodeURIComponent(value[1]);
        });
    }

    if (window.location.hash) {
        let startIndex = window.location.hash.indexOf('?');
        let url = window.location.hash.slice(startIndex !== -1 ? startIndex + 1 : 2, window.location.hash.length).split('&');

        url.map(function (item) {
            let value = item.toLocaleLowerCase().split('=');
            urlParam[value[0]] = decodeURIComponent(value[1]);
        });
    }

    return !isEmptyObject(urlParam) ? urlParam : '';
};

/**
 * 对象转换成url编码键值对
 * @return [String] 将对象类型的转换成URL编码，仅支持对象层级为1级的 不支持#单页获取参数;
 */
const toUrlParams = function (arg) {
    let urlParam = '';
    for (let key in arg) {
        urlParam += (key + '=' + arg[key] + '&');
    }
    // return urlParam ? encodeURIComponent(urlParam.slice(0, (urlParam.length-1))) : '';
    return urlParam ? urlParam.slice(0, (urlParam.length - 1)) : '';
};

const isMobileNumber = telephone => {
    let mobileReg = /^1[358]\d{9}$/;
    return mobileReg.test(telephone);
};

// 检测参数类型
const typeOf = obj => {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
};

const n2br = text => {
    return text && text.replace(/\n/g, '<br>');
};

export {
    assign,
    isEmptyObject,
    getUrlParams,
    toUrlParams,
    isMobileNumber,
    typeOf,
    n2br
};
