/**
 * 首页相关路由
 */

// 首页
const views = (r: any) => require.ensure([], () => r(require("pages/views/views")), "views");
const home = (r: any) => require.ensure([], () => r(require("pages/views/home/home")), "views");

import homes from "./home";
import about from "./about";
import product from "./product";
import system from "./system";
import login from "./login";
import information from "./information";
import support from "./support";

export default {
    // path: '/',
    path: "/",
    // name: 'views',
    component: views,
    redirect: "home",
    children: [...homes, ...about, ...product, ...system, ...login, ...information, ...support]
};
