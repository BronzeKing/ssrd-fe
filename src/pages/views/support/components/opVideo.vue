<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 操作视频
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="clickTab")
                    el-tab-pane(v-for="x in tabs" :key="x" :label="x")
                el-input(placeholder="请输入要搜索的视屏名称" suffix-icon="el-icon-search" v-model="Video.t.search" @change="Video.list()")
                el-table.mt10(:data="Video.t.Records" stripe highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-tooltip.item(effect="light" content="播放" placement="top")
                                el-button(icon='el-icon-caret-right' @click="location.href=scope.row.file")
                    el-table-column(property="updated" label="更新时间")
                el-pagination.mt5(@current-change="Video.list" :page-size="Video.t.pageSize" layout="prev, pager, next, jumper" :total="Video.t.PageCount" :current-page.sync="Video.t.pageIndex")
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import  { Video } from 'apis';

@Component
export default class VideoView extends Vue
{
    @Provide() activeTab: number = 0;
    @Provide() source: number = 3;
    @Provide() tabs: Array<string> = ['全部文档', '说明文档', '常用软件', '设计方案', '合同', '签证'];
    @Provide() Video: any = Video;
    protected created (): void {
        Video.list({source: this.source});
    };
    @Watch('activeTab')
    onTabChanged(val: number, oldVal: number) {
        let name: string = this.tabs[val];
        this.source = this.$store.state.home.env.document[name];
    }

    player (row: any) {
        window.open(row.file);
    };
    clickTab (tab: any, event: any) {
        Video.list({source: this.source});
    }
};
</script>
