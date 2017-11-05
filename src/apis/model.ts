import { Model, Provide } from "./baseModel";

export class AboutUs extends Model {
    // ID
    @Provide public id: number;
    // 简介
    @Provide public introduction: string;
    // 企业文化
    @Provide public culture: string;
    // 荣耀
    @Provide public honour: string;
    // 合作伙伴
    @Provide public cooperativePartner: string;
};

export class Credential extends Model {
    // ID
    @Provide public id: number;
    // user
    @Provide public user: User;
    // 类型
    @Provide public Type: string;
    // verified
    @Provide public verified: string;
};

export class User extends Model {
    // user
    @Provide public logentry: LogEntry;
    // 用户
    @Provide public auth_token: User;
    // user
    @Provide public social_auth: UserSocialAuth;
    // 所属用户
    @Provide public profile: User;
    // 所属用户
    @Provide public projects: Project;
    // 授权码对应用户
    @Provide public authorizecode: User;
    // 所属用户
    @Provide public authorizecodes: AuthorizeCode;
    // 邀请码所属用户
    @Provide public invitations: Invitation;
    // 受邀用户
    @Provide public invited: User;
    // 所属用户
    @Provide public collects: Collect;
    // user
    @Provide public credential: Credential;
    // ID
    @Provide public id: number;
    // password
    @Provide public password: string;
    // last login
    @Provide public last_login: string;
    // email address
    @Provide public email: string;
    // username
    @Provide public username: string;
    // Mobile Phone
    @Provide public mobile: string;
    // 用户权限
    @Provide public role: number;
    // date joined
    @Provide public created: string;
    // 状态
    @Provide public status: number;
};

export class LogEntry extends Model {
    // ID
    @Provide public id: number;
    // action time
    @Provide public action_time: string;
    // user
    @Provide public user: User;
    // content type
    @Provide public content_type: ContentType;
    // object id
    @Provide public object_id: string;
    // object repr
    @Provide public object_repr: string;
    // action flag
    @Provide public action_flag: string;
    // change message
    @Provide public change_message: string;
};

export class ContentType extends Model {
    // content type
    @Provide public permission: Permission;
    // content type
    @Provide public logentry: LogEntry;
    // ID
    @Provide public id: number;
    // app label
    @Provide public app_label: string;
    // python model class name
    @Provide public model: string;
};

export class Permission extends Model {
    // permissions
    @Provide public group: Group;
    // ID
    @Provide public id: number;
    // name
    @Provide public name: string;
    // content type
    @Provide public content_type: ContentType;
    // codename
    @Provide public codename: string;
};

export class Group extends Model {
    // ID
    @Provide public id: number;
    // name
    @Provide public name: string;
    // permissions
    @Provide public permissions: Permission;
};

export class Token extends Model {
    // 键
    @Provide public key: string;
    // 用户
    @Provide public user: User;
    // 已创建
    @Provide public created: string;
};

export class UserSocialAuth extends Model {
    // ID
    @Provide public id: number;
    // user
    @Provide public user: User;
    // provider
    @Provide public provider: string;
    // uid
    @Provide public uid: string;
    // extra data
    @Provide public extra_data: string;
};

export class Profile extends Model {
    // ID
    @Provide public id: number;
    // 所属用户
    @Provide public user: User;
    // 真实姓名
    @Provide public name: string;
    // 性别
    @Provide public gender: string;
    // 生日
    @Provide public birthday: string;
    // 所属公司
    @Provide public company: string;
    // 职位
    @Provide public position: string;
    // QQ号码
    @Provide public qq: string;
    // 地址
    @Provide public address: string;
    // 邀请码
    @Provide public code: string;
};

export class Project extends Model {
    // 所属项目
    @Provide public logs: ProjectLog;
    // ID
    @Provide public id: number;
    // 所属用户
    @Provide public user: User;
    // 项目名称
    @Provide public name: string;
    // 项目状态
    @Provide public status: number;
    // 背景图片
    @Provide public picture: any;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class ProjectLog extends Model {
    // ID
    @Provide public id: number;
    // 所属项目
    @Provide public project: Project;
    // 行为
    @Provide public action: number;
    // 内容
    @Provide public content: string;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
    // 附件
    @Provide public attatchment: Document;
};

export class Document extends Model {
    // 附件
    @Provide public projectlog: ProjectLog;
    // ID
    @Provide public id: number;
    // 文件名
    @Provide public name: string;
    // 文件
    @Provide public file: any;
    // 项目时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class AuthorizeCode extends Model {
    // ID
    @Provide public id: number;
    // 授权码名称
    @Provide public name: string;
    // 授权码对应用户
    @Provide public user: User;
    // 所属用户
    @Provide public creator: User;
    // 授权码
    @Provide public code: string;
    // 授权码状态
    @Provide public status: number;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class Invitation extends Model {
    // ID
    @Provide public id: number;
    // 邀请码所属用户
    @Provide public creator: User;
    // 受邀用户
    @Provide public user: User;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class Collect extends Model {
    // ID
    @Provide public id: number;
    // 收藏的产品
    @Provide public product: Product;
    // 所属用户
    @Provide public user: User;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class Product extends Model {
    // 收藏的产品
    // ID
    @Provide public id: number;
    // 产品名称
    @Provide public name: string;
    // 产品描述
    @Provide public description: string;
    // 产品概述
    @Provide public summary: string;
    // 技术参数
    @Provide public techParameter: string;
    // 应用领域
    @Provide public domain: string;
    // 其他
    @Provide public other: string;
    // 背景图片
    @Provide public background: any;
    // 产品分类
    @Provide public category: ProductCategory;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
    // 产品插图
    @Provide public pictures: Images;
};

export class ProductCategory extends Model {
    // 产品分类
    @Provide public product: Product;
    // ID
    @Provide public id: number;
    // 产品类别
    @Provide public name: string;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class Images extends Model {
    // 产品插图
    @Provide public product: Product;
    // 系统插图
    @Provide public system: System;
    // 系统案例插图
    @Provide public systemcase: SystemCase;
    // ID
    @Provide public id: number;
    // 图片
    @Provide public image: any;
};

export class System extends Model {
    // 系统
    @Provide public systemCases: SystemCase;
    // ID
    @Provide public id: number;
    // 名称
    @Provide public name: string;
    // 简介摘要
    @Provide public summary: string;
    // 简介摘要插图
    @Provide public picture: any;
    // 系统介绍
    @Provide public introduction: string;
    // 系统特性
    @Provide public systemFeature: string;
    // 系统结构
    @Provide public structure: any;
    // 功能特性
    @Provide public funtionalFeature: string;
    // 排序
    @Provide public rank: number;
    // 系统插图
    @Provide public pictures: Images;
};

export class SystemCase extends Model {
    // ID
    @Provide public id: number;
    // 标题
    @Provide public title: string;
    // 摘要
    @Provide public summary: string;
    // 描述
    @Provide public description: string;
    // 工程地址
    @Provide public address: string;
    // 工程内容
    @Provide public content: string;
    // 背景图片
    @Provide public picture: any;
    // 项目时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
    // 系统案例插图
    @Provide public pictures: Images;
    // 系统
    @Provide public systems: System;
};

export class FAQs extends Model {
    // ID
    @Provide public id: number;
    // 问题
    @Provide public questioin: string;
    // 回答
    @Provide public answer: string;
    // 排序
    @Provide public rank: number;
    // 创建时间
    @Provide public created: string;
};

export class FeedBack extends Model {
    // ID
    @Provide public id: number;
    // 姓名
    @Provide public name: string;
    // 手机号码
    @Provide public mobile: string;
    // 邮箱
    @Provide public email: string;
    // 反馈内容
    @Provide public content: string;
    // 创建时间
    @Provide public created: string;
};

export class IndustryLink extends Model {
    // ID
    @Provide public id: number;
    // 名称
    @Provide public name: string;
    // 背景图片
    @Provide public picture: any;
    // 行业链接
    @Provide public link: string;
    // 排序
    @Provide public rank: number;
};

export class Job extends Model {
    // ID
    @Provide public id: number;
    // 姓名
    @Provide public name: string;
    // 职位
    @Provide public job: string;
    // 手机号码
    @Provide public mobile: string;
    // 邮箱
    @Provide public email: string;
    // 附件
    @Provide public attatchment: any;
    // 更新时间
    @Provide public updated: string;
};

export class JSONWebToken extends Model {
    @Provide public email: string;
    @Provide public password: string;
};

export class Message extends Model {
    // ID
    @Provide public id: number;
    // 所属用户
    @Provide public userId: number;
    // 标题
    @Provide public title: string;
    // 内容
    @Provide public content: string;
    // 创建时间
    @Provide public created: string;
    // 消息类型
    @Provide public category: number;
    // 已读
    @Provide public read: number;
    // 排序
    @Provide public rank: number;
};

export class News extends Model {
    // ID
    @Provide public id: number;
    // 标题
    @Provide public title: string;
    // 内容
    @Provide public content: string;
    // 创建时间
    @Provide public created: string;
    // 排序
    @Provide public rank: number;
};

export class Recruitment extends Model {
    // ID
    @Provide public id: number;
    // 职位名称
    @Provide public name: string;
    // 薪资待遇
    @Provide public salary: string;
    // 职位简介
    @Provide public jobDetail: string;
    // 岗位职责
    @Provide public jobResponsibilities: string;
    // 地点
    @Provide public address: string;
    // 招聘数量
    @Provide public number: string;
    // 创建时间
    @Provide public created: string;
    // 更新时间
    @Provide public updated: string;
};

export class ServiceNet extends Model {
    // ID
    @Provide public id: number;
    // 网点名称
    @Provide public name: string;
    // 联系人
    @Provide public linkman: string;
    // 联系手机
    @Provide public mobile: string;
    // email address
    @Provide public email: string;
    // 联系地址
    @Provide public address: string;
    // 排序
    @Provide public rank: number;
};

export class ServicePromise extends Model {
    // ID
    @Provide public id: number;
    // title
    @Provide public title: string;
    // content
    @Provide public content: string;
    // 排序
    @Provide public rank: number;
};



////手写的自定义Model
export class Default extends Model {
    @Provide public default: string;
}

export class Login extends Model {
    @Provide public email: string;
    @Provide public password: string;
}

export class Register extends Model {
    @Provide public username: string;
    @Provide public password: string;
    @Provide public email: string;
}
export class Email extends Model {
    @Provide public captcha: string;
    @Provide public email: string;
}

export class Password extends Model {
    @Provide public captcha: string;
    @Provide public password: string;
    @Provide public password2: string;
}
