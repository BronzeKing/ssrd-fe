const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/index")), "project");
const project = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/project")), "project");
const projectDetail = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/projectDetail")), "project");
export default [
    {
        path: "project",
        name: "project",
        component: index,
        redirect: "/account/project/dynamic",
        children: [
            {
                path: "dynamic",
                name: "projectList",
                component: project
            },
            {
                path: ":id",
                name: "projectDetail",
                component: projectDetail
            }
        ]
    }
];
