/**
 * 首页相关路由
 */

 // 首页
const Home = r => require.ensure([], () => r(require('pages/home/home')), 'home');
const Login = r => require.ensure([], () => r(require('pages/home/login')), 'home');

export default [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];
