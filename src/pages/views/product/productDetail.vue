<template lang="pug">
    .product-detail
        .breadcrumb.mb20
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'product' }") 系统产品
                el-breadcrumb-item {{Product.m.category.name}}
        .detail-header
            .detail-content-img
                div(class="lookpic-picture" :style="{backgroundImage: `url(${Product.m.background})`}")
                div.image-list
                    div.lookpic-picture-mini(v-for="(item, index) in Product.m.pictures" @click="changePic" :key="index" :style="{backgroundImage: `url(${item.image})`}")
            .product-detail-info
                h3.mb10 {{Product.m.name}}
                p 产品描述:
                p.detail-text(v-html="Product.m.description")
                .mt50
                    el-input-number.mr15(v-model="num" size="mini" :min="1" :max="10" )
                    el-button(size="mini" type="primary" @click="addCart") 加入购物车
                    el-button(size="mini" type="info" @click="collecting") 收藏
        el-tabs
            el-tab-pane(v-for="(item, index) in content" :key="index" :label="item.name")
                div.pb30(v-html="item.value")
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Product, Collect, Cart } from 'apis';

@Component
export default class ProductDetailView extends Vue
{
    @Provide() Product = Product;
    @Provide() Collect = Collect;
    @Provide() num = '';
    @Provide() content = [];

    protected created () {
        Product.retrieve({id: this.$route.params.id}).then(() => {
            this.content = Product.m.content.map((item: {[key: string]: string}) => {
                let name: string = Object.keys(item)[0]
                let value: string = item[name]
                return {name: name, value: value}
            })
        })
    }
    collecting () {
        Collect.create({productId: this.Product.m.id}).then(() => {
            this.$message({
                message: '收藏成功',
                type: 'success'
            });
        })
    }
    addCart () {
        let product = this.Product.m
        let picture = (product.pictures.length && product.pictures[0]) || ''
        let item = {name: 'product', id: product.id, num: this.num || 1, picture: picture}
        this.$store.dispatch('addCart', item).then(() => {
            this.$message({
                message: '添加成功',
                type: 'success'
            });
        })
    }
    // 点击主图下面的小图切换主图逻辑。
    changePic(){
        console.log("这里写切换图片的逻辑.");
    }
};
</script>

<style lang="scss">
    @import '~scss/pages/views/product/product-detail'; 
</style>
