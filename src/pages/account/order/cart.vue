<template lang="pug">
    .page-cart
        .title.f18 我的订单
        .order-item
                .order-item-info
                    el-col(:span="5") 2017-07-31 15:15:30
                .order-item-des(v-for="item in carts")
                    el-col(:span="5")
                        .order-img
                            img(:src="item.picture")
                    el-col.pr30(:span="9") {{item.content}}
                    el-col(:span="4") 备注：{{item.remark || '无'}}
                .order-item-btn
                    span.btn 订单详情
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { System } from "apis";
import { makeMap, typeOf } from 'utils/extends';

function makeContent(item: {[key: string]: any}) {
    let {name, picture, remark, content, ...rest} = item;
    return Object.keys(rest).map(key => {
        let ele: any = rest[key]
        let type: string = typeOf(ele)
        if (type !== 'object') {  // 直接输入数字或文字
            return ele ? (key + ': ' + ele) : ''
        } else if (typeOf(ele.value) === 'array') { // 多选checkbox
            return ele.value ? (key + ': ' + (ele.value.join(',')) || '无') : ''
        } else {   //多选输入， 如输入长宽高, 过滤未选中的表单，当没有一个选中时 显示  `无`
            let txt = ele.items.map((x: any) => {
                return x.value ? (x.name + ' ' + x.value) : ''
            }).filter((x: string) => x)
            return key + ': ' + (txt.join(',') || '无')
        }
    }).filter(x => x).join(';')
}
@Component
export default class CartView extends Vue {
    public get carts() {
        let items = this.$store.getters.cart;
        System.list().then((r: any) => {
            let map = makeMap(r.Records)
            items.forEach((element: any) => {
                element['picture'] =  map[element.name].picture
                element['content'] = makeContent(element)
            });
        });
        console.log(items)
        return items;
    }
    protected created() {
    }
    public makeContent(obj: any) {

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
