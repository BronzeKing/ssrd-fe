const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/index")), "manager");
const secure = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/secure")), "manager");
const user = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/user")), "manager");
const message = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/message")), "manager");
const messageDetail = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/messageDetail")), "manager");
const authorizeCode = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/authorizeCode")), "manager");
const invitation = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/invitation")), "manager");
const profile = (r: any) =>
    require.ensure([], () => r(require("pages/account/manager/profile")), "manager");
const mineOrder = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/mineOrder")), "order");
import project from "./project";
import order from "./order";
export default [
    {
        path: "/account",
        name: "account",
        component: index,
        redirect: "/account/secure",
        children: [
            {
                path: "secure",
                name: "secure",
                component: secure
            },
            {
                path: "user",
                name: "user",
                component: user
            },
            {
                path: "message",
                name: "message",
                component: message
            },
            {
                path: "message/:id",
                name: "messageDetail",
                component: messageDetail
            },
            {
                path: "authorizeCode",
                name: "authorizeCode",
                component: authorizeCode
            },
            {
                path: "invitation",
                name: "invitation",
                component: invitation
            },
            {
                path: "profile",
                name: "profile",
                component: profile
            },
            {
                path: "mineOrder",
                name: "mineOrder",
                component: mineOrder
            },
            ...project,
            ...order
        ]
    }
];
