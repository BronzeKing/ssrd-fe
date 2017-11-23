/**
 * 该文件主要用来导出接口相关方法
 model 定义该接口的返回字段以及该接口的form参数校验的rules
 */

import API from "./api-urls"; // 接口URL
import * as m from "./model"; //改为ts后的model
import { Resource } from "./resource"; // 改为ts后的Resoure

/* 登录注册相关接口 */
// 接口用大写
export const Login = new Resource(API.login, new m.Login({})); // 登录接口
export const Register = new Resource(API.register, new m.Register({})); // 注册接口
export const Env = new Resource(API.env, new m.Default({}), {}, true); // 获取系统配置

/* 关于关于我们*/
export const AboutUs = new Resource(API.aboutUs, new m.AboutUs({}), {}, true);
/* 关于新闻公告 */
export const News = new Resource(API.news, new m.News({}));
export const Faqs = new Resource(API.news, new m.News({})); // 常见问题解答

/* 新闻 */
export const Recruitment = new Resource(API.recruitments, new m.Recruitment({}));

/* 行业链接 */
export const IndustryLink = new Resource(API.industryLink, new m.IndustryLink({})); // 获取行业链接
export const Job = new Resource(API.jobs, new m.Job({})); // 提交简历

/* 文档列表(荣誉资质和合作伙伴) */
export const Documents = new Resource(API.documents, new m.Documents({}));

/* 系统展示 */
export const System = new Resource(API.systems, new m.System({}), {}, true); // 获取系统展示
export const SystemCase = new Resource(API.systemCase, new m.SystemCase({}), {}, true); // 案例展示列表

/* 案例展示 */
export const Video = new Resource(API.opVideo, new m.Documents({})); // 操作视频
export const Partner = new Resource(API.documents, new m.Documents({})); // 合作伙伴
export const Honor = new Resource(API.documents, new m.Documents({})); // 荣誉资质
export const Download = new Resource(API.download, new m.Documents({})); // 文档下载

export const Product = new Resource(API.product, new m.Product({})); // 产品
export const Collect = new Resource(API.collect, new m.Collected({})); // 收藏

export const Password = new Resource(API.password, new m.Password({})); // 修改密码
export const Email = new Resource(API.email, new m.Email({})); // 修改或验证邮箱
export const Credential = new Resource(API.credential, new m.Credential({})); // 修改或验证邮箱、手机
export const Captcha = new Resource(API.captcha, new m.Email({})); // 验证码
export const User = new Resource(API.user, new m.User({})); // 用户
export const Group = new Resource(API.group, new m.Group({})); // 部门
export const Message = new Resource(API.message, new m.Message({})); // 消息
export const Invitation = new Resource(API.invitation, new m.Invitation({})); // 邀请码
export const AuthorizeCode = new Resource(API.authorizeCode, new m.AuthorizeCode({})); // 授权码
export const Profile = new Resource(API.profile, new m.Profile({}), {}, true); // 个人资料
export const ProjectLog = new Resource(API.projectLog, new m.ProjectLog({})); // 项目日志
export const Project = new Resource(API.project, new m.Project({})); // 项目
export const ProjectCreate = new Resource(API.project, new m.Project({})); // 新建项目用到的model，用于与项目详情区别开
