/**
 * 该文件主要用来处理vue运行中所需js以及组件注册，全局样式等
 */
import Vue from 'vue';
import { FormartPrice } from 'filters';
import { LineThrough, Hello } from 'components';

// 注册vue filters;
Vue.filter('FormartPrice', FormartPrice);

// 注册全局组件
Vue.component('LineThrough', LineThrough);
Vue.component('Hello', Hello);
