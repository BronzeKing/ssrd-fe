const support = r => require.ensure([], () => r(require('pages/views/support/index')), 'support');
const faqs = r => require.ensure([], () => r(require('pages/views/support/components/faqs')), 'faqs');
const servicePromise = r => require.ensure([], () => r(require('pages/views/support/components/servicePromise')), 'servicePromise');
const feedback = r => require.ensure([], () => r(require('pages/views/support/components/feedback')), 'feedback');
const survey = r => require.ensure([], () => r(require('pages/views/support/components/survey')), 'survey');
const serviceNet = r => require.ensure([], () => r(require('pages/views/support/components/serviceNet')), 'serviceNet');
const opVideo = r => require.ensure([], () => r(require('pages/views/support/components/opVideo')), 'opVideo');
const download = r => require.ensure([], () => r(require('pages/views/support/components/download')), 'download');
export default [{
    path: '/support',
    // name: 'support',
    redirect: '/support/faqs',
    component: support,
    children: [
        {
            path: 'faqs',
            component: faqs,
            name: 'faqs'
        },
        {
            path: 'faqs/:id',
            component: faqs,
            name: 'faqsDetail'
        },
        {
            path: 'servicePromise',
            component: servicePromise,
            name: 'servicePromise'
        },
        {
            path: 'feedback',
            component: feedback,
            name: 'feedback'
        },
        {
            path: 'survey',
            component: survey,
            name: 'survey'
        },
        {
            path: 'serviceNet',
            component: serviceNet,
            name: 'serviceNet'
        },
        {
            path: 'download',
            component: download,
            name: 'download'
        },
        {
            path: 'download/:id',
            component: download,
            name: 'downloadDetail'
        },
        {
            path: 'opVideo',
            component: opVideo,
            name: 'opVideo'
        },
        {
            path: 'opVideo/:id',
            component: opVideo,
            name: 'opVideoDetail'
        }
    ]
}];
