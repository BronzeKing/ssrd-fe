const index = (r: any) =>
    require.ensure([], () => r(require("pages/views/exhibition/index")), "exhibition");
const detail = (r: any) =>
    require.ensure([], () => r(require("pages/views/exhibition/detail")), "exhibition");

export default [
    {
        path: "exhibition",
        name: "exhibition",
        component: index,
        children: [
            {
                path: ":id",
                name: "exhibitionDetail",
                component: detail
            }
        ]
    }
];
