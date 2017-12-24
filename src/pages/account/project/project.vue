<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 项目动态
        .information-wrap.mt10.p15
            project-table(:show="{search: true, pagination: true, status: true}")
            
</template>

<script lang="ts">
// 项目动态
import { Component, Provide, Vue } from 'vue-property-decorator';
import { projectTable } from 'components';
@Component
({
    components:{
        projectTable
    }
})
export default class ProjectList extends Vue
{
};
</script>
