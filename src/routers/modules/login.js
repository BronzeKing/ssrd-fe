/**
 * 关于登陆注册相关路由
 */

const login = r => require.ensure([], () => r(require('pages/views/login/login')), 'login');
const register = r => require.ensure([], () => r(require('pages/views/login/register')), 'login');

export default [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register
    }
];
