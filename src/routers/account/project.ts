const index = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/project/index")), "project");
const project = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/project/project")), "project");
const projectDetail = (r: any) =>
    require.ensure([], () => r(require("src/pages/account/project/projectDetail")), "project");
export default [
    {
        path: "project",
        name: "project",
        component: index,
        redirect: { name: "projectList" },
        children: [
            {
                path: "",
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
