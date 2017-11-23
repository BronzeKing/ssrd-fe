import { Model } from "./baseModel";

export class AboutUs extends Model {
        // ID
    public id: number;
    // 简介
    public introduction: string;
    // 企业文化
    public culture: string;
    // 联系地址
    public address: string;
    // 邮箱
    public email: string;
    // 邮编
    public postcode: string;
    // 电话
    public tel: string;
    // 传真
    public fax: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('introduction', {
      type: 'String',
    });
        this.defineField('culture', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('postcode', {
      type: 'String',
    });
        this.defineField('tel', {
      type: 'String',
    });
        this.defineField('fax', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Credential extends Model {
        // ID
    public id: number;
    // user
    public user: User;
    // 类型
    public Type: string;
    // verified
    public verified: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('Type', {
      type: 'String',
    });
        this.defineField('verified', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class User extends Model {
        // user
    public logentry: LogEntry;
    // 用户
    public auth_token: User;
    // user
    public social_auth: UserSocialAuth;
    // 所属用户
    public profile: User;
    // 所属用户
    public cart: User;
    // 授权码对应用户
    public authorizecode: User;
    // 所属用户
    public authorizecodes: AuthorizeCode;
    // 邀请码所属用户
    public invitations: Invitation;
    // 受邀用户
    public invited: User;
    // 所属用户
    public projects: Project;
    // 所属用户
    public collects: Collected;
    // user
    public credentials: Credential;
    // ID
    public id: number;
    // password
    public password: string;
    // last login
    public last_login: string;
    // email address
    public email: string;
    // username
    public username: string;
    // Mobile Phone
    public mobile: string;
    // 用户权限
    public role: number;
    // date joined
    public created: string;
    // 状态
    public status: number;
    // group
    public group: Group;

  public constructor(data = {}) {
    super(data);
        this.defineField('logentry', {
      type: LogEntry,
    });
        this.defineField('auth_token', {
      type: User,
    });
        this.defineField('social_auth', {
      type: UserSocialAuth,
    });
        this.defineField('profile', {
      type: User,
    });
        this.defineField('cart', {
      type: User,
    });
        this.defineField('authorizecode', {
      type: User,
    });
        this.defineField('authorizecodes', {
      type: AuthorizeCode,
    });
        this.defineField('invitations', {
      type: Invitation,
    });
        this.defineField('invited', {
      type: User,
    });
        this.defineField('projects', {
      type: Project,
    });
        this.defineField('collects', {
      type: Collected,
    });
        this.defineField('credentials', {
      type: Credential,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('password', {
      type: 'String',
    });
        this.defineField('last_login', {
      type: 'String',
    });
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('username', {
      type: 'String',
    });
        this.defineField('mobile', {
      type: 'String',
    });
        this.defineField('role', {
      type: 'Number',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('status', {
      type: 'Number',
    });
        this.defineField('group', {
      type: Group,
    });
    this.populate(data);
    this.commit();
  }
}

export class LogEntry extends Model {
        // ID
    public id: number;
    // action time
    public action_time: string;
    // user
    public user: User;
    // content type
    public content_type: ContentType;
    // object id
    public object_id: string;
    // object repr
    public object_repr: string;
    // action flag
    public action_flag: string;
    // change message
    public change_message: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('action_time', {
      type: 'String',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('content_type', {
      type: ContentType,
    });
        this.defineField('object_id', {
      type: 'String',
    });
        this.defineField('object_repr', {
      type: 'String',
    });
        this.defineField('action_flag', {
      type: 'String',
    });
        this.defineField('change_message', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class ContentType extends Model {
        // content type
    public permission: Permission;
    // content type
    public logentry: LogEntry;
    // ID
    public id: number;
    // app label
    public app_label: string;
    // python model class name
    public model: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('permission', {
      type: Permission,
    });
        this.defineField('logentry', {
      type: LogEntry,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('app_label', {
      type: 'String',
    });
        this.defineField('model', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Permission extends Model {
        // permissions
    public group: Group;
    // ID
    public id: number;
    // name
    public name: string;
    // content type
    public content_type: ContentType;
    // codename
    public codename: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('group', {
      type: Group,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('content_type', {
      type: ContentType,
    });
        this.defineField('codename', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Group extends Model {
        // ID
    public id: number;
    // name
    public name: string;
    // permissions
    public permissions: Permission;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('permissions', {
      type: Permission,
    });
    this.populate(data);
    this.commit();
  }
}

export class Token extends Model {
        // 键
    public key: string;
    // 用户
    public user: User;
    // 已创建
    public created: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('key', {
      type: 'String',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('created', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class UserSocialAuth extends Model {
        // ID
    public id: number;
    // user
    public user: User;
    // provider
    public provider: string;
    // uid
    public uid: string;
    // extra data
    public extra_data: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('provider', {
      type: 'String',
    });
        this.defineField('uid', {
      type: 'String',
    });
        this.defineField('extra_data', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Profile extends Model {
        // ID
    public id: number;
    // 所属用户
    public user: User;
    // 真实姓名
    public name: string;
    // 性别
    public gender: string;
    // 生日
    public birthday: string;
    // 所属公司
    public company: string;
    // 职位
    public position: string;
    // QQ号码
    public qq: string;
    // 地址
    public address: string;
    // 邀请码
    public code: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('gender', {
      type: 'String',
    });
        this.defineField('birthday', {
      type: 'String',
    });
        this.defineField('company', {
      type: 'String',
    });
        this.defineField('position', {
      type: 'String',
    });
        this.defineField('qq', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('code', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Cart extends Model {
        // ID
    public id: number;
    // 所属用户
    public user: User;
    // 内容
    public content: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('content', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class AuthorizeCode extends Model {
        // ID
    public id: number;
    // 授权码名称
    public name: string;
    // 授权码对应用户
    public user: User;
    // 所属用户
    public creator: User;
    // 授权码
    public code: string;
    // 授权码状态
    public status: number;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('creator', {
      type: User,
    });
        this.defineField('code', {
      type: 'String',
    });
        this.defineField('status', {
      type: 'Number',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Invitation extends Model {
        // ID
    public id: number;
    // 邀请码所属用户
    public creator: User;
    // 受邀用户
    public user: User;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('creator', {
      type: User,
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Project extends Model {
        // 所属项目
    public logs: ProjectLog;
    // ID
    public id: number;
    // 所属用户
    public user: User;
    // 项目名称
    public name: string;
    // 项目类型
    public type: string;
    // Mobile Phone
    public mobile: string;
    // 项目状态
    public status: number;
    // 补充说明
    public remark: string;
    // 工期
    public duration: number;
    // 工期
    public budget: number;
    // 联系人
    public linkman: string;
    // 地址
    public address: string;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;
    // 附件
    public attatchment: Documents;

  public constructor(data = {}) {
    super(data);
        this.defineField('logs', {
      type: ProjectLog,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('type', {
      type: 'String',
    });
        this.defineField('mobile', {
      type: 'String',
    });
        this.defineField('status', {
      type: 'Number',
    });
        this.defineField('remark', {
      type: 'String',
    });
        this.defineField('duration', {
      type: 'Number',
    });
        this.defineField('budget', {
      type: 'Number',
    });
        this.defineField('linkman', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
        this.defineField('attatchment', {
      type: Documents,
    });
    this.populate(data);
    this.commit();
  }
}

export class ProjectLog extends Model {
        // ID
    public id: number;
    // 所属项目
    public project: Project;
    // 行为
    public action: number;
    // 内容
    public content: string;
    // 基本信息
    public profile: string;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;
    // 附件
    public attatchment: Documents;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('project', {
      type: Project,
    });
        this.defineField('action', {
      type: 'Number',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('profile', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
        this.defineField('attatchment', {
      type: Documents,
    });
    this.populate(data);
    this.commit();
  }
}

export class Documents extends Model {
        // 附件
    public project: Project;
    // 附件
    public projectlog: ProjectLog;
    // ID
    public id: number;
    // 文件名
    public name: string;
    // 文件
    public file: any;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('project', {
      type: Project,
    });
        this.defineField('projectlog', {
      type: ProjectLog,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('file', {
      type: 'Any',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Collected extends Model {
        // ID
    public id: number;
    // 收藏的产品
    public product: Product;
    // 所属用户
    public user: User;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('product', {
      type: Product,
    });
        this.defineField('user', {
      type: User,
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Product extends Model {
        // 收藏的产品
    public collected: Collected;
    // ID
    public id: number;
    // 产品名称
    public name: string;
    // 产品描述
    public description: string;
    // 产品概述
    public summary: string;
    // 技术参数
    public techParameter: string;
    // 应用领域
    public domain: string;
    // 其他
    public other: string;
    // 背景图片
    public background: any;
    // 产品分类
    public category: ProductCategory;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;
    // 产品插图
    public pictures: Images;

  public constructor(data = {}) {
    super(data);
        this.defineField('collected', {
      type: Collected,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('description', {
      type: 'String',
    });
        this.defineField('summary', {
      type: 'String',
    });
        this.defineField('techParameter', {
      type: 'String',
    });
        this.defineField('domain', {
      type: 'String',
    });
        this.defineField('other', {
      type: 'String',
    });
        this.defineField('background', {
      type: 'Any',
    });
        this.defineField('category', {
      type: ProductCategory,
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
        this.defineField('pictures', {
      type: Images,
    });
    this.populate(data);
    this.commit();
  }
}

export class ProductCategory extends Model {
        // 产品分类
    public product: Product;
    // ID
    public id: number;
    // 产品类别
    public name: string;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('product', {
      type: Product,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Images extends Model {
        // 产品插图
    public product: Product;
    // 系统插图
    public system: System;
    // 系统案例插图
    public systemcase: SystemCase;
    // ID
    public id: number;
    // 图片
    public image: any;

  public constructor(data = {}) {
    super(data);
        this.defineField('product', {
      type: Product,
    });
        this.defineField('system', {
      type: System,
    });
        this.defineField('systemcase', {
      type: SystemCase,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('image', {
      type: 'Any',
    });
    this.populate(data);
    this.commit();
  }
}

export class System extends Model {
        // 系统
    public systemCases: SystemCase;
    // ID
    public id: number;
    // 名称
    public name: string;
    // 简介摘要
    public summary: string;
    // 简介摘要插图
    public picture: any;
    // 系统介绍
    public introduction: string;
    // 系统特性
    public systemFeature: string;
    // 系统结构
    public structure: any;
    // 功能特性
    public funtionalFeature: string;
    // 排序
    public rank: number;
    // 系统插图
    public pictures: Images;

  public constructor(data = {}) {
    super(data);
        this.defineField('systemCases', {
      type: SystemCase,
    });
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('summary', {
      type: 'String',
    });
        this.defineField('picture', {
      type: 'Any',
    });
        this.defineField('introduction', {
      type: 'String',
    });
        this.defineField('systemFeature', {
      type: 'String',
    });
        this.defineField('structure', {
      type: 'Any',
    });
        this.defineField('funtionalFeature', {
      type: 'String',
    });
        this.defineField('rank', {
      type: 'Number',
    });
        this.defineField('pictures', {
      type: Images,
    });
    this.populate(data);
    this.commit();
  }
}

export class SystemCase extends Model {
        // ID
    public id: number;
    // 标题
    public title: string;
    // 摘要
    public summary: string;
    // 描述
    public description: string;
    // 工程地址
    public address: string;
    // 工程内容
    public content: string;
    // 背景图片
    public picture: any;
    // 项目时间
    public created: string;
    // 更新时间
    public updated: string;
    // 系统案例插图
    public pictures: Images;
    // 系统
    public systems: System;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('title', {
      type: 'String',
    });
        this.defineField('summary', {
      type: 'String',
    });
        this.defineField('description', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('picture', {
      type: 'Any',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
        this.defineField('pictures', {
      type: Images,
    });
        this.defineField('systems', {
      type: System,
    });
    this.populate(data);
    this.commit();
  }
}

export class News extends Model {
        // ID
    public id: number;
    // 标题
    public title: string;
    // 内容
    public content: string;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;
    // 类型
    public type: number;
    // 排序
    public rank: number;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('title', {
      type: 'String',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
        this.defineField('type', {
      type: 'Number',
    });
        this.defineField('rank', {
      type: 'Number',
    });
    this.populate(data);
    this.commit();
  }
}

export class FeedBack extends Model {
        // ID
    public id: number;
    // 姓名
    public name: string;
    // 手机号码
    public mobile: string;
    // 邮箱
    public email: string;
    // 反馈内容
    public content: string;
    // 创建时间
    public created: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('mobile', {
      type: 'String',
    });
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class IndustryLink extends Model {
        // ID
    public id: number;
    // 名称
    public name: string;
    // 背景图片
    public picture: any;
    // 行业链接
    public link: string;
    // 排序
    public rank: number;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('picture', {
      type: 'Any',
    });
        this.defineField('link', {
      type: 'String',
    });
        this.defineField('rank', {
      type: 'Number',
    });
    this.populate(data);
    this.commit();
  }
}

export class Job extends Model {
        // ID
    public id: number;
    // 姓名
    public name: string;
    // 职位
    public job: string;
    // 手机号码
    public mobile: string;
    // 邮箱
    public email: string;
    // 附件
    public attatchment: any;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('job', {
      type: 'String',
    });
        this.defineField('mobile', {
      type: 'String',
    });
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('attatchment', {
      type: 'Any',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class JSONWebToken extends Model {
        public email: string;
    public password: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('password', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class Message extends Model {
        // ID
    public id: number;
    // 所属用户
    public userId: number;
    // 标题
    public title: string;
    // 内容
    public content: string;
    // 创建时间
    public created: string;
    // 消息类型
    public category: number;
    // 已读
    public read: number;
    // 排序
    public rank: number;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('userId', {
      type: 'Number',
    });
        this.defineField('title', {
      type: 'String',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('category', {
      type: 'Number',
    });
        this.defineField('read', {
      type: 'Number',
    });
        this.defineField('rank', {
      type: 'Number',
    });
    this.populate(data);
    this.commit();
  }
}

export class Recruitment extends Model {
        // ID
    public id: number;
    // 职位名称
    public name: string;
    // 薪资待遇
    public salary: string;
    // 职位简介
    public jobDetail: string;
    // 岗位职责
    public jobResponsibilities: string;
    // 地点
    public address: string;
    // 招聘数量
    public number: string;
    // 创建时间
    public created: string;
    // 更新时间
    public updated: string;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('salary', {
      type: 'String',
    });
        this.defineField('jobDetail', {
      type: 'String',
    });
        this.defineField('jobResponsibilities', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('number', {
      type: 'String',
    });
        this.defineField('created', {
      type: 'String',
    });
        this.defineField('updated', {
      type: 'String',
    });
    this.populate(data);
    this.commit();
  }
}

export class ServiceNet extends Model {
        // ID
    public id: number;
    // 网点名称
    public name: string;
    // 联系人
    public linkman: string;
    // 联系手机
    public mobile: string;
    // email address
    public email: string;
    // 联系地址
    public address: string;
    // 排序
    public rank: number;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('linkman', {
      type: 'String',
    });
        this.defineField('mobile', {
      type: 'String',
    });
        this.defineField('email', {
      type: 'String',
    });
        this.defineField('address', {
      type: 'String',
    });
        this.defineField('rank', {
      type: 'Number',
    });
    this.populate(data);
    this.commit();
  }
}

export class ServicePromise extends Model {
        // ID
    public id: number;
    // title
    public title: string;
    // content
    public content: string;
    // 排序
    public rank: number;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('title', {
      type: 'String',
    });
        this.defineField('content', {
      type: 'String',
    });
        this.defineField('rank', {
      type: 'Number',
    });
    this.populate(data);
    this.commit();
  }
}

export class Terminal extends Model {
        // ID
    public id: number;
    // 名称
    public name: string;
    // 链接
    public link: string;
    // 背景图片
    public picture: any;

  public constructor(data = {}) {
    super(data);
        this.defineField('id', {
      type: 'Number',
    });
        this.defineField('name', {
      type: 'String',
    });
        this.defineField('link', {
      type: 'String',
    });
        this.defineField('picture', {
      type: 'Any',
    });
    this.populate(data);
    this.commit();
  }
}



////手写的自定义Model
export class Default extends Model {
  public default: string;
  public constructor(data = {}) {
    super(data);
    this.defineField('default', {
      type: 'String',
    });
  }
}

export class Login extends Model {
  public email: string;
  public password: string;
  public constructor(data = {}) {
    super(data);
    this.defineField('email', {
      type: 'String',
    });
    this.defineField('password', {
      type: 'String',
    });
  }
}

export class Register extends Model {
  public username: string;
  public password: string;
  public email: string;
  public constructor(data = {}) {
    super(data);
    this.defineField('username', {
      type: 'String',
    });
    this.defineField('password', {
      type: 'String',
    });
    this.defineField('email', {
      type: 'String',
    });
  }
}
export class Email extends Model {
  public captcha: string;
  public email: string;
  public constructor(data = {}) {
    super(data);
    this.defineField('captcha', {
      type: 'String',
    });
    this.defineField('email', {
      type: 'String',
    });
  }
}

export class Password extends Model {
  public captcha: string;
  public password: string;
  public password2: string;
  public constructor(data = {}) {
    super(data);
    this.defineField('captcha', {
      type: 'String',
    });
    this.defineField('password', {
      type: 'String',
    });
    this.defineField('password2', {
      type: 'String',
    });
  }
}