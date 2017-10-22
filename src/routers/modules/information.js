const news = r => require.ensure([], () => r(require('pages/views/information/components/news')), 'news');
export default [{
    path: 'information',
    redirect: '/information/news',
    component: news,
    children: [{
        path: 'news',
        component: news,
        name: 'news',
        meta: {
            action: 'list'
        }
    },
    {
        path: 'news/:id',
        component: news,
        name: 'newsDetail',
        meta: {
            action: 'detail'
        }
    }]
}];
