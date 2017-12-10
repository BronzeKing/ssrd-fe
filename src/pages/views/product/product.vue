<template lang="pug">
    .page-product.mt20
        .container
            .left-product
                .product-menu
                    .product-menu-header
                        p.f18 产品展示 /
                            span.f14  Product display
                    .product-menu-body
                        el-menu(
                        class="el-menu-vertical-demo"
                        @select="handleSelect")
                            el-submenu(v-for="(first, firstIndex) in Category.t.Records" :index="String(first.id)" :key="firstIndex")
                                template(slot="title")
                                    span(slot="title") {{first.name}}
                                el-submenu(v-for="(second, secondIndex) in first.sub" :index="String(second.id)" :key="secondIndex")
                                    template(slot="title") {{second.name}}
                                    el-menu-item(v-for="(third, thirdIndex) in second.sub" :index="String(third.id)" :key="thirdIndex") {{third.name}}
            .right-product
                transition(name="router-fade" mode="out-in")
                    router-view(:category="category")
        
    
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Category } from 'apis';

@Component
export default class ProductView extends Vue
{
    @Provide() Category = Category;
    @Provide() category = '';

    protected created () {
        Category.list();
    }
    handleSelect(key: string) {
        this.category = key;
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/product/product";
    
</style>