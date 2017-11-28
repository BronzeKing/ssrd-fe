<template lang="pug">
    .page-cart
        .title.f18 我的购物车
        .order-item
                el-table(:data="carts" style="width: 100%")
                    el-table-column(prop="img" label="2017-07-31 15:15:30" width="180")
                        template(scope="scope")
                            img(:src="scope.row.picture", alt="" style="width:100%;")
                    el-table-column(prop="text" label="订单号：16516515156")
                        template(scope="scope")
                            p(v-html="n2br(scope.row.content)")
                    el-table-column(prop="name" label="名称" width="180")
                    el-table-column(prop="remark" label="备注" width="100")
                    el-table-column(prop="" label="" width="100")
                        template(scope="scope")
                            el-button(type="text") 订单详情
                .order-item-btn
                    span.btn(@click="submit") 提交订单
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { System } from "apis";
import { n2br, makeMap, typeOf } from 'utils/extends';

@Component
export default class CartView extends Vue {
    @Provide() tableData = [{
            img: 'http://element.eleme.io/static/guide.0a8462c.png',
            text: '多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体',
            des: '备注：无'
          }, {
            img: 'http://element.eleme.io/static/guide.0a8462c.png',
            text: '多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体',
            des: '备注：无'
    }];
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
