/**
 * 社区相关路由
 */

// 爱心社区
const caringCommunity = (r: any) =>
  require.ensure(
    [],
    () => r(require("pages/views/community/caring-community")),
    "community"
  );

export default [
  {
    path: "/caringCommunity",
    name: "caringCommunity",
    component: caringCommunity
  }
];
