/**
 * 该文件主要用来处理vue运行中所需js以及组件注册，全局样式等
 */
import Vue                      from 'vue';
import * as filters             from 'filters';
import {LineThrough, Hello}     from 'components';
import * as enums               from 'enums';

import Core from './core';

// 引入elemtn-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI);

// 注册vue filters;
Object.keys(filters).forEach(name => {
    Vue.filter(name, filters[name]);
});

// 注册全局组件
Vue.component('LineThrough', LineThrough);
Vue.component('Hello', Hello);

// 注册全局函数
Vue.use(Core);

// 原型挂在常用变量
Vue.prototype.$enums = enums;
