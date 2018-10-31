/**
 * 首页相关路由
 */

// 首页
const views = (r: any) => require.ensure([], () => r(require("src/pages/views/views")), "views");
const home = (r: any) => require.ensure([], () => r(require("src/pages/views/home/home")), "views");

import homes from "./home";
import about from "./about";
import product from "./product";
import system from "./system";
import login from "./login";
import information from "./information";
import support from "./support";
import exhibition from "./exhibition";

export default {
    // path: '/',
    path: "/",
    // name: 'views',
    component: views,
    redirect: { name: "home" },
    children: [
        ...homes,
        ...about,
        ...product,
        ...system,
        ...login,
        ...information,
        ...support,
        ...exhibition
    ]
};
