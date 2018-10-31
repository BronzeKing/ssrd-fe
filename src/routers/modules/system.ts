/**
 * 系统展示相关路由
 */
const system = (r: any) =>
  require.ensure([], () => r(require("src/pages/views/system/system")), "system");
const systemDetail = (r: any) =>
  require.ensure(
    [],
    () => r(require("src/pages/views/system/systemDetail")),
    "system"
  );
const systemCase = (r: any) =>
  require.ensure(
    [],
    () => r(require("src/pages/views/system/systemCase")),
    "system"
  );
const systemCaseDetail = (r: any) =>
  require.ensure(
    [],
    () => r(require("src/pages/views/system/systemCaseDetail")),
    "system"
  );
export default [
  {
    path: "system",
    name: "system",
    component: system,
    meta: {
      headerMenuIndex: 1
    }
  },
  {
    path: "system/:id",
    name: "systemDetail",
    component: systemDetail,
    meta: {
      headerMenuIndex: 1
    }
  },
  {
    path: "systemCase",
    name: "systemCase",
    component: systemCase,
    meta: {
      headerMenuIndex: 1
    }
  },
  {
    path: "systemCase/:id",
    name: "systemCaseDetail",
    component: systemCaseDetail,
    meta: {
      headerMenuIndex: 1
    }
  }
];
