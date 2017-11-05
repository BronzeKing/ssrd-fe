/**
 * 首页相关路由
 */

 // 首页
const home          = r => require.ensure([], () => r(require('pages/views/home/home')), 'home');
// const Login = r => require.ensure([], () => r(require('pages/home/login')), 'home');

export default [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            headerMenuIndex: 0
        }
    }
];
