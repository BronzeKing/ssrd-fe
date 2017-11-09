<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'caringCommunity' }") 爱心社区
                el-breadcrumb-item 公益资讯
        .information-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的资讯" suffix-icon="el-icon-search" v-model="News.t.search" @change="News.list()" size="small")
            el-table.mt10(:data="News.t.Records" @row-click="rowClick" stripe highlight-current-row style="width: 100%")
                el-table-column(property="title" label="标题")
                el-table-column(property="created" label="更新时间")
            el-pagination.mt5(@current-change="News.list" :page-size="News.t.pageSize" layout="prev, pager, next, jumper" :total="News.t.PageCount" :current-page.sync="News.t.pageIndex")
                
        
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { News } from "apis";

@Component
export default class NewsView extends Vue
{
    @Provide() News = News;
    protected created(): void {
        News.list({type: 2});
    }

    rowClick(data: any) {
        this.$router.replace({
            name: "caringNewsDetail",
            params: { id: data.id }
        });
    }
};
</script>

<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
