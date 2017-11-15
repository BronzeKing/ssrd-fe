const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/index")), "order");
const projectCreate = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/projectCreate")), "order");
const projectCreateDetail = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/projectCreateDetail")), "order");
const afterMarket = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/afterMarket")), "order"); //售后申请
const quick = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/quick")), "order"); //快捷下单
const mineOrder = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/mineOrder")), "order"); //我的订单
const cart = (r: any) => require.ensure([], () => r(require("pages/account/order/cart")), "order"); //我的购物车
const collect = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/collect")), "order"); //我的收藏
const history = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/history")), "order"); //我的浏览记录
export default [
    {
        path: "order",
        name: "order",
        component: index,
        children: [
            {
                path: "afterMarket",
                name: "afterMarket",
                component: afterMarket
            },
            {
                path: "quick",
                name: "quick",
                component: quick
            },
            {
                path: "cart",
                name: "cart",
                component: cart
            },
            {
                path: "collect",
                name: "collect",
                component: collect
            },
            {
                path: "history",
                name: "history",
                component: history
            },
            {
                path: "projectCreate",
                name: "projectCreate",
                component: projectCreate
            },
            {
                path: "projectCreate/:id",
                name: "projectCreateDetail",
                component: projectCreateDetail
            },
            {
                path: "mine",
                name: "mineOrder",
                component: mineOrder
            }
        ]
    }
];
