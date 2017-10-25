/**
 * 个人中心相关路由
 */
const views = r => require.ensure([], () => r(require('pages/views/views')), 'views');
import manager        from './manager';

export default {
    // path: '/',
    path: '/account',
    // name: 'views',
    component: views,
    children: [
        ...manager
    ]
};
