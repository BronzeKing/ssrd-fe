const index = r => require.ensure([], () => r(require('pages/account/index')), 'index');
const secure = r => require.ensure([], () => r(require('pages/account/manager/secure')), 'secure');
const user = r => require.ensure([], () => r(require('pages/account/manager/user')), 'user');
const message = r => require.ensure([], () => r(require('pages/account/manager/message')), 'message');
const messageDetail = r => require.ensure([], () => r(require('pages/account/manager/messageDetail')), 'messageDetail');
const authorizeCode = r => require.ensure([], () => r(require('pages/account/manager/authorizeCode')), 'authorizeCode');
const invitation = r => require.ensure([], () => r(require('pages/account/manager/invitation')), 'invitation');
const profile = r => require.ensure([], () => r(require('pages/account/manager/profile')), 'profile');
export default [{
    path: '/account',
    name: 'account',
    component: index,
    redirect: '/account/secure',
    children: [
        {
            path: 'secure',
            name: 'secure',
            component: secure
        },
        {
            path: 'user',
            name: 'user',
            component: user
        },
        {
            path: 'message',
            name: 'message',
            component: message
        },
        {
            path: 'message/:id',
            name: 'messageDetail',
            component: messageDetail
        },
        {
            path: 'authorizeCode',
            name: 'authorizeCode',
            component: authorizeCode
        },
        {
            path: 'invitation',
            name: 'invitation',
            component: invitation
        },
        {
            path: 'profile',
            name: 'profile',
            component: profile
        }
    ]
}];
