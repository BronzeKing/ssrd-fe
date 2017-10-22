<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 操作视频
        .about-wrap.mt10.p15
            div
                el-input(placeholder="请输入要搜索的文档名称" icon="search" v-model="Download.t.search" @change="Download.list()")
                el-table.mt10(:data="Download.t.Records" stripe highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(label="操作")
                        template(scope="scope")
                            el-button(size="small" @click="downloader(scope.row)")
                                p.mb10 下载
                    el-table-column(property="updated" label="更新时间")
                el-pagination.mt5(@current-change="Download.list" :page-size="Download.t.pageSize" layout="prev, pager, next, jumper" :total="Download.t.PageCount" :current-page.sync="Download.t.pageIndex")
        
</template>
<script>
import  { Download } from 'apis';
// 貌似Document 这个变量是全局的 所以用Download 代替

export default {
    name: 'download',
    data () {
        return {
            Download: Download
        };
    },
    created () {
        Download.list();
    },
    methods: {
        downloader (row) {
            location.href = row.file;
        }
    }
};
</script>
