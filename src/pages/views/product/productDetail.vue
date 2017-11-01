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

        p 产品概述
        p {{Product.m.summary}} 

        p 技术参数
        p {{Product.m.techParameter}} 

        p 应用领域
        p {{Product.m.domain}} 

        p 其他
        p {{Product.m.other}} 
</template>

<script>
import  { Product, Collect } from 'apis';
export default {
    name: 'productDetail',
    data () {
        return {
            Product: Product,
            Collect: Collect,
            num: ''
        };
    },
    created () {
        Product.retrieve({id: this.$route.params.id});
    },
    methods: {
        put2Chart (item) {
        }
    }
};
</script>
