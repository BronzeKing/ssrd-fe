const index = r => require.ensure([], () => r(require('pages/account/index')), 'manager');
const secure = r => require.ensure([], () => r(require('pages/account/manager/secure')), 'manager');
const user = r => require.ensure([], () => r(require('pages/account/manager/user')), 'manager');
const message = r => require.ensure([], () => r(require('pages/account/manager/message')), 'manager');
const messageDetail = r => require.ensure([], () => r(require('pages/account/manager/messageDetail')), 'manager');
const authorizeCode = r => require.ensure([], () => r(require('pages/account/manager/authorizeCode')), 'manager');
const invitation = r => require.ensure([], () => r(require('pages/account/manager/invitation')), 'manager');
const profile = r => require.ensure([], () => r(require('pages/account/manager/profile')), 'manager');
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
