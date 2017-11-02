const information = r => require.ensure([], () => r(require('pages/views/information/index')), 'information');
const news = r => require.ensure([], () => r(require('pages/views/information/components/news')), 'information');
const newsDetail = r => require.ensure([], () => r(require('pages/views/information/components/newsDetail')), 'information');
export default [{
    path: '/information',
    name: 'information',
    redirect: '/information/news',
    component: information,
    children: [
        {
            path: 'news',
            component: news,
            name: 'news',
            meta: {
                headerMenuIndex: 7
            }
        },
        {
            path: 'news/:id',
            component: newsDetail,
            name: 'newsDetail',
            meta: {
                headerMenuIndex: 7
            }
        }
    ]
}];
