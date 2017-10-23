<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'product' }") 系统产品
                el-breadcrumb-item {{Product.m.category.name}}
        div
            img(class="lookpic-picture" :src="Product.m.background")
            p {{Product.m.name}}
            p 产品描述
            p {{Product.m.description}}
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
            Collect: Collect
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
