<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 常见问题解答
        .about-wrap.mt10.p15
            div(v-show="action==='list'")
                el-input(placeholder="请输入要搜索的FAQ" icon="search" v-model="Faqs.t.search" @change="Faqs.list()")
                el-table.mt10(:data="Faqs.t.Records" show-header=false stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                    el-table-column(property="questioin" label="问题")
                    el-table-column(property="created" label="更新时间")
                el-pagination.mt5(@current-change="Faqs.list" :page-size="Faqs.t.pageSize" layout="prev, pager, next, jumper" :total="Faqs.t.PageCount" :current-page.sync="Faqs.t.pageIndex")
            div(v-show="action==='detail'")
                    span.f16 {{Faqs.m.questioin}}
                    .line.mt10 
                    p.mb10 {{Faqs.m.answer}}
                    p.mb10 {{Faqs.m.created}}
</template>
<script>
import  { Faqs } from 'apis';
export default {
    name: 'faqs',
    data () {
        return {
            Faqs: Faqs,
            action: 'list'
        };
    },
    created () {
        this.init();
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        '$route': 'init'
    },
    methods: {
        init () {
            if (this.$route.params.id) {
                this.action = 'detail';
                Faqs.retrieve({id: this.$route.params.id});
            } else {
                Faqs.list();
                this.action = 'list';
            }
        },
        rowClick (m) {
            // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
            this.$router.replace({name: 'faqsDetail', params: { id: m.id }});
        }
    }
};
</script>
