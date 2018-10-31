<template lang="pug">
    .page-orderDetail
        .title
            span 订单号：XXXXXXXXX
            span 订单日期：2017/08/14
        el-steps(:active="1" finish-status="success")
            el-step(title="提交订单")
            el-step(title="需求沟通中")
            el-step(title="发货中")
            el-step(title="完成")
        .detail-item
            p 基本信息
            .des-item
                .des-info 项目名称
                .des-content 
            .des-item
                .des-info 地址
                .des-content 
            .des-item
                .des-info 公司
                .des-content 
            .des-item
                .des-info 电话
                .des-content 
            .des-item
                .des-info 联系人
                .des-content 
            .des-item
                .des-info 手机
                .des-content 
            .des-item
                .des-info QQ
                .des-content 
            .des-item
                .des-info 邮箱
                .des-content 
        .detail-item
            p 需求信息
            .des-item
                .des-info 工期
                .des-content 
            .des-item
                .des-info 预算
                .des-content 
        el-table(data="tableData" style="width: 100%")
            el-table-column(prop="date" label="产品")
            el-table-column(prop="date" label="事项")
            el-table-column(prop="date" label="备注")
        p.detail-title 补充说明
        p 补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明补充说明
        p.detail-title 补充文件
        el-table(data="tableData" style="width: 100%")
            el-table-column(prop="date" label="产品")
            el-table-column(prop="date" label="事项")
            el-table-column(prop="date" label="备注")

                        
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Message } from 'src/apis';
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
.page-orderDetail{
    .title{
        font-size: 16px;
        margin-bottom: 15px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
    }
    .detail-item{
        margin: 15px 0;
        &>p{
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 600;
        }
        .des-item{
            width: 350px;
            display: inline-block;
            margin: 7px 0;
            .des-info{
                width: 70px;
                text-align: right;
            }
            .des-content{
                width: 250px;
            }
        }
    }
    .detail-title{
        font-weight: 600;
        font-size: 16px;
        margin: 10px 0;
    }
}

</style>
