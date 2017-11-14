const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/order/index")), "order");

export default [
    {
        path: "order",
        name: "order",
        component: index
    }
];
