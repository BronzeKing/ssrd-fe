/**
 * 个人中心相关路由
 */
const views = r =>
  require.ensure([], () => r(require("pages/views/views")), "views");

import manager from "./manager";
import project from "./project";

export default {
  path: "/acount",
  // name: 'views',
  component: views,
  redirect: "acount",
  children: [...manager, ...project]
};
