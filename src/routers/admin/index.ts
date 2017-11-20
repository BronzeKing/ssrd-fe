/**
 * 后台管理相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("pages/admin/index")), "admin");
const recruit = (r: any) => require.ensure([], () => r(require("pages/admin/components/recruit")), "admin");


export default {
    path: "/admin/",
    component: index,
    children: [
        {
            path: "recruit",
            name: "admin.recruit",
            component: recruit
        }
    ]
};
