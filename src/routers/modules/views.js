/**
 * 首页相关路由
 */

 // 首页
const views = r => require.ensure([], () => r(require('pages/views/views')), 'views');
const home = r => require.ensure([], () => r(require('pages/views/home')), 'views');
// const Login = r => require.ensure([], () => r(require('pages/home/login')), 'home');

export default {
    path: '/views',
    // name: 'views',
    component: views,
    children: [
        {
            path: '',
            redirect: 'home'
        },
        {
            path: 'home',
            name: 'home',
            component: home
        }
    ]
};
