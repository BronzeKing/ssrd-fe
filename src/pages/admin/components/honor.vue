<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 荣耀资质
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="honorList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的资质名称" suffix-icon="el-icon-search" v-model="Honor.t.search" @change="honorList")
                el-table.mt10(:data="Honor.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                            el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
                el-pagination.mt5(@current-change="Honor.list" :page-size="Honor.t.pageSize" layout="prev, pager, next, jumper" :total="Honor.t.PageCount" :current-page.sync="Honor.t.pageIndex")
                el-dialog(title="方案管理" :visible.sync="dialog.honor")
                    el-form(ref="HonorForm" :model="Honor.m" :rules="Honor.rules" label-width="120px" label-position="right")
                        el-form-item(label="名称")
                            el-input(v-model="Honor.m.name" auto-complete="off" placeholder="请填写荣耀资质名称")
                        el-form-item(label="视频上传")
                            el-upload(class="upload-demo" multiple :on-change="handleChange" action="" :file-list="Honor.m.file" :auto-upload="false")
                                el-button(size="small" type="primary") 点击上传
                                div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                    el-button(@click="dialog.honor = false") 取消
                    el-button(type="primary" @click="handleHonor") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Honor } from "apis";

@Component
export default class HonorView extends Vue {
    @Provide() activeTab: number = 0;
    @Provide() Honor: any = Honor;
    @Provide() dialog = { honor: false };
    @Provide() action = "";
    $refs: {
        HonorForm: HTMLFormElement;
    };
    protected created(): void {
        this.honorList()
        this.Honor.m.file = []; // 上传多个文件时，file必须为array类型
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get tabs() {
        return ["全部文档", "说明文档", "常用软件", "设计方案", "合同", "签证"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    honorList () {
        Honor.list({source: this.activeTab})
    }

    player(row: any) {
        window.open(row.file);
    }
    handleCreate() {
        this.dialog.honor = true;
        this.action = "create";
        Honor.m.reset();
        this.Honor.m.file = [];

    }
    handleUpdate() {
        this.dialog.honor = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Honor.destroy(data).then((r: any) => {
            Honor.list();
        });
    }
    handleHonor() {
        if (this.action === "create") {
            Honor.create().then((r: any) => {
                this.dialog.honor = false;
                this.honorList()
            });
        } else {
            Honor.update().then((r: any) => {
                this.dialog.honor = false;
                this.honorList()
            });
        }
    }
    handleChange(file: any, fileList: any): void {
        Honor.m.file = fileList;
    }
    handleCurrentChange(data: any) {
        this.Honor.m.populate(data);
        this.Honor.m.file = [];
    }
}
</script>
