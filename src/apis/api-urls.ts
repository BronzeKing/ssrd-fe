/**
 * API url集合
 */

import { apiUrl } from "src/common/settings";

export default {
    // 登录注册相关接口
    /**
     * 登录
     */
    login: `${apiUrl}/login`,

    verifyToken: `${apiUrl}/token/verify`,
    token: `${apiUrl}/token/`,
    /**
     * 登出
     */
    logout: `${apiUrl}/logout`,
    /**
     * 注册
     */
    register: `${apiUrl}/register`,
    /**
     * 获取环境变量
     */
    env: `${apiUrl}/env`,

    /**
     * 获取关于我们
     */
    aboutUs: `${apiUrl}/aboutUs`,
    /**
     * 新闻
     */
    news: `${apiUrl}/news`,

    terminals: `${apiUrl}/terminals`,

    /**
     * 招聘信息
     */
    recruitments: `${apiUrl}/recruitments`,
    /**
     * 提交简历
     */
    jobs: `${apiUrl}/jobs`,

    /**
     * 行业链接
     */
    industryLink: `${apiUrl}/industryLinks`,

    /**
     * 文档列表(荣誉资质和合作伙伴)
     */
    documents: `${apiUrl}/documents`,
    medias: `${apiUrl}/medias`,

    // 上传文件的地址 如项目签证等
    docs: `${apiUrl}/attatchment`,

    /**
     * 系统展示
     */
    systems: `${apiUrl}/systems`,

    /**
     * 系统案例
     */
    systemCase: `${apiUrl}/systemCases`,

    /**
     * 获取常见问题解答
     */
    faqs: `${apiUrl}/faqs`,
    /**
     * 获取操作视频
     */
    opVideo: `${apiUrl}/documents`,
    /**
     * 获取文档下载
     */
    download: `${apiUrl}/documents`,
    /**
     * 产品
     */
    product: `${apiUrl}/products`,
    category: `${apiUrl}/categories`,
    /**
     * 收藏
     */
    collect: `${apiUrl}/collects`,

    /**
     * 更改密码
     */
    password: `${apiUrl}/password/change`,
    /**
     * 更改邮箱
     */
    email: `${apiUrl}/email/change`,
    /**
     * 更改邮箱、手机
     */
    credential: `${apiUrl}/credential`,
    /**
     * 更改验证码
     */
    captcha: `${apiUrl}/captcha`,
    /**
     * 用户
     */
    user: `${apiUrl}/users`,
    /**
     * 用户组（部门）
     */
    group: `${apiUrl}/groups`,
    /**
     * 购物车
     */
    cart: `${apiUrl}/carts`,
    /**
     * 消息
     */
    message: `${apiUrl}/messages`,
    /**
     * 个人资料
     */
    profile: `${apiUrl}/users/:userId/profile`,
    /**
     * 邀请码
     */
    invitation: `${apiUrl}/invitations`,
    exhibition: `${apiUrl}/exhibitions`,
    /**
     * 项目列表
     */
    project: `${apiUrl}/projects`,
    projectGroup: `${apiUrl}/projectGroups`,
    /**
     * 项目日志
     */
    projectLog: `${apiUrl}/projects/:projectId/logs`,

    /**
     * 授权码
     */
    authorizeCode: `${apiUrl}/authorizeCodes`,
    media: `${apiUrl}/media`
};
