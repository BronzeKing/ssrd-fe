<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 文档下载
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="documentsList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的文档名称" suffix-icon="el-icon-search" v-model="Documents.t.search" @change="documentsList")
                el-table.mt10(:data="Documents.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(@click="location.href=scope.row.file") 下载
                            el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                            el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
                el-pagination.mt5(@current-change="Documents.list" :page-size="Documents.t.pageSize" layout="prev, pager, next, jumper" :total="Documents.t.PageCount" :current-page.sync="Documents.t.pageIndex")
                el-dialog(title="方案管理" :visible.sync="dialog.documents")
                    el-form(ref="DocumentsForm" :model="Documents.m" :rules="Documents.rules" label-width="120px" label-position="right")
                        el-form-item(label="文件类别")
                            el-select(v-model="Documents.m.source")
                                el-option(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                        el-form-item(label="文件上传")
                            el-upload(class="upload-demo" multiple :on-change="handleChange" action="" :file-list="Documents.m.file" :auto-upload="false")
                                el-button(size="small" type="primary") 点击上传
                                div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                    el-button(@click="dialog.documents = false") 取消
                    el-button(type="primary" @click="handleDocuments") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Documents } from "apis";

@Component
export default class DocumentsView extends Vue {
    @Provide() activeTab: number = 0;
    @Provide() Documents: any = Documents;
    @Provide() dialog = { documents: false };
    @Provide() action = "";
    $refs: {
        DocumentsForm: HTMLFormElement;
    };
    protected created(): void {
        this.documentsList()
        this.Documents.m.file = []; // 上传多个文件时，file必须为array类型
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get tabs() {
        return ["全部文档", "说明文档", "常用软件", "设计方案", "合同", "签证"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    documentsList () {
        Documents.list({source: this.activeTab})
    }

    player(row: any) {
        window.open(row.file);
    }
    handleCreate() {
        this.dialog.documents = true;
        this.action = "create";
        Documents.m.reset();
        this.Documents.m.file = [];
    }
    handleUpdate() {
        this.dialog.documents = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Documents.destroy(data).then((r: any) => {
            Documents.list();
        });
    }
    handleDocuments() {
        if (this.action === "create") {
            Documents.create().then((r: any) => {
                this.dialog.documents = false;
                this.documentsList()
            });
        } else {
            Documents.update().then((r: any) => {
                this.dialog.documents = false;
                this.documentsList()
            });
        }
    }
    handleChange(file: any, fileList: any): void {
        Documents.m.file = fileList;
    }
    handleCurrentChange(data: any) {
        this.Documents.m.populate(data);
        this.Documents.m.file = [];
    }
}
</script>
