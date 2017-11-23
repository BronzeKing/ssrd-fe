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
  * 用户
  */
    group: `${apiUrl}/groups`,
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
    /**
  * 项目列表 
  */
    project: `${apiUrl}/projects`,
    /**
  * 项目日志
  */
    projectLog: `${apiUrl}/projects/:projectId/logs`,
    /**
  * 授权码
  */
    authorizeCode: `${apiUrl}/authorizeCodes`
};