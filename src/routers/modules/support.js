const support = r => require.ensure([], () => r(require('pages/views/support/index')), 'support');
const faqs = r => require.ensure([], () => r(require('pages/views/support/components/faqs')), 'faqs');
const opVideo = r => require.ensure([], () => r(require('pages/views/support/components/opVideo')), 'opVideo');
const download = r => require.ensure([], () => r(require('pages/views/support/components/download')), 'download');
export default [{
    path: 'support',
    name: 'support',
    redirect: '/support/faqs',
    component: support,
    children: [{
        path: 'faqs',
        component: faqs,
        name: 'faqs'
    },
    {
        path: 'news/:id',
        component: faqs,
        name: 'faqsDetail'
    }, {
        path: 'opVideo',
        component: opVideo,
        name: 'opVideo'
    },
    {
        path: 'opVideo/:id',
        component: opVideo,
        name: 'opVideoDetail'
    }, {
        path: 'download',
        component: download,
        name: 'download'
    },
    {
        path: 'download/:id',
        component: download,
        name: 'downloadDetail'
    }]
}];
