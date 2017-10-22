/**
 * 系统展示相关路由
 */
const system = r => require.ensure([], () => r(require('pages/views/system/index')), 'system');
const systemDetail = r => require.ensure([], () => r(require('pages/views/system/systemDetail')), 'systemDetail');
export default [
    {
        path: 'system',
        name: 'system',
        component: system
    },
    {
        path: 'system/:id',
        name: 'systemDetail',
        component: systemDetail
    }
];
