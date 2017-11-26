<template lang="pug">
    .page-product.mt20
        .container
            .left-product
                .product-menu
                    .product-menu-header
                        p.f18 产品展示 /
                            span.f14  Product display
                    .product-menu-body
                        el-collapse(v-model="activeNames")
                            el-collapse-item(title="智能化视屏监控" name="1")
                                ul
                                    li 前台设备
                                    li 后台设备
                                    li 传输设备
                            el-collapse-item(title="综合数据采集远程传输" name="2")
                                
                            el-collapse-item(title="专业工地车辆出入管理" name="3")
                                
                            el-collapse-item(title="塔防安全防碰撞系统" name="4")
                                
            .right-product
                transition(name="router-fade" mode="out-in")
                    router-view
        
    
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Product } from 'apis';

@Component
export default class ProductView extends Vue
{
    @Provide() Product = Product;
    @Provide() activeNames = '';
    @Provide() searchValue = '';

    protected created () {
        Product.list();
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/product/product";
    
</style>