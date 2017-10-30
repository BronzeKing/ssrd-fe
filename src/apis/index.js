/**
 * 该文件主要用来导出接口相关方法
 model 定义该接口的返回字段以及该接口的form参数校验的rules
 */

import API      from './api-urls';          // 接口URL
import Resource from './resource';          // 接口封装
import model    from './model';            // error model

/* 登录注册相关接口 */
// 接口用大写
export const Login          = new Resource(API.login, model.Login);                    // 登录接口
export const Register       = new Resource(API.register, model.Register);              // 注册接口
export const Logout         = new Resource(API.logout);                                 // 注销接口
export const Env            = new Resource(API.env);                                   // 获取系统配置

/* 关于我们 */
export const News           = new Resource(API.news, model.News);

/* 新闻 */
export const Recruitment   = new Resource(API.recruitments, model.Recruitment);

/* 行业链接 */
export const IndustryLink   = new Resource(API.industryLink);                           // 获取行业链接
export const Job           = new Resource(API.jobs, model.Job);                      // 提交简历

/* 文档列表(荣誉资质和合作伙伴) */
export const Documents      = new Resource(API.documents);

/* 系统展示 */
export const Systems        = new Resource(API.systems);                                // 获取系统展示
export const System         = new Resource(API.systems, model.System);                                // 获取系统展示
export const SystemCase     = new Resource(API.systemCase, model.SystemCase);                       // 案例展示列表

/* 案例展示 */
export const Faqs           = new Resource(API.faqs, model.Faqs);                       // 常见问题解答
export const OpVideo        = new Resource(API.opVideo, model.OpVideo);                       // 操作视频
export const Download        = new Resource(API.download, model.Download);                       // 文档下载

export const Product         = new Resource(API.product, model.Product);                       // 产品
export const Collect         = new Resource(API.collect);                                // 收藏

export const Password        = new Resource(API.password, model.Password);                                // 修改密码
export const Email           = new Resource(API.email, model.Email);                                // 修改或验证邮箱
export const Captcha         = new Resource(API.captcha, model.Email);                                // 验证码
export const User            = new Resource(API.user, model.User);                                // 用户
export const Message         = new Resource(API.message, model.Message);                                // 消息
export const Invitation      = new Resource(API.invitation, model.Invitation);                                // 消息
export const AuthorizeCode   = new Resource(API.authorizeCode, model.AuthorizeCode);                                // 消息
export const Profile         = new Resource(API.profile, model.Profile);                                // 个人资料
export const ProjectSign     = new Resource(API.projectSign, model.ProjectSign);                                // 个人资料
export const Project         = new Resource(API.project, model.Project);                                // 个人资料
