// import  ResourceMixin, ResourceListMixin  from "./resource.ts";

export interface Query {
    // 存放resourceList 中的参数
    source: string; // documents中的来源
    type: string; // 查询参数中的类型
    search: string; // 搜索字段
}

// export default  ResourceListMixin, ResourceMixin
