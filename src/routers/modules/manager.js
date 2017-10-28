const index = r => require.ensure([], () => r(require('pages/account/index')), 'manager');
const secure = r => require.ensure([], () => r(require('pages/account/manager/secure')), 'manager');
const user = r => require.ensure([], () => r(require('pages/account/manager/user')), 'manager');
const message = r => require.ensure([], () => r(require('pages/account/manager/message')), 'manager');
const messageDetail = r => require.ensure([], () => r(require('pages/account/manager/messageDetail')), 'manager');
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
        }
    ]
}];
