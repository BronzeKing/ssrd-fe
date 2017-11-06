import Vue from "vue";
import Router, { Route } from "vue-router";
import store from "vuexs";

import views from "./modules/views";
import account from "./account";
const error = (r: any) =>
  require.ensure([], () => r(require("pages/views/error")), "views");
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
    account
  ]
});

route.afterEach((to: Route, from: Route) => {
  // 设置页面标题
  if (to.meta.title) {
    let title = to.meta.title || "深圳市盛世润达智能科技有限公司";
    document.title = title;
  }

  // 设置当前激活的菜单
  if (typeof to.meta.headerMenuIndex === "number") {
    let index = to.meta.headerMenuIndex;
    store.dispatch("updateNavActive", index);
  }
});

export default route;