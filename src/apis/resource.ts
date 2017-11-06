/*
 * 基于RESTFUL封装ajax
 */
import ajax from "utils/ajax";
import { assign } from "utils/extends";
import { Model } from "./baseModel";
import { AxiosPromise, AxiosInstance } from "axios";

let _methodMap: { [x: string]: any } = {
  list: ajax.Axios.get,
  retrieve: ajax.Axios.get,
  create: ajax.Axios.post,
  update: ajax.Axios.post,
  destroy: ajax.Axios.delete
};

function isInArray(array: Array<any>, key: any): Boolean {
  return array.indexOf(key) > -1;
}

interface Payload {
  [key: string]: any;
}

interface Table {
  search: string;
  pageIndex: number;
  pageSize: number;
  RecordCount: number;
  Records: Array<any>;
}

interface Rules {
  [key: string]: Array<any>;
}

/**
* @brief 替换url中的 /:{var}参数，以及当action为update，destroy, retrieve时，如果body中有{id},则把{id}放到拼接到url中
*
* @param url 请求的url
* @param body 请求的参数，可能为querystring或者htto的body
* @param pathArgv url中的变量,eg ['/:project']
* @param action 请求方法
*
* @return url 请求url
*/
function replaceUrl(
  url: string,
  body: Payload,
  pathArgv: Array<string>,
  action: string
): string {
  let id: string;
  let value: string;
  pathArgv.forEach(x => {
    // eg: x = :projectId
    ({ [x.slice(1)]: value, ...body } = body);
    url = url.replace(x, value);
  });
  // 标准rest接口中retrieve, update,  delete 方法path中都带有id
  // 若是非标准rest接口则不带id
  if (!isInArray(["list", "create"], action)) {
    ({ id, ...body } = body);
    if (id) {
      url = url + "/" + id;
    }
  }
  return url;
}

export class Resource<T extends Model> {
  private _pathArgv: Array<string> = [];

  public errors: { [x: string]: string } = {};
  public t: Table = {
    search: "",
    pageIndex: 1,
    pageSize: 10,
    RecordCount: 0,
    Records: []
  };
  constructor(private url: string, public m: T, public rules: Rules = {}) {
    this.errors = m ? m.errors : {};
    let matched = url.match(/:(\w+)/g);
    if (matched) {
      this._pathArgv = (<Array<string>>matched).map(x => {
        return x;
      });
    }
  }

  /**
    * @说明 当请求为post、put的时候，默认把model中的值放到FormData里
    *
    * @参数 body: 请求的body
    */
  formData(body: Payload): FormData {
    const data = assign({}, this.m.serialize(), body);
    const form = new FormData();
    Object.keys(data).forEach(x => {
      debugger;
      let obj = data[x];
      if (obj) {
        // 当上传多个文件时，逐个把文件append进FormData
        if (obj.constructor == Array && obj[0].url) {
          obj.forEach((file: any) => {
            form.append(x, file.raw);
          });
        } else {
          form.append(x, obj);
        }
      }
    });
    return form;
  }

  /**
    * @说明 
    *
    * @参数 body 请求body
    * @参数 config request配置
    * @参数 action 请求方法
    */
  request(body: Payload, config: Payload, action: string): AxiosPromise {
    let method = _methodMap[action];
    let response: AxiosPromise;
    let url = replaceUrl(this.url, body, this._pathArgv, action);

    // retrieve, list方法 为GET方法
    body = isInArray(["retrieve", "list"], action)
      ? { params: body }
      : this.formData(body);
    response = method(url, body, config);

    // 把上一次请求产生的错误清除
    Object.keys(this.errors).forEach(x => {
      this.errors[x] = "";
    });

    response.catch((error: Payload) => {
      if (error && error.errors) {
        Object.keys(error.errors).forEach(x => {
          let err = error.errors[x];
          this.errors[err.name] = err.value;
        });
      }
    });
    return response;
  }

  list(params: Payload = {}, config: Payload = {}): Payload {
    // 默认把this.t里的search, pageIndex, pageSize参数传到list方法里
    params["search"] = this.t.search;
    params["pageIndex"] = this.t.pageIndex;
    params["pageSize"] = this.t.pageSize;

    return this.request(params, config, "list").then((r: Payload) => {
      this.t.RecordCount = r["RecordCount"];
      this.t.Records = r["Records"];
      return r;
    });
  }
  // 获取单个资源
  retrieve(params: Payload = {}, config: Payload = {}): Payload {
    return this.request(params, config, "retrieve").then((r: Payload) => {
      this.m.populate(r);
      return r;
    });
  }

  // 创建单个资源
  create(body: Payload = {}, config: Payload = {}): AxiosPromise {
    return this.request(body, config, "create");
  }

  // 更新单个资源
  update(body: Payload = {}, config: Payload = {}): AxiosPromise {
    return this.request(body, config, "update");
  }

  // 删除单个资源
  destroy(body: Payload, config: Payload = {}): AxiosPromise {
    return this.request(body, config, "destroy");
  }
}
