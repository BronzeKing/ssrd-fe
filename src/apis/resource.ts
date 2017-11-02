/*
 * 基于RESTFUL封装ajax
 */
import ajax from "utils/ajax.ts";
import { AxiosPromise, AxiosInstance } from "axios";

let _methodMap: {[x: string]: any} = {
  list: ajax.Axios.get,
  retrieve: ajax.Axios.get,
  create: ajax.Axios.post,
  update: ajax.Axios.post,
  destroy: ajax.Axios.delete
};

function isInArray(array: Array<any>, key: any): Boolean {
  return array.indexOf(key) > -1;
}

interface Table {
  search: string;
  pageIndex: number;
  pageSize: number;
  RecordCount: number;
  Records: Array<any>;
  [key: string]: any;
}
interface Payload {
  [key: string]: any;
}

interface Rules {
  [key: string]: Array<any>;
}

interface Data {
  [key: string]: any;
}
interface Model {
  data: Data;
  rules: Rules;
}

interface Err {
  name: string;
  value: string;
}

class Resource {
  t: Table = {
    search: "",
    pageIndex: 1,
    pageSize: 10,
    RecordCount: 0,
    Records: []
  };

  pathArgv: Array<string> = [];
  errors: Array<Err> = [];

  url: string = "";
  m: Payload = {};
  rules: Rules = {};
  // 获取资源列表
  constructor(url: string, Model: Model | null = null) {
    this.url = url;

    // list方法的 table的查询参数以及分页控件、搜索条件 table=t, model=m

    let matched: Array<string> | null = url.match(/:(\w+)/g);
    if (<Array<string>>matched) {
      // 匹配出来的是 :var   这样的字符串
      // #TODO 目前有个报错
      // this.pathArgv = url.match(/:(\w+)/g).map(x => {
      // return x;
      // });
    }
    // 如果model不为空，存储model及rule，并清空
    if (Model) {
      this.m = Model.data;
      this.rules = Model.rules;
      this.resetObject(this.errors);
      // 把model的值赋给table 当用list查询的时候 默认拿this.t中的参数
      this.resetObject(this.t);
    }
  }
  resetObject(obj: Payload): void {
    Object.keys(this.m).forEach(key => {
      obj[key] = "";
    });
  }

  resetErrors(): void {
    return this.resetObject(this.errors);
  }
  // 重置model
  resetModel(obj: Payload): Payload {
    // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model都置为''
    Object.keys(this.m).forEach(key => {
      this.m[key] = key in obj ? obj[key] : "";
    });
    return this.m;
  }

  // 重置model和错误
  reset(obj: Payload): void {
    this.resetModel(obj);
    this.resetErrors();
  }
  formData(obj: Payload): FormData {
    // obj 传入的是 {job: 'test'}  这样的，如果不传obj, 默认把model作为formData
    const data: Data = this.m;
    const form = new FormData();
    let id, rest;

    Object.keys(obj).forEach(key => {
      data[key] = obj[key];
    });

    // 删掉body中的id， 因为path中已经有了
    if (data.hasOwnProperty("id")) {
      delete data["id"];
    }
    Object.keys(data).forEach((key: string) => {
      form.append(key, data[key]);
    });
    return form;
  }

  // 请求参数处理
  request(body: Payload, config: Payload, action: string): AxiosPromise {
    let method = _methodMap[action];
    let url = this.url;
    let response: any;
    let id: Number;
    let value: string;

    this.pathArgv.forEach(x => {
      // eg: x = :projectId
      ({ [x.slice(1)]: value, ...body } = body);
      url = url.replace(x, value);
    });

    // 标准rest接口中retrieve, update,  delete 方法path中都带有id
    // 若是非标准rest接口则不带id
    if (!isInArray(["list", "create"], action)) {
      ({ id, ...body } = body);
      if (body.hasOwnProperty("id")) {
        id = body["id"];
        delete body["id"];
        url = url + "/" + id;
      }
    }

    // retrieve, list方法 为get方法
    body = isInArray(["retrieve", "list"], action)
      ? { params: body }
      : this.formData(body);
    // 发起请求
    response = method(url, body, config);

    // 把上一次请求产生的错误清除
    this.resetErrors();

    response.catch((error: any) => {
      if (error && error.errors) {
        this.errors = error.errors;
      }
    });
    return response;
  }

  list(params: Payload = {}, config: Payload = {}): Payload {
    // 默认把this.t里的search, pageIndex, pageSize参数传到list方法里
    Object.keys(this.t).forEach(k => {
      if (this.t[k] && ["Records", "RecordCount"].indexOf(k) === -1) {
        params[k] = this.t[k];
      }
    });
    params["search"] = this.t.search;
    params["pageIndex"] = this.t.pageIndex;
    params["pageSize"] = this.t.pageSize;

    return this.request(params, config, "list").then((r: Data) => {
      this.t.RecordCount = r["RecordCount"];
      this.t.Records = r["Records"];
      return r;
    });
  }
  // 获取单个资源
  retrieve(params: Payload = {}, config: Payload): Payload {
    return this.request(params, config, "retrieve").then((r: Data) => {
      this.resetModel(r);
      return r;
    });
  }

  // 创建单个资源
  create(body: Payload, config: Payload): AxiosPromise {
    return this.request(body, config, "create");
  }

  // 更新单个资源
  update(body: Payload, config: Payload): AxiosPromise {
    return this.request(body, config, "update");
  }

  // 删除单个资源
  destroy(body: Payload, config: Payload): AxiosPromise {
    return this.request(body, config, "destroy");
  }
}
export default Resource;
