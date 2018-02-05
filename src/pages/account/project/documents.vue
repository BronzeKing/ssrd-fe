<template lang="pug">
    div(id="media-manager")
</template>

<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import  { Documents } from 'src/components';
import {MM} from 'src/components/mm/src/main.js'
import { apiUrl } from "src/common/settings";


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
    @Provide() mm: any;

    mounted() {
        this.mm = new MM({
            el: '#media-manager',
            api: {
                baseUrl: 'api/medias',
                listUrl: '',
                downloadUrl: 'download',  // optionnal
                uploadUrl: 'upload',      // optionnal
                deleteUrl: 'delete'       // optionnal
            }
        });
    }
};
</script>
