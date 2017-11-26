<template lang="pug">
    div
        img(src="~assets/product-show.png")
        .product-content.mt15
            div(v-for="item in Product.t.Records" :key="item.id")
                img(:src="item.background")
                router-link(:to="{name: 'productDetail', params: {id: item.id} }")
                    p {{item.name}}
        el-pagination.mt20.tc(@current-change="Product.list" :page-size="Product.t.pageSize" layout="prev, pager, next, jumper" :total="Product.t.PageCount" :current-page.sync="Product.t.pageIndex")
        
    
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Product } from 'apis';
@Component
export default class ProductListView extends Vue
{
    @Provide() Product = Product;
    @Provide() activeNames = '';
    protected created () {
        Product.list();
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/product/product";
    
</style>