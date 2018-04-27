<template lang="pug">
    .page-cart
        .title.f18 我的购物车
        .order-item
                el-table(:data="carts" style="width: 100%")
                    el-table-column(label="产品" width="180" )
                        template(slot-scope="scope" )
                            div(style="text-align: center;")
                                img(:src="scope.row.picture", alt="" style="width:100%;")
                                p {{scope.row.name}}
                    el-table-column(prop="text" label="事项")
                        template(slot-scope="scope")
                            p(v-html="scope.row.text")
                    el-table-column(prop="remark" label="备注" width="100")
                    el-table-column(label="操作" width="100")
                        template(slot-scope="scope")
                            el-button(type="text" @click="deleteItem(scope.$index)") 删除
                .order-item-btn
                    span.btn(@click="submit") 提交订单
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { System } from "apis";
import { typeOf } from 'utils/extends';

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

    public deleteItem(index: number) {
        let carts = this.$store.getters.cart || [];
        carts.pop(index);
        this.$store.dispatch('updateCart', carts);
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
