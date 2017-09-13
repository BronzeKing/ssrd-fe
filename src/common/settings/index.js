/**
 * 全局设置
 */

let debug = process.env.NODE_ENV === 'development';
export const apiUrl = debug ? 'api' : 'https://api.mum5.cn';
