/**
 * 首页相关路由
 */

// 首页
const home = (r: any) => require.ensure([], () => r(require("src/pages/views/home/home")), "home");

export default [
    {
        path: "",
        name: "home",
        component: home,
        meta: {
            headerMenuIndex: 0
        }
    }
];
