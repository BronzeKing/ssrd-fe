/**
 * 关于登陆注册相关路由
 */

const login = (r: any) =>
  require.ensure([], () => r(require("src/pages/views/login/login")), "login");
const register = (r: any) =>
  require.ensure([], () => r(require("src/pages/views/login/register")), "login");

export default [
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  }
];
