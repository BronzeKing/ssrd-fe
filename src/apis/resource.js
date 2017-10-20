/*
 * 基于RESTFUL封装ajax
 */
import ajax from 'utils/ajax';

const _methodMap = {
    'list': 'get',
    'retrieve': 'get',
    'create': 'post',
    'update': 'put',
    'destroy': 'delete'
};

Object.keys(_methodMap).forEach(k => {
    _methodMap[k] = ajax.Axios[_methodMap[k]];
});

class Resource {
    constructor (url, Model) {
        this.url = url;
        this.m = {};
        this.rules = {};
        this.errors = {};
        // list方法的 table的查询参数以及分页控件、搜索条件 table=t, model=m
        this.t = {
            search: '',
            pageIndex: 1,
            pageSize: 10,
            RecordCount: 0,
            Records: []
        };
        if (Model) {
            this.m = Model.data;
            this.rules = Model.rules;
            this.resetErrors();
        };
    };

    resetErrors () {
        Object.keys(this.m).forEach(key => {
            this.errors[key] = '';
        });
    };

    resetModel (obj) {
        // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model都置为''
        Object.keys(this.m).forEach(key => {
            if (key in obj) {
                this.m[key] = obj[key];
            } else {
                this.m[key] = '';
            }
        });
    };

    reset (obj) {
        this.resetModel(obj);
        this.resetErrors();
    }

    formData (obj) {
        // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model作为formData
        const data = this.m;
        const form = new FormData();
        Object.keys(obj).forEach(key => {
            data[key] = obj[key];
        });
        Object.keys(data).forEach(key => {
            form.append(key, data[key]);
        });
        return form;
    };

    request (body, config, action) {
        const method = _methodMap[action];
        body = body || {};
        let url = this.url;
        // retrieve, update,  delete 方法path中都带有id
        if (!['list', 'create'].includes(action)) {
            const id = body['id'];
            delete body['id'];
            url = url + '/' + id;
        };
        // retrieve, list方法 为get方法
        body = ['retrieve', 'list'].includes(action) ? {params: body} : this.formData(body);
        let response = method(this.url, body, config);
        let that = this;
        // 把上一次请求产生的错误清除
        this.resetErrors();
        response.catch(error => {
            error.errors.forEach(ele => {
                that.errors[ele.name] = ele.value;
            });
        });
        return response;
    };

    // 获取资源列表
    list (params, config) {
        let that = this;
        params = params || {};
        // 默认把this.table里的search, pageIndex, pageSize参数传到list方法里
        ['search', 'pageIndex', 'pageSize'].forEach(k => {
            params[k] = this.t[k];
        });
        return this.request(params, config, 'list').then(r => {
            that.t['RecordCount'] = r['RecordCount'];
            that.t['Records'] = r['Records'];
            that.t['PageCount'] = r['PageCount'];
            return r;
        });
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
