/**
 * 商品相关路由
 */

// 基辅设备
import { Route } from "vue-router";
const equipment = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/product/equipment")), "product");
// 商品展示
const product = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/product/product")), "product");
// 公司简介
const productList = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/product/components/product-list")), "product");
const productDetail = (r: any) =>
    require.ensure([], () => r(require("src/pages/views/product/productDetail")), "product");

export default [
    {
        path: "/equipment",
        name: "equipment",
        component: equipment,
        meta: {
            headerMenuIndex: 2
        }
    },
    {
        path: "/product",
        name: "product",
        component: product,
        redirect: "/product/productList",
        children: [
            {
                path: "productList",
                name: "productList",
                component: productList,
                meta: {
                    title: "产品列表",
                    activeTab: 1
                }
            },
            {
                path: "/productDetail/:id",
                name: "productDetail",
                component: productDetail,
                meta: {
                    headerMenuIndex: 2
                }
            }
        ]
    }
];
