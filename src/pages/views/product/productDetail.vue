<template lang="pug">
    .product-detail
        .breadcrumb.mb20
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'product' }") 系统产品
                el-breadcrumb-item {{Product.m.category.name}}
        .detail-header
            .detail-content-img
                img(class="lookpic-picture" :src="Product.m.background")
            .product-detail-info
                h3.mb10 {{Product.m.name}}
                p 产品描述:
                p.detail-text {{Product.m.description}}
                .mt30
                    el-input-number(v-model="num" :min="1" :max="10" )
                    el-button(@click="put2Chart") 加入购物车
                    el-button(@click="Collect.create({productId: Product.m.id})") 收藏
        template(v-for="(item, index) in content")
            p {{item.name}}
            p {{item.value}}
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Product, Collect } from 'apis';
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
    put2Chart (item: any) {
    }
};
</script>
