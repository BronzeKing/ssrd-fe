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
                                
                .product-menu.mt30
                    .product-menu-header
                        p.f18 联系我们 /
                            span.f14  Contact us
                    .product-menu-body
                        .product-menu-item 
                            i.iconfont.icon-tel
                            span.ml10 电话 ： 0725-82182153
                        .product-menu-item 
                            i.iconfont.icon-mail
                            span.ml10 传真 ： 0725-82182153
                        .product-menu-item 
                            i.iconfont.icon-qq
                            span.ml10 Q Q ： 843905268
                        .product-menu-item 
                            i.iconfont.icon-map
                            span.ml10 地址 ： 深圳市罗湖区人民北路117号洪湖大厦1011-1013室
                .product-menu.mt30.mb30
                    .product-menu-header
                        i.iconfont.icon-search.f20
                        p.f18.ml10.font-base  商品搜索
                    .product-menu-body
                        el-input.mt10(placeholder="请输入商品" v-model="searchValue" class="input-with-select")
                            el-button(slot="append" icon="search")
            .right-product
                transition(name="router-fade" mode="out-in")
                        router-view
        
    
</template>

<script>
import  { Product } from 'apis';
export default {
    name: 'product',
    data () {
        return {
            Product: Product,
            activeNames: [],
            searchValue: ''
        };
    },
    created () {
        Product.list();
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/product/product";
    
</style>
