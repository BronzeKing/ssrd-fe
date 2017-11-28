<template lang="pug">
    .page-mineOrder
        .title.f18 我的订单
        .order-item(@click="rowClick")
                el-table(:data="tableData" style="width: 100%")
                    el-table-column(prop="img" label="2017-07-31 15:15:30" width="180")
                        template(slot-scope="scope")
                            img(:src="scope.row.img", alt="" style="width:100%;")
                    el-table-column(prop="text" label="订单号：16516515156")
                    el-table-column(prop="des" label="" width="100")
                    el-table-column(prop="date" label="" width="100")
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
    @Provide() tableData = [{
            img: 'http://element.eleme.io/static/guide.0a8462c.png',
            text: '多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体',
            des: '备注：无'
          }, {
            img: 'http://element.eleme.io/static/guide.0a8462c.png',
            text: '多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体多媒体',
            des: '备注：无'
    }];
    protected created () {
        Message.list();
    }
    rowClick (m: Payload) {
        // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
        this.$router.push({name: 'orderDetail', params: { id: '1' }});
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
