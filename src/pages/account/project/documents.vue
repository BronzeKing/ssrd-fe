<template lang="pug">
    documents(:breadcrumb='breadcrumb' :tabs='tabs' :show='show')
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import  { Documents } from 'src/components';

@Component
({
    components: {
        Documents
    }
})
export default class DocumentsView extends Vue
{
    @Provide() breadcrumb = [{name: 'home', title: '首页'}, {name: 'project', title: '项目中心'}, {name: 'project.documents', title: '项目资料'}]
    @Provide() tabs: Array<string> = ['全部文档', '签证', '设计方案', '合同'];
    @Provide() show = {project: true};
};
</script>
