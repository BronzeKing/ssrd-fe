/**
 * 全局设置
 */

let debug = process.env.NODE_ENV === 'development';

// 接口地址
export const apiUrl = debug ? 'api' : 'https://api.mum5.cn';

// 百度地图秘钥
export const baiduMapAk = '6bqNZBAWAebz9dIpf07ts8TF2c17ThZc';
