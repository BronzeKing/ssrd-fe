/**
 * 首页相关路由
 */

// 首页
const views = (r: any) =>
  require.ensure([], () => r(require("pages/views/views")), "views");
const home = (r: any) =>
  require.ensure([], () => r(require("pages/views/home/home")), "views");

import homes from "./home";
import about from "./about";
import community from "./community";
import product from "./product";
import system from "./system";
import login from "./login";
import information from "./information";
import support from "./support";
import account from "../account";

export default {
  // path: '/',
  path: "/",
  // name: 'views',
  component: views,
  redirect: "home",
  children: [
    ...homes,
    ...about,
    ...community,
    ...product,
    ...system,
    ...login,
    ...information,
    ...support,
    ...account
  ]
};
