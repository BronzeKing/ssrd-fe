/**
 * 首页相关路由
 */

// 首页
const exhibition = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/exhibition/exhibition-assist")), "home");

export default [
    {
        path: "/exhibition",
        name: "exhibition",
        component: exhibition,
        meta: {
            headerMenuIndex: 5
        }
    }
];
