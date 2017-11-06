/**
 * 个人中心相关路由
 */
import manager from "./manager";
import project from "./project";

export default {
  path: "/acount",
  // name: 'views',
  // component: views,
  redirect: "acount",
  children: [...manager, ...project]
};
