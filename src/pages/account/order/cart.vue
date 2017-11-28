<template lang="pug">
    .page-cart
        .title.f18 我的购物车
        .order-item
                p(v-show="!carts.length") 无可用数据
                div(v-show="carts.length")
                    .order-item-info
                        el-col(:span="5") 2017-11-31 15:15:30
                    .order-item-des(v-for="item in carts")
                        el-col(:span="5")
                            .order-img
                                img(:src="item.picture")
                        el-col.pr30(:span="9")
                            p(v-html="n2br(item.content)")
                        el-col(:span="4") 备注：{{item.remark || '无'}}
                    .order-item-btn
                        span.btn(@click="submit") 提交订单
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { System } from "apis";
import { n2br, makeMap, typeOf } from 'utils/extends';

@Component
export default class CartView extends Vue {
    public get carts () {
        return this.$store.getters.cart || []
    }
    protected created() {
        this.$store.dispatch('cart')
    }
    public submit () {
        this.$router.push({ name: "settleCart" });
    }
    public handleCurrentChange() {

    }
}
</script>
<style lang="scss" scoped>
.page-cart {
    background: #fff;
    .title {
        height: 40px;
        border-bottom: 1px solid #e9e9e9;
        line-height: 40px;
        padding: 0 10px;
    }
    .order-item {
        padding: 15px 0;
        .order-item-info {
            padding: 0 15px;
            height: 30px;
        }
        .order-item-des {
            height: 115px;
            background-color: #e9e9e9;
            border-bottom: 1px solid #fff;
            padding: 8px 15px;
            line-height: 22px;
            .order-img {
                width: 150px;
                height: 100px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }
        .order-item-btn {
            //height: 30px;
            margin-top: 20px;
            display: flex;
            text-align: center;
            justify-content: flex-end;
            .btn {
                border: 1px solid #666666;
                margin-right: 12px;
                color: #666666;
            }
        }
    }
}
</style>
