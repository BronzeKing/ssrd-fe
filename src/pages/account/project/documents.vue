<template lang="pug">
    div
        el-select(tpye="card" v-model="query.projectId" filterable placeholder="请选择或搜索项目" @change='createMM')
            el-option(v-for="x in Project.t.Records" :key="x.id" :label="x.name" :value="x.id")
        div(id="media-manager" :showBreadcrumb=false)
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import {MM} from 'mm/main.js'
import { Project } from "apis";
import api from "apis/api-urls.ts";
import { Query } from "src/common/mixins";


@Component
export default class DocumentsView extends Vue
{
    @Provide() breadcrumb = [{name: 'home', title: '首页'}, {name: 'project', title: '项目中心'}, {name: 'project.documents', title: '项目资料'}]
    @Provide() tabs: Array<string> = ['全部文档', '签证', '设计方案', '合同'];
    @Provide() show = {project: true};
    @Provide() mm: any;
    @Provide() Project = Project;
    @Provide() query: Query = {} as Query;

    created () {
        this.Project.list();
    }

    mounted() {
        console.log('create mm');
        this.createMM();
    }

   createMM() {
        let projectId = this.query.projectId || '';
        let baseUrl = api.medias;
        let listUrl = `?projectId=${projectId}`;
        let downloadUrl = api.medias + `/download/${projectId}/`;
        this.mm = new MM({
            el: '#media-manager',
            api: {
                baseUrl: baseUrl,
                listUrl: listUrl,
                downloadUrl: downloadUrl,
                uploadUrl: '',      // optionnal
                deleteUrl: 'delete'       // optionnal
            }
        });
    }
};
</script>
