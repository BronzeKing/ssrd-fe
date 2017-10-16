/*
 * 基于RESTFUL封装ajax
 */
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
        this.url = url;             // 请求练级
        this.prompt = prompt;       // 错误model
        this.backErrors = {};       // 返回的error信息
        this.initBackErrors();      // 初始化返回的error信息体
    };

    initBackErrors () {
        if (this.prompt) {
            Object.keys(this.prompt).forEach(key => {
                this.backErrors[key] = '';
            });
        };
    };

    // 设置错误信息内容
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

    // 请求参数处理
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

export default Resource;
