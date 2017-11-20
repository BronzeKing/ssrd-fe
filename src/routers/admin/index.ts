/**
 * 后台管理相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("pages/admin/index")), "admin");
const recruit = (r: any) => require.ensure([], () => r(require("pages/admin/components/recruit")), "admin");
const system = (r: any) => require.ensure([], () => r(require("pages/admin/components/system")), "admin");
const video = (r: any) => require.ensure([], () => r(require("pages/admin/components/video")), "admin");
const documents = (r: any) => require.ensure([], () => r(require("pages/admin/components/documents")), "admin");
const partner = (r: any) => require.ensure([], () => r(require("pages/admin/components/partner")), "admin");
const honor = (r: any) => require.ensure([], () => r(require("pages/admin/components/honor")), "admin");


export default {
    path: "/admin/",
    component: index,
    name: 'admin',
    redirect: '/admin/system',
    children: [
        {
            path: "recruit",
            name: "admin.recruit",
            component: recruit
        },
        {
            path: "system",
            name: "admin.system",
            component: system
        },
        {
            path: "documents",
            name: "admin.documents",
            component: documents
        },
        {
            path: "video",
            name: "admin.video",
            component: video
        },
        {
            path: "partner",
            name: "admin.partner",
            component: partner
        },
        {
            path: "honor",
            name: "admin.honor",
            component: honor
        }
    ]
};
