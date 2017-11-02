<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 资讯生活
                el-breadcrumb-item 公司新闻
        .information-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的新闻" suffix-icon="el-icon-search" v-model="News.t.search" @change="News.list()" size="small")
            el-table.mt10(:data="News.t.Records" stripe highlight-current-row  style="width: 100%")
                el-table-column(property="title" label="标题")
                el-table-column(property="created" label="更新时间")
            el-pagination.mt5(@current-change="News.list" :page-size="News.t.pageSize" layout="prev, pager, next, jumper" :total="News.t.PageCount" :current-page.sync="News.t.pageIndex")
                
        
</template>
<script src="./news.ts"></script>
</script>
<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
