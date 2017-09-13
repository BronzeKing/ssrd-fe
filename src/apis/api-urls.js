/**
 * API ur集合
 */

import { apiUrl } from 'settings';

export default {
    // 登录注册相关接口
    login:      `${apiUrl}/token`,                                 // 登录接口
    register:   `${apiUrl}/signup`,                              // 注册接口

    // 新闻
    news:       `${apiUrl}/news`,                                            // 获取新闻

    // 关于我们
    recruitments:       `${apiUrl}/recruitments`                 // 招聘

};
