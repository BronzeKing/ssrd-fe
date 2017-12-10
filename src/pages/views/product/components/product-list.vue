<template lang="pug">
    div.page-product-list
        img(src="~assets/product-show.png")
        .product-content.mt15
            div.product-list-item(v-for="item in Product.t.Records" :key="item.id")
                router-link(:to="{name: 'productDetail', params: {id: item.id} }")
                    div.product-image-box
                        img.product-image(:src="item.background")
                    p.product-name {{item.name}}
        el-pagination.mt20.tc(@current-change="Product.list" :page-size="Product.t.pageSize" layout="prev, pager, next, jumper" :total="Product.t.PageCount" :current-page.sync="Product.t.pageIndex")
        
    
</template>

<script lang="ts">
import { Component, Provide, Vue, Prop, Watch } from 'vue-property-decorator';
import  { Product } from 'apis';
@Component
export default class ProductListView extends Vue
{
    @Provide() Product = Product;
    @Prop()
    category: string;
    @Watch('category')
    onCategoryChange() {
        Product.list({category: this.category})
    }
    protected created () {
        Product.list();
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/product/product";
@import "~scss/pages/views/product/product-list";
</style>