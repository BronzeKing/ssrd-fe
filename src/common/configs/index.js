/**
 * 该文件主要用来处理vue运行中所需js以及组件注册，全局样式等
 */
import Vue from "vue";
import * as filters from "filters";
import { LineThrough } from "components";
import * as enums from "enums";
import { n2br } from "src/common/utils/extends";
import Raven from "raven-js";
import RavenVue from "raven-js/plugins/vue";

if (process.env.NODE_ENV === "production") {
    Raven.config("https://75710b6ea670418fbfb735b9f94b1aac@sentry.io/219602")
        .addPlugin(RavenVue, Vue)
        .install();
}

// import Core from './core';
import Core from "./core";
import axiosPlugin from "src/common/utils/ajax.ts";

// ajax封装
Vue.use(axiosPlugin);

// 引入elemtn-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 注册vue filters;
Object.keys(filters).forEach(name => {
    Vue.filter(name, filters[name]);
});

// 注册全局组件
Vue.component("LineThrough", LineThrough);

// 注册全局函数
// Vue.use(Core);

// 原型挂在常用变量
Vue.prototype.$enums = enums;
Vue.prototype.n2br = n2br;
