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
    };

    setPrompt (response) {
        response.catch(error => {
            if (this.prompt && error.response && error.response.status === 400) {
                error.response.data['errors'].forEach(item => {
                    this.prompt[item.name] = item.value;
                });
            }
        });
        return response;
    };

    setOptions (options, hasId) {
        if (hasId) {
            const id = options['id'];
            delete options['id'];
            this.url = this.url + '/' + id;
        };
        return {params: options};
    }
    list (params, config) {
        const options = this.setOptions(params);
        return send(options, config, this.url, 'get');
    };

    retrieve (params, config) {
        const options = this.setOptions(params, true);
        return send(options, config, this.url, 'get');
    };

    create (formData, config) {
        const options = this.setOptions(formData);
        return this.setPrompt(send(options, config, this.url, 'post'));
    };

    update (formData, config) {
        const options = this.setOptions(formData, true);
        return this.setPrompt(send(options, config, this.url, 'put'));
    };

    delete (formData, config) {
        const options = this.setOptions(formData, true);
        return send(options, config, this.url, 'delete');
    };
};

/* 登录注册相关接口 */
export const login          = (options, config) => send(options, config, API.login);                          // 登录接口
export const register       = (options, config) => send(options, config, API.register);                       // 注册接口
export const logout         = (options, config) => send(options, config, API.logout);                         // 注销接口

/* 关于我们 */
export const news           = new Resource(API.news);
/* 新闻 */
export const recruitments   = new Resource(API.recruitments, {
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
    ],
    mobile: [
        { required: true, message: '请输入电话', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '请选择邮箱', trigger: 'blur' }
    ],
    file: [
        { required: true, message: '请上传简历附件', trigger: 'change' }
    ]
}
);
/* 行业链接 */
export const industryLink   = new Resource(API.industryLink);  // 获取行业链接
export const jobs           = (options, config) => send(options, config, API.jobs, 'post');                   // 提交简历
/* 文档列表(荣誉资质和合作伙伴) */
export const documents   = new Resource(API.documents);
