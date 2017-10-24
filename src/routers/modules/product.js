/**
 * 商品相关路由
 */

 // 基辅设备
const equipment = r => require.ensure([], () => r(require('pages/views/product/equipment')), 'product');
// 商品展示
const product = r => require.ensure([], () => r(require('pages/views/product/product')), 'product');
const productDetail = r => require.ensure([], () => r(require('pages/views/product/productDetail')), 'product');

export default [
    {
        path: '/equipment',
        name: 'equipment',
        component: equipment
    },
    {
        path: '/product',
        name: 'product',
        component: product
    },
    {
        path: '/product/:id',
        name: 'productDetail',
        component: productDetail
    }
];
