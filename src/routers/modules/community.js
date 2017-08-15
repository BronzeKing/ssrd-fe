/**
 * 社区相关路由
 */

 // 爱心社区
const caringCommunity = r => require.ensure([], () => r(require('pages/views/community/caring-community')), 'community');
// const Login = r => require.ensure([], () => r(require('pages/home/login')), 'home');

export default [
    {
        path: 'caringCommunity',
        name: 'caringCommunity',
        component: caringCommunity
    }
];
