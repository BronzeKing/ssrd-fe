/**
 * 商品相关路由
 */

 // 基辅设备
const kievEquipment = r => require.ensure([], () => r(require('pages/views/product/kiev-equipment')), 'product');
// 商品展示
const productShow = r => require.ensure([], () => r(require('pages/views/product/product-show')), 'product');

export default [
    {
        path: 'kievEquipment',
        name: 'kievEquipment',
        component: kievEquipment
    },
    {
        path: 'productShow',
        name: 'productShow',
        component: productShow
    }
];
