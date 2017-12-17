<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 文档下载
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="query.source"  @tab-click="resourceList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的文档名称" suffix-icon="el-icon-search" v-model="resource.t.search" @change="resourceList")
                el-table.mt10(:data="resource.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(@click="location.href=scope.row.file") 下载
                            el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                            el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
                el-pagination.mt5(@current-change="resourceList" :page-size="resource.t.pageSize" layout="prev, pager, next, jumper" :total="resource.t.PageCount" :current-page.sync="resource.t.pageIndex")
                el-dialog(title="方案管理" :visible.sync="dialog")
                    el-form(ref="from" :model="resource.m" :rules="resource.rules" label-width="120px" label-position="right")
                        el-form-item(label="文件类别")
                            el-select(v-model="resource.m.source")
                                el-option(v-for="(item, index) in tabs" :key="index" :label="item.name" :value="item.value")
                        el-form-item(label="文件上传")
                            el-upload(class="upload-demo" multiple :on-change="handleChange" :action="uploadUrl" :file-list="fileList")
                                el-button(size="small" type="primary") 点击上传
                                div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                    el-button(@click="dialog = false") 取消
                    el-button(type="primary" @click="handleSubmit") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Documents } from "apis";
import  { ResourceMixin } from 'components';

@Component
export default class DocumentsView extends ResourceMixin {
    @Provide() activeTab: number = 0;
    @Provide() resource = Documents
    @Provide() tabs: Array<{name: string, value: string}> = []
    protected created(): void {
        this.query.source = 0
        this.resourceList()
        this.tabs = ["全部文档", "说明文档", "常用软件"].map((x: string) => {
            return {name: x, value: this.env.document[x]};
        });
    }
    public get env() {
        return this.$store.state.home.env;
    }
    player(row: any) {
        window.open(row.file);
    }
}
</script>