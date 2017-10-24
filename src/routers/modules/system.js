/**
 * 系统展示相关路由
 */
const system = r => require.ensure([], () => r(require('pages/views/system/system')), 'system');
const systemDetail = r => require.ensure([], () => r(require('pages/views/system/systemDetail')), 'system');
const systemCase = r => require.ensure([], () => r(require('pages/views/system/systemCase')), 'system');
const systemCaseDetail = r => require.ensure([], () => r(require('pages/views/system/systemCaseDetail')), 'system');
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
    },
    {
        path: 'systemCase',
        name: 'systemCase',
        component: systemCase
    }, {
        path: 'systemCase/:id',
        name: 'systemCaseDetail',
        component: systemCaseDetail
    }
];
