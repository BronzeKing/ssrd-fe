<template lang="pug">
    .page-mineOrder
        .title.f18 我的订单
        .order-item(@click="rowClick")
                .order-item-info
                    el-col(:span="5") 2017-07-31 15:15:30
                    el-col(:span="13") 订单号：16516515156
                    el-col(:span="4") 2
                    el-col(:span="2") 201
                .order-item-des(v-for="n in 2")
                    el-col(:span="5")
                        .order-img
                            img(src="http://element.eleme.io/static/guide.0a8462c.png")
                    el-col.pr30(:span="13") 多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体
                    el-col(:span="4") 备注：无
                    el-col(:span="2")
                .order-item-btn
                    span.btn 申请售后
                    span.btn 订单详情
                        
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Message } from 'apis';
@Component
export default class MessageView extends Vue
{
    @Provide() data = '';
    protected created () {
        Message.list();
    }
    rowClick (m: Payload) {
        // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
        this.$router.replace({name: 'orderDetail', params: { id: '1' }});
    }

};
</script>
<style lang="scss">
.page-mineOrder{
    // width: 1000px;
    background: #fff;
    .title{
        height: 40px;
        border-bottom: 1px solid #E9E9E9;
        line-height: 40px;
        padding: 0 10px;
    }
    .order-item{
        padding: 15px 0;
        .order-item-info{
            padding: 0 15px;
            height: 30px;
        }
        .order-item-des{
            height: 115px;
            background-color: #E9E9E9;
            border-bottom: 1px solid #fff;
            padding: 8px 15px;
            line-height: 22px;
            .order-img{
                width: 150px;
                height: 100px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            
        }
        .order-item-btn{
            //height: 30px;
            margin-top: 20px;
            display: flex;
            text-align: center;
            justify-content: flex-end;
            .btn{
                border: 1px solid #666666;
                margin-right: 12px;
                color: #666666;
            }
        }
    }

}

</style>
