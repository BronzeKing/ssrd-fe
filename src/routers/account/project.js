const index = r => require.ensure([], () => r(require('pages/account/index')), 'project');
const project = r => require.ensure([], () => r(require('pages/account/project/project')), 'project');
const projectDetail = r => require.ensure([], () => r(require('pages/account/project/projectDetail')), 'project');
export default [{
    path: '/project',
    name: 'project',
    component: index,
    redirect: '/project/',
    children: [
        {
            path: '/',
            component: project
        },
        {
            path: ':id',
            name: 'projectDetail',
            component: projectDetail
        }
    ]
}];
