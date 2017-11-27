import Vue from "vue";
import App from "./App.vue";

import router from "routers"; // 所有路由文件配置
import store from "vuexs"; // 所有vuex文件
import { Cart, Env, Login, Profile } from "apis";

import "configs"; // 第三方插件引用以及全局函数挂载

// 是否开启浏览器vue-devtools调试
Vue.config.productionTip = process.env.NODE_ENV !== "production";

/* eslint-disable no-new */

function user() {
    if (localStorage.token) {
        Login.retrieve().then((payload: Payload) => {
            // 如果返回url的话 说明需要重定向 登录不成功
            let { profile, ...r } = payload;
            if (r.url) {
                store.commit("logout");
            } else {
                Profile.m.populate(profile);
                store.commit("login", r);
            }
        });
    } else {
        store.commit("logout");
    }
}
async function env() {
    Env.retrieve().then((r: any) => {
        store.commit("env", r);
    });
}
async function cart() {
    Cart.retrieve().then((r: Array<any>) => {
        store.commit('cart', r)
    })
}
async function ready() {
    let userResposne = user();
    let envRresponse = env();
    let cartResponse = cart();
    await userResposne;
    await envRresponse;
    await cartResponse;
}
ready().then(() => {
    new Vue({
        el: "#app",
        router,
        store,
        render: h => h(App)
    });
});
