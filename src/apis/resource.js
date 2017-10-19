/*
 * 基于RESTFUL封装ajax
 */
import ajax from 'utils/ajax';

const _methodMap = {
    list        : 'get',
    retrieve    : 'get',
    create      : 'post',
    update      : 'put',
    destroy     : 'delete'
};

class Resource {
    constructor (url, Model) {
        this.url    = url;     // 请求链接
        this.model  = {};
        this.rules  = {};
        this.errors = {};

        if (Model) {
            this.model = Model.data;
            this.rules = Model.rules;
            this.resetErrors();
        };
    };

    // 重置错误
    resetErrors () {
        Object.keys(this.model).forEach(key => {
            this.errors[key] = '';
        });
    };

    // 重置model
    resetModel (obj) {
        // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model都置为''
        let model = this.model;

        Object.keys(model).forEach(key => {
            if (key in obj) {
                model[key] = obj[key];
            } else {
                model[key] = '';
            }
        });
    };

    // 重置model和错误
    reset (obj) {
        this.resetModel(obj);
        this.resetErrors();
    }

    // 将数据包装成formData
    formData (obj) {
        // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model作为formData
        let data = this.model;
        let form = new FormData();

        Object.keys(obj).forEach(key => {
            data[key] = obj[key];
        });

        Object.keys(data).forEach(key => {
            form.append(key, data[key]);
        });

        return form;
    };

    // 请求参数处理
    request (body = {}, config, action) {
        const method = _methodMap[action];
        let url = this.url;

        // retrieve, update,  delete 方法path中都带有id
        if (!(action === 'list' || action === 'create')) {
            const id = body['id'];
            delete body['id'];
            url = url + '/' + id;
        };

        // retrieve, list方法 为get方法
        if (action === 'retrieve' || action === 'list') {
            body = {
                params: body
            };
        } else {
            body = this.formData(body);
        };

        let response = ajax.Axios[method](url, body, config);

        this.resetErrors();

        response.catch(error => {
            // 把上一次请求产生的错误清除
            error.errors.forEach(ele => {
                this.errors[ele.name] = ele.value;
            });
        });

        return response;
    };

    // 获取资源列表
    list (params, config) {
        return this.request(params, config, 'list');
    };

    // 获取单个资源
    retrieve (params, config) {
        return this.request(params, config, 'retrieve');
    };

    // 创建单个资源
    create (body, config) {
        return this.request(body, config, 'create');
    };

    // 更新单个资源
    update (body, config) {
        return this.request(body, config, 'update');
    };

    // 删除单个资源
    destroy (body, config) {
        return this.request(body, config, 'delete');
    };
};

export default Resource;
