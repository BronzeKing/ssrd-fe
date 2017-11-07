<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 项目动态
        .information-wrap.mt10.p15
            el-tabs(tpye="card" v-model="activeTab"  @tab-click="clickTab")
                el-tab-pane(v-for="x in tabs" :key="x" :label="x")
            project-table(:show="{search: true, pagination: true}")
            
</template>

<script lang="ts">
// 项目动态
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Project} from 'apis';
import { projectTable } from 'components';
@Component
({
    components:{
        projectTable
    }
})
export default class ProjectList extends Vue
{
    @Provide() Project = Project;
    @Provide() activeTab = 0;
    @Provide() tabs = ['全部项目', '进度类', '维护类', '签证类'];
    protected created (): void {
        Project.list();
    }
    rowClick (m: Payload): void {
    }
    clickTab (tab: any, event: any): void {
        Project.list();
    }
};
</script>
