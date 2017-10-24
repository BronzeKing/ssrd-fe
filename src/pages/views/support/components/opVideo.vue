<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 操作视频
        .about-wrap.mt10.p15
            div
                el-input(placeholder="请输入要搜索的视屏名称" icon="search" v-model="OpVideo.t.search" @change="OpVideo.list()")
                el-table.mt10(:data="OpVideo.t.Records" stripe highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(label="操作")
                        template(scope="scope")
                            el-button(size="small" @click="player(scope.row)")
                                p.mb10 播放
                    el-table-column(property="updated" label="更新时间")
                el-pagination.mt5(@current-change="OpVideo.list" :page-size="OpVideo.t.pageSize" layout="prev, pager, next, jumper" :total="OpVideo.t.PageCount" :current-page.sync="OpVideo.t.pageIndex")
</template>
<script>
import  { OpVideo } from 'apis';

export default {
    name: 'opVideo',
    data () {
        return {
            OpVideo: OpVideo
        };
    },
    created () {
        OpVideo.list();
    },
    methods: {
        player (row) {
            window.open(row.file);
        }
    }
};
</script>
