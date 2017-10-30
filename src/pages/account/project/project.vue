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
            el-input(placeholder="请输入要搜索的项目名称" suffix-icon="el-icon-search" v-model="Project.t.search" @change="Project.list()")
            project-table
            
</template>

<script>
import  { Project, AuthorizeCode, ProjectSign } from 'apis';
import { projectTable } from 'components';
export default {
    name: 'project',
    components: {
        projectTable
    },
    data () {
        return {
            Project: Project,
            ProjectSign: ProjectSign,
            AuthorizeCode: AuthorizeCode,
            activeTab: 0,
            tabs: ['全部项目', '进度类', '维护类', '签证类']
        };
    },
    created () {
        Project.list();
    },
    methods: {
        rowClick (m) {
        },
        clickTab (tab, event) {
            Project.list();
        }
    }
};
</script>
