const support = r => require.ensure([], () => r(require('pages/views/support/index')), 'support');
const faqs = r => require.ensure([], () => r(require('pages/views/support/components/faqs')), 'support');
const servicePromise = r => require.ensure([], () => r(require('pages/views/support/components/servicePromise')), 'support');
const feedback = r => require.ensure([], () => r(require('pages/views/support/components/feedback')), 'support');
const survey = r => require.ensure([], () => r(require('pages/views/support/components/survey')), 'support');
const serviceNet = r => require.ensure([], () => r(require('pages/views/support/components/serviceNet')), 'support');
const opVideo = r => require.ensure([], () => r(require('pages/views/support/components/opVideo')), 'support');
const download = r => require.ensure([], () => r(require('pages/views/support/components/download')), 'support');
export default [{
    path: '/support',
    name: 'support',
    redirect: '/support/faqs',
    component: support,
    beforeEnter (to, from, next) {
        to.meta.headerMenuIndex = 4;
        next();
    },
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
