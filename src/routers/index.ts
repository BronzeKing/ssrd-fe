import Vue from "vue";
import Router, { Route } from "vue-router";
import store from "vuexs";
import User from "vuexs/modules/user";

import views from "./modules/views";
import account from "./account";
import admin from "./admin";
const error = (r: any) => require.ensure([], () => r(require("pages/views/error")), "views");
// const viewsPage = r => require.ensure([], () => r(require('pages/views/views')), 'views');

Vue.use(Router);

const route = new Router({
    routes: [
        {
            path: "/error",
            name: "error",
            component: error
        },
        views,
        admin,
        account
    ]
});

route.beforeEach((to: Route, from: Route, next: any) => {
    // 判断该路由是否需要登录权限
    if (to.matched.some(m => m.meta.auth) && !store.getters.authenticated) {
        next({
            name: "login",
            query: { next: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    } else {
        next();
    }
});

route.afterEach((to: Route, from: Route) => {
    // 设置页面标题
    if (to.meta.title) {
        let title = to.meta.title || "深圳市盛世润达智能科技有限公司";
        document.title = title;
    }
});

export default route;
