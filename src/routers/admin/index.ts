/**
 * 后台管理相关路由
 */
const index = (r: any) => require.ensure([], () => r(require("pages/admin/index")), "admin");
const recruit = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/recruit")), "admin"); //招聘信息
const system = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/system")), "admin"); //系统管理（方案管理)
const video = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/video")), "admin"); // 视频管理
const documents = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/documents")), "admin"); //文档下载管理
const partner = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/partner")), "admin"); //合作伙伴
const honor = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/honor")), "admin"); //荣誉资质
const company = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/company")), "admin"); // 公司基本信息
const news = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/news")), "admin"); //资讯管理
const group = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/group")), "admin"); // 部门管理
const user = (r: any) =>
    require.ensure([], () => r(require("pages/admin/components/user")), "admin"); //用户管理

export default {
    path: "/admin/",
    component: index,
    name: "admin",
    redirect: "/admin/system",
    meta: { auth: true, admin: true },
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
            path: "news",
            name: "admin.news",
            component: news
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
        },
        {
            path: "group",
            name: "admin.group",
            component: group
        },
        {
            path: "user",
            name: "admin.user",
            component: user
        },
        {
            path: "company",
            name: "admin.company",
            component: company
        }
    ]
};
