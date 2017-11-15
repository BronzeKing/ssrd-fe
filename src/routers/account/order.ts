const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/index")), "order");
const projectCreate = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/projectCreate")), "order");
const projectCreateDetail = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/projectCreateDetail")), "order");
const afterMarket = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/afterMarket")), "order"); //售后申请
const mineOrder = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/mineOrder")), "order"); //我的订单
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
