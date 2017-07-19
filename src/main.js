import Vue from 'vue';
import App from './App';

import router from 'router';                                              // 所有路由文件配置
import store  from 'vuexs';                                               // 所有vuex文件

// 是否开启浏览器vue-devtools调试
Vue.config.productionTip = (process.env.NODE_ENV !== 'production');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
