<template lang="pug">
    documents(:breadcrumb='breadcrumb')
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
    @Provide() breadcrumb = [{name: 'home', title: '首页'}, {name: 'support', title: '服务与支持'}, {name: 'download', title: '操作视频'}]
}
</script>
