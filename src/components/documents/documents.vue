<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(v-for="(item, index) in breadcrumb" :key="index" :to="{ name: item.name}") {{item.title}}
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="activeTab"  @tab-click="documentsList")
                    el-tab-pane(v-for="(item, index) in tabs" :key="index" :name="item" :label="item")
                el-select(v-model="selectType" placeholder="请输入或选择项目组" v-if="show.project" @change='documentsList' filterable)
                    el-option(v-for="item in ProjectGroup.t.Records" :key='item.id' :label='item.name' :value='item.id')
                el-select(v-model="selectProject" placeholder="请输入或选择项目" v-if="show.project" @change='documentsList' filterable)
                    el-option(v-for="item in Project.t.Records" :key='item.id' :label='item.name' :value='item.id')
                el-select(v-model="selectType" placeholder="请选择项目类型" v-if="show.project" @change='documentsList')
                    el-option(v-for="item in env.ProjectType" :key='item' :label='item' :value='item')
                el-input(placeholder="请输入要搜索的文档名称" suffix-icon="el-icon-search" v-model="Documents.t.search" @change="documentsList")
                el-table.mt10(:data="Documents.t.Records" stripe highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="文件名称")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button(size="small" @click="location.href=scope.row.file")
                                p.mb10 下载
                    el-table-column(property="updated" label="更新时间")
                el-pagination.mt5(@current-change="documentsList" :page-size="Documents.t.pageSize" layout="prev, pager, next, jumper" :total="Documents.t.PageCount" :current-page.sync="Documents.t.pageIndex")
</template>
<script lang="ts">
import { Component, Provide, Vue, Prop, Watch } from 'vue-property-decorator';
import  { Docs as Documents, Project, ProjectGroup } from 'apis';

@Component
export default class DocumentsView extends Vue
{
    @Provide() Documents = Documents;
    @Provide() activeTab = '全部文档';
    @Provide() Project = Project;
    @Provide() ProjectGroup = ProjectGroup;
    @Provide() selectProject = '';
    @Provide() selectType = '';

    @Prop({default: []})
    tabs: Array<string>;

    @Prop()
    breadcrumb: Array<{name: string, title: string}>;

    @Prop({ default: { project: false }} )
    show: { project: Boolean};

    protected created () {
        this.documentsList()
        if (this.show.project) {
            ProjectGroup.list()
            Project.list()
        }
    }
    public get env() {
        return this.$store.state.home.env
    }
    documentsList() {
        Documents.list({type: this.activeTab, projectId: this.selectProject});
    }
};
</script>
