/**
 * 关于我们相关路由
 */

 // 关于我们
const system = r => require.ensure([], () => r(require('pages/views/system/system-show')), 'system');
const systemContainer = r => require.ensure([], () => r(require('pages/views/system/system-container')), 'systemContainer');
export default [
    {
        path: 'system',
        name: 'system',
        component: system
    },
    {
        path: 'systemContainer',
        name: 'systemContainer',
        component: systemContainer
    }
];
