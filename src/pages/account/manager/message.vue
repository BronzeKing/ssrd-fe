<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 我的消息
        .about-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的消息" icon="search" v-model="Message.t.search" @change="Message.list()")
            el-table.mt10(:data="Message.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                el-table-column(property="title" label="标题内容")
                el-table-column(property="created" label="提交时间")
                el-table-column(property="category" label="类型")
            el-pagination.mt5(@current-change="Message.list" :page-size="Message.t.pageSize" layout="prev, pager, next, jumper" :total="Message.t.PageCount" :current-page.sync="Message.t.pageIndex")
        
</template>
<script>
import  { Message } from 'apis';
export default {
    name: 'message',
    data () {
        return {
            Message: Message,
            action: 'list'
        };
    },
    created () {
        Message.list();
    },
    methods: {
        rowClick (m) {
            // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
            this.$router.replace({name: 'messageDetail', params: { id: m.id }});
        }
    }
};
</script>
