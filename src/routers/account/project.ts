const index = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/index")), "project");
const project = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/project")), "project");
const projectDetail = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/projectDetail")), "project");
const documents = (r: any) =>
    require.ensure([], () => r(require("pages/account/project/documents")), "project");
export default [
    {
        path: "project",
        name: "project",
        component: index,
        redirect: { name: "projectList" },
        children: [
            {
                path: "documents",
                name: "project.documents",
                component: documents
            },
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
