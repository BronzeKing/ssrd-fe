/**
 * 关于我们相关路由
 */

 // 关于我们
const system = r => require.ensure([], () => r(require('pages/views/system/system-show')), 'system');

export default [
    {
        path: 'system',
        name: 'system',
        component: system
    }
];
