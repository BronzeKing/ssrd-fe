/**
 * API ur集合
 */

import { apiUrl } from 'settings';

export default {
    // 登录注册相关接口
    login:      `${apiUrl}/Merchant/login`,                                 // 登录接口
    register:   `${apiUrl}/Merchant/Register`,                              // 注册接口

    // 新闻
    news:       `${apiUrl}/news`                                            // 获取新闻
};
