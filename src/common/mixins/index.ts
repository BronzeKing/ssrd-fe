/**
 * 改文件用来防止vue mixins文件
 */
import { ResourceListMixin, ResourceMixin } from "./resource";

export interface Query {
    // 存放resourceList 中的参数
    source: string; // documents中的来源
    type: string; // 查询参数中的类型
    search: string; // 搜索字段
}
export { ResourceListMixin, ResourceMixin };
