/**
 * 系统展示相关路由
 */
const system = r => require.ensure([], () => r(require('pages/views/system/index')), 'system');
const systemDetail = r => require.ensure([], () => r(require('pages/views/system/systemDetail')), 'systemDetail');
const systemCase = r => require.ensure([], () => r(require('pages/views/system/systemCase')), 'systemCase');
const systemCaseDetail = r => require.ensure([], () => r(require('pages/views/system/systemCaseDetail')), 'systemCaseDetail');
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
