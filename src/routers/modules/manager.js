const index = r => require.ensure([], () => r(require('pages/account/index')), 'index');
const secure = r => require.ensure([], () => r(require('pages/account/manager/secure')), 'secure');
const user = r => require.ensure([], () => r(require('pages/account/manager/user')), 'user');
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
        }
    ]
}];
