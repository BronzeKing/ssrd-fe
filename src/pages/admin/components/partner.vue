<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 合作伙伴
        .about-wrap.mt10.p15
            div
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-table.mt10(:data="Partner.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                            el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
                el-pagination.mt5(@current-change="Partner.list" :page-size="Partner.t.pageSize" layout="prev, pager, next, jumper" :total="Partner.t.PageCount" :current-page.sync="Partner.t.pageIndex")
                el-dialog(title="方案管理" :visible.sync="dialog.partner")
                    el-form(ref="PartnerForm" :model="Partner.m" :rules="Partner.rules" label-width="120px" label-position="right")
                        el-form-item(label="名称")
                            el-input(v-model="Partner.m.name" auto-complete="off" placeholder="请填写合作伙伴名称")
                        el-form-item(label="合作伙伴图标")
                            el-upload(class="upload-demo" multiple :on-change="handleChange" action="" :file-list="Partner.m.file" :auto-upload="false")
                                el-button(size="small" type="primary") 点击上传
                                div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                    el-button(@click="dialog.partner = false") 取消
                    el-button(type="primary" @click="handlePartner") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Partner } from "apis";

@Component
export default class PartnerView extends Vue {
    @Provide() activeTab: number = 1;
    @Provide() Partner: any = Partner;
    @Provide() dialog = { partner: false };
    @Provide() action = "";
    $refs: {
        PartnerForm: HTMLFormElement;
    };
    protected created(): void {
        this.partnerList()
        this.Partner.m.file = []; // 上传多个文件时，file必须为array类型
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get tabs() {
        return ["全部文档", "说明文档", "常用软件", "设计方案", "合同", "签证"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    partnerList () {
        Partner.list({source: this.activeTab})
    }

    player(row: any) {
        window.open(row.file);
    }
    handleCreate() {
        this.dialog.partner = true;
        this.action = "create";
        Partner.m.reset();
        this.Partner.m.file = [];

    }
    handleUpdate() {
        this.dialog.partner = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Partner.destroy(data).then((r: any) => {
            Partner.list();
        });
    }
    handlePartner() {
        if (this.action === "create") {
            Partner.create().then((r: any) => {
                this.dialog.partner = false;
                this.partnerList()
            });
        } else {
            Partner.update().then((r: any) => {
                this.dialog.partner = false;
                this.partnerList()
            });
        }
    }
    handleChange(file: any, fileList: any): void {
        Partner.m.file = fileList;
    }
    handleCurrentChange(data: any) {
        this.Partner.m.populate(data);
        this.Partner.m.file = [];
    }
}
</script>
