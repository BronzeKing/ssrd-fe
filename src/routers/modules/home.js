/**
 * 首页相关路由
 */

 // 首页
const home          = r => require.ensure([], () => r(require('pages/views/home/home')), 'home');
const companyNews   = r => require.ensure([], () => r(require('pages/views/home/company-news')), 'home');
const caseList      = r => require.ensure([], () => r(require('pages/views/home/case-list')), 'home');
// const Login = r => require.ensure([], () => r(require('pages/home/login')), 'home');

export default [
    {
        path: 'home',
        name: 'home',
        component: home
    },
    {
        path: 'companyNews',
        name: 'companyNews',
        component: companyNews
    },
    {
        path: 'caseList',
        name: 'caseList',
        component: caseList
    }
];
