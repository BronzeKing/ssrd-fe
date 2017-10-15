/**
 * 该文件主要用来导出接口相关方法
 */
// import Vue from 'vue';
import API from './api-urls';
import ajax from 'utils/ajax';

let send = (options, config, url, method) => {
    // 如果未传入url以及参数抛出异常
    // if (!url || !options) {
    if (!url) {
        throw new Error('url is null.');
        // throw new Error('url or options is null.');
    }

    // 如果没有设置请求方式默认请求方式为POST
    method = method || 'post';

    // 返回promise实例由用户处理
    return ajax.Axios[method](url, options, config);
};

class Resource {
    constructor (url, prompt) {
        this.url = url;
        this.prompt = prompt;
        this.backErrors = {};
        this.initBackErrors();
    };

    initBackErrors () {
        if (this.prompt) {
            Object.keys(this.prompt).forEach(key => {
                this.backErrors[key] = '';
            });
        };
    };

    setPrompt (response) {
        var _this = this;
        response.catch(error => {
            if (this.prompt && error.response && error.response.status === 400) {
                error.response.data['errors'].forEach(item => {
                    this.prompt[item.name] = item.value;
                });
            }
            error.errors.forEach(function (element) {
                _this.backErrors[element.name] = element.value;
            });
        });
        return response;
    };

    setOptions (options, hasId) {
        if (hasId) {
            const id = options['id'];
            delete options['id'];
            this.url = this.url + '/' + id;
        };
        let isForm = options instanceof FormData;
        if (isForm) {
            return options;
        } else {
            return {params: options};
        }
    }
    // 获取资源列表
    list (params, config) {
        const options = this.setOptions(params);
        return send(options, config, this.url, 'get');
    };

    // 获取单个资源
    retrieve (params, config) {
        const options = this.setOptions(params, true);
        return send(options, config, this.url, 'get');
    };

    // 创建单个资源
    create (formData, config) {
        this.initBackErrors();
        const options = this.setOptions(formData);
        return this.setPrompt(send(options, config, this.url, 'post'));
    };

    // 更新单个资源
    update (formData, config) {
        const options = this.setOptions(formData, true);
        return this.setPrompt(send(options, config, this.url, 'put'));
    };

    // 删除单个资源
    delete (formData, config) {
        const options = this.setOptions(formData, true);
        return send(options, config, this.url, 'delete');
    };
};

/* 登录注册相关接口 */
export const login          = new Resource(API.login, {
    username: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
});                                                                                                          // 登录接口
export const register       = new Resource(API.register, {
    username: [
        { required: true, message: '请输入姓名', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ],
    email:[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' }
    ]
});                                                                                                           // 注册接口
export const logout         = new Resource(API.logout);                                                       // 注销接口

/* 关于我们 */
export const news           = new Resource(API.news);
/* 新闻 */
export const recruitments   = new Resource(API.recruitments);
/* 行业链接 */
export const industryLink   = new Resource(API.industryLink);                                                 // 获取行业链接
export const jobs           = new Resource(API.jobs, {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
    ],
    mobile: [
        { required: true, message: '请输入电话', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请选择邮箱', trigger: 'blur' }
    ]
});                                                                                                           // 提交简历
/* 文档列表(荣誉资质和合作伙伴) */
export const documents   = new Resource(API.documents);
/* 系统展示 */
export const systemDemonstrations = new Resource(API.systemDemonstrations);                                   // 获取案例展示
export const systems = new Resource(API.systems);                                                             // 获取系统展示
