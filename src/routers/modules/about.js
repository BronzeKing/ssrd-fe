/**
 * 关于我们相关路由
 */

 // 关于我们
const about = r => require.ensure([], () => r(require('pages/views/about/about')), 'about');

export default [
    {
        path: 'about',
        name: 'about',
        component: about
    }
];
