export interface AboutUs {
    // ID
    id: number;
    // 简介
    introduction: string;
    // 企业文化
    culture: string;
    // 荣耀
    honour: string;
    // 合作伙伴
    cooperativePartner: string;
};
export interface Credential {
    // ID
    id: number;
    // user
    user: User;
    // 类型
    Type: string;
    // verified
    verified: string;
};
export interface User {
    // user
    logentry: User;
    // 用户
    auth_token: User;
    // user
    social_auth: User;
    // 所属用户
    profile: User;
    // 所属用户
    projects: User;
    // 授权码对应用户
    authorizecode: User;
    // 所属用户
    authorizecodes: User;
    // 邀请码所属用户
    invitations: User;
    // 受邀用户
    invited: User;
    // 所属用户
    collects: User;
    // user
    credential: User;
    // ID
    id: number;
    // password
    password: string;
    // last login
    last_login: string;
    // email address
    email: string;
    // username
    username: string;
    // Mobile Phone
    mobile: string;
    // 用户权限
    role: number;
    // date joined
    created: string;
    // 状态
    status: number;
};
export interface LogEntry {
    // ID
    id: number;
    // action time
    action_time: string;
    // user
    user: User;
    // content type
    content_type: ContentType;
    // object id
    object_id: string;
    // object repr
    object_repr: string;
    // action flag
    action_flag: string;
    // change message
    change_message: string;
};
export interface ContentType {
    // content type
    permission: ContentType;
    // content type
    logentry: ContentType;
    // ID
    id: number;
    // app label
    app_label: string;
    // python model class name
    model: string;
};
export interface Permission {
    // permissions
    group: Group;
    // ID
    id: number;
    // name
    name: string;
    // content type
    content_type: ContentType;
    // codename
    codename: string;
};
export interface Group {
    // ID
    id: number;
    // name
    name: string;
    // permissions
    permissions: Permission;
};
export interface Token {
    // 键
    key: string;
    // 用户
    user: User;
    // 已创建
    created: string;
};
export interface UserSocialAuth {
    // ID
    id: number;
    // user
    user: User;
    // provider
    provider: string;
    // uid
    uid: string;
    // extra data
    extra_data: string;
};
export interface Profile {
    // ID
    id: number;
    // 所属用户
    user: User;
    // 真实姓名
    name: string;
    // 性别
    gender: string;
    // 生日
    birthday: string;
    // 所属公司
    company: string;
    // 职位
    position: string;
    // QQ号码
    qq: string;
    // 地址
    address: string;
    // 邀请码
    code: string;
};
export interface Project {
    // 所属项目
    logs: Project;
    // ID
    id: number;
    // 所属用户
    user: User;
    // 项目名称
    name: string;
    // 项目状态
    status: number;
    // 背景图片
    picture: any;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface ProjectLog {
    // ID
    id: number;
    // 所属项目
    project: Project;
    // 行为
    action: number;
    // 内容
    content: string;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
    // 附件
    attatchment: Document;
};
export interface Document {
    // 附件
    projectlog: ProjectLog;
    // ID
    id: number;
    // 文件名
    name: string;
    // 文件
    file: any;
    // 项目时间
    created: string;
    // 更新时间
    updated: string;
};
export interface AuthorizeCode {
    // ID
    id: number;
    // 授权码名称
    name: string;
    // 授权码对应用户
    user: User;
    // 所属用户
    creator: User;
    // 授权码
    code: string;
    // 授权码状态
    status: number;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface Invitation {
    // ID
    id: number;
    // 邀请码所属用户
    creator: User;
    // 受邀用户
    user: User;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface Collect {
    // ID
    id: number;
    // 收藏的产品
    product: Product;
    // 所属用户
    user: User;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface Product {
    // 收藏的产品
    collect: Product;
    // ID
    id: number;
    // 产品名称
    name: string;
    // 产品描述
    description: string;
    // 产品概述
    summary: string;
    // 技术参数
    techParameter: string;
    // 应用领域
    domain: string;
    // 其他
    other: string;
    // 背景图片
    background: any;
    // 产品分类
    category: ProductCategory;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
    // 产品插图
    pictures: Images;
};
export interface ProductCategory {
    // 产品分类
    product: ProductCategory;
    // ID
    id: number;
    // 产品类别
    name: string;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface Images {
    // 产品插图
    product: Product;
    // 系统插图
    system: System;
    // 系统案例插图
    systemcase: SystemCase;
    // ID
    id: number;
    // 图片
    image: any;
};
export interface System {
    // 系统
    systemCases: SystemCase;
    // ID
    id: number;
    // 名称
    name: string;
    // 简介摘要
    summary: string;
    // 简介摘要插图
    picture: any;
    // 系统介绍
    introduction: string;
    // 系统特性
    systemFeature: string;
    // 系统结构
    structure: any;
    // 功能特性
    funtionalFeature: string;
    // 排序
    rank: number;
    // 系统插图
    pictures: Images;
};
export interface SystemCase {
    // ID
    id: number;
    // 标题
    title: string;
    // 摘要
    summary: string;
    // 描述
    description: string;
    // 工程地址
    address: string;
    // 工程内容
    content: string;
    // 背景图片
    picture: any;
    // 项目时间
    created: string;
    // 更新时间
    updated: string;
    // 系统案例插图
    pictures: Images;
    // 系统
    systems: System;
};
export interface FAQs {
    // ID
    id: number;
    // 问题
    questioin: string;
    // 回答
    answer: string;
    // 排序
    rank: number;
    // 创建时间
    created: string;
};
export interface FeedBack {
    // ID
    id: number;
    // 姓名
    name: string;
    // 手机号码
    mobile: string;
    // 邮箱
    email: string;
    // 反馈内容
    content: string;
    // 创建时间
    created: string;
};
export interface IndustryLink {
    // ID
    id: number;
    // 名称
    name: string;
    // 背景图片
    picture: any;
    // 行业链接
    link: string;
    // 排序
    rank: number;
};
export interface Job {
    // ID
    id: number;
    // 姓名
    name: string;
    // 职位
    job: string;
    // 手机号码
    mobile: string;
    // 邮箱
    email: string;
    // 附件
    attatchment: any;
    // 更新时间
    updated: string;
};
export interface JSONWebToken {
    email: string;
    password: string;
};
export interface News {
    // ID
    id: number;
    // 标题
    title: string;
    // 内容
    content: string;
    // 创建时间
    created: string;
    // 排序
    rank: number;
};
export interface Recruitment {
    // ID
    id: number;
    // 职位名称
    name: string;
    // 薪资待遇
    salary: string;
    // 职位简介
    jobDetail: string;
    // 岗位职责
    jobResponsibilities: string;
    // 地点
    address: string;
    // 招聘数量
    number: string;
    // 创建时间
    created: string;
    // 更新时间
    updated: string;
};
export interface ServiceNet {
    // ID
    id: number;
    // 网点名称
    name: string;
    // 联系人
    linkman: string;
    // 联系手机
    mobile: string;
    // email address
    email: string;
    // 联系地址
    address: string;
    // 排序
    rank: number;
};
export interface ServicePromise {
    // ID
    id: number;
    // title
    title: string;
    // content
    content: string;
    // 排序
    rank: number;
};
