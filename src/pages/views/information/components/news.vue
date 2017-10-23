<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 资讯生活
                el-breadcrumb-item 公司新闻
        .about-wrap.mt10.p15
            div(v-show="action==='list'")
                el-input(placeholder="请输入要搜索的新闻" icon="search" v-model="News.t.search" @change="News.list()")
                el-table.mt10(:data="News.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                    el-table-column(property="title" label="标题")
                    el-table-column(property="created" label="更新时间")
                el-pagination.mt5(@current-change="News.list" :page-size="News.t.pageSize" layout="prev, pager, next, jumper" :total="News.t.PageCount" :current-page.sync="News.t.pageIndex")
            div(v-show="action==='detail'")
                    span.f16 {{News.m.title}}
                    .line.mt10 
                    p.mb10 {{News.m.content}}
                    p.mb10 {{News.m.created}}
        
</template>
<script>
import  { News } from 'apis';
export default {
    name: 'news',
    data () {
        return {
            News: News,
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
                News.retrieve({id: this.$route.params.id});
            } else {
                News.list();
                this.action = 'list';
            }
        },
        rowClick (m) {
            // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
            this.$router.replace({name: 'newsDetail', params: { id: m.id }});
        }

    }
};
</script>
