/**
 * 社区相关路由
 */

// 爱心社区
const caringCommunity = (r: any) =>
    require.ensure([], () => r(require("pages/views/community/index")), "community");
const news = (r: any) =>
    require.ensure([], () => r(require("pages/views/community/news")), "community");

const newsDetail = (r: any) =>
    require.ensure([], () => r(require("pages/views/community/newsDetail")), "community");

const action = (r: any) =>
    require.ensure([], () => r(require("pages/views/community/action")), "community");
const description = (r: any) =>
    require.ensure([], () => r(require("pages/views/community/description")), "community");

export default [
    {
        path: "/caringCommunity",
        name: "caringCommunity",
        component: caringCommunity,
        children: [
            {
                path: "news",
                component: news,
                name: "caringNews"
            },
            {
                path: "news/:id",
                component: newsDetail,
                name: "caringNewsDetail"
            },
            {
                path: "action",
                component: action,
                name: "action"
            },
            {
                path: "description",
                component: description,
                name: "description"
            }
        ]
    }
];
