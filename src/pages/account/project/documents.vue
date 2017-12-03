<template lang="pug">
    documents(:breadcrumb="breadcrumb")
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import  { Documents } from 'components';

@Component
({
    components: {
        Documents
    }
})
export default class DocumentsView extends Vue
{
    @Provide() breadcrumb = [{name: 'home', title: '首页'}, {name: 'project', title: '项目中心'}, {name: 'project.documents', title: '项目资料'}]
};
</script>
