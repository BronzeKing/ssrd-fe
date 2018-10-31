const information = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/information/index")), "information");
const news = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/information/components/news")), "information");
const newsDetail = (r: any) =>
    require.ensure(
        [],
        () => r(require("src/pages/views/information/components/newsDetail")),
        "information"
    );
const caringNews = (r: any) =>
    require.ensure(
        [],
        () => r(require("src/pages/views/information/components/caringNews")),
        "community"
    );

const caringNewsDetail = (r: any) =>
    require.ensure(
        [],
        () => r(require("src/pages/views/information/components/caringNewsDetail")),
        "community"
    );
export default [
    {
        path: "/information",
        name: "information",
        redirect: "/information/news",
        component: information,
        children: [
            {
                path: "news",
                component: news,
                name: "news",
                meta: {
                    headerMenuIndex: 7
                }
            },
            {
                path: "news/:id",
                component: newsDetail,
                name: "newsDetail",
                meta: {
                    headerMenuIndex: 7
                }
            },
            {
                path: "caringNews",
                component: caringNews,
                name: "caringNews",
                meta: {
                    headerMenuIndex: 7
                }
            },
            {
                path: "caringNews/:id",
                component: caringNewsDetail,
                name: "caringNewsDetail",
                meta: {
                    headerMenuIndex: 7
                }
            }
        ]
    }
];
