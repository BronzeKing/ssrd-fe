const index = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/account/project/index")),
    "project"
  );
const project = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/account/project/project")),
    "project"
  );
const projectDetail = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/account/project/projectDetail")),
    "project"
  );
const projectCreate = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/account/project/projectCreate")),
    "project"
  );
const projectCreateDetail = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/account/project/projectCreateDetail")),
    "project"
  );
export default [
  {
    path: "/project",
    name: "project",
    component: index,
    redirect: "/project/",
    children: [
      {
        path: "/",
        component: project
      },
      {
        path: ":id",
        name: "projectDetail",
        component: projectDetail
      }
    ]
  },
  {
    path: "projectCreate",
    name: "projectCreate",
    component: projectCreate
  },
  {
    path: "projectCreate/:id",
    name: "projectCreateDetail",
    component: projectCreateDetail
  }
];
