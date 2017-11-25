/**
 * 个人中心相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("pages/account/index")), "account");
const personal = (r: any) =>
    require.ensure([], () => r(require("pages/account/personal")), "account");

import manager from "./manager";
import project from "./project";
import order from "./order";

export default {
    path: "/usercenter/",
    component: index,
    // redirect: "/account/order",
    meta: {auth: true},
    children: [
        {
            path: "",
            name: "personal",
            component: personal
        },
        ...manager,
        ...project,
        ...order
    ]
};
