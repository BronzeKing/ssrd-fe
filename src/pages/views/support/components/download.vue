<template lang="pug">
    documents(:breadcrumb='breadcrumb' :tabs="tabs")
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import { Documents } from 'components';

@Component
({
    components: {
        Documents
    }
})
export default class DownloadView extends Vue
{
    @Provide() breadcrumb = [{name: 'home', title: '首页'}, {name: 'support', title: '服务与支持'}, {name: 'download', title: '文档下载'}]
    @Provide() tabs: Array<string> = ['全部文档', '说明文档', '常用软件'];
}
</script>
