/**
 * 个人中心相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("src/pages/account/index")), "account");
const personal = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/personal")), "account");

import manager from "./manager";
import project from "./project";
import order from "./order";

export default {
    path: "/usercenter/",
    name: "account",
    component: index,
    meta: { auth: true },
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
