/**
 * 个人中心相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("pages/account/index")), "account");

import manager from "./manager";
import project from "./project";
import order from "./order";

export default {
    path: "/account",
    component: index,
    redirect: "/account/order",
    children: [...manager, ...project, ...order]
};
