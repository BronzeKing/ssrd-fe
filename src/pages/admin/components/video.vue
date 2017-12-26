<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 操作视频
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="videoList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的视屏名称" suffix-icon="el-icon-search" v-model="Video.t.search" @change="videoList")
                el-table.mt10(:data="Video.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button-group
                                el-tooltip.item(effect="light" content="播放" placement="top")
                                    el-button(icon='el-icon-caret-right' @click="player(scope.row)")
                                el-tooltip.item(effect="light" content="编辑" placement="top")
                                    el-button(icon='el-icon-edit' @click="handleUpdate")
                                el-tooltip.item(effect="light" content="删除" placement="top")
                                    el-button(icon='el-icon-delete' @click="handleDestroy(scope.row)")
                el-pagination.mt5(@current-change="Video.list" :page-size="Video.t.pageSize" layout="prev, pager, next, jumper" :total="Video.t.PageCount" :current-page.sync="Video.t.pageIndex")
                el-dialog(title="方案管理" :visible.sync="dialog.video")
                    el-form(ref="VideoForm" :model="Video.m" :rules="Video.rules" label-width="120px" label-position="right")
                        el-form-item(label="视频类别")
                            el-select(v-model="Video.m.source")
                                el-option(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                        el-form-item(label="视频上传")
                            el-upload(class="upload-demo" multiple :on-change="handleChange" action="" :file-list="Video.m.file" :auto-upload="false")
                                el-button(size="small" type="primary") 点击上传
                                div(slot="tip" class="el-upload__tip")
                    el-button(@click="dialog.video = false") 取消
                    el-button(type="primary" @click="handleVideo") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Video } from "apis";

@Component
export default class VideoView extends Vue {
    @Provide() activeTab: number = 0;
    @Provide() Video: any = Video;
    @Provide() dialog = { video: false };
    @Provide() action = "";
    $refs: {
        VideoForm: HTMLFormElement;
    };
    protected created(): void {
        this.videoList()
        this.Video.m.file = []; // 上传多个文件时，file必须为array类型
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get tabs() {
        return ["全部文档", "说明文档", "常用软件", "设计方案", "合同", "签证"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    videoList () {
        Video.list({source: this.activeTab})
    }

    player(row: any) {
        window.open(row.file);
    }
    handleCreate() {
        this.dialog.video = true;
        this.action = "create";
        Video.m.reset();
        this.Video.m.file = [];

    }
    handleUpdate() {
        this.dialog.video = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Video.destroy(data).then((r: any) => {
            Video.list();
        });
    }
    handleVideo() {
        if (this.action === "create") {
            Video.create().then((r: any) => {
                this.dialog.video = false;
                this.videoList()
            });
        } else {
            Video.update().then((r: any) => {
                this.dialog.video = false;
                this.videoList()
            });
        }
    }
    handleChange(file: any, fileList: any): void {
        Video.m.file = fileList;
    }
    handleCurrentChange(data: any) {
        this.Video.m.populate(data);
        this.Video.m.file = [];
    }
}
</script>
