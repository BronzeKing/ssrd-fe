/**
 * 商品相关路由
 */

 // 基辅设备
const equipment = r => require.ensure([], () => r(require('pages/views/product/equipment')), 'product');
// 商品展示
const product = r => require.ensure([], () => r(require('pages/views/product/product')), 'product');
// 公司简介
const productList = r => require.ensure([], () => r(require('pages/views/product/components/product-list')), 'product');
const productDetail = r => require.ensure([], () => r(require('pages/views/product/productDetail')), 'product');

export default [
    {
        path: '/equipment',
        name: 'equipment',
        component: equipment,
        meta: {
            headerMenuIndex: 2
        }
    },
    {
        path: '/product',
        name: 'product',
        component: product,
        redirect: {name: productList},
        meta: {
            headerMenuIndex: 2
        },
        children: [
            {
                path: '',
                name: 'productList',
                component: productList,
                meta: {
                    title: '产品列表',
                    activeTab: 1
                }
            },
            {
                path: '/productDetail/:id',
                name: 'productDetail',
                component: productDetail,
                meta: {
                    headerMenuIndex: 2
                }
            }
        ]
    }
];
