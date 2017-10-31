<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 项目中心
                el-breadcrumb-item {{Project.m.name}}
        div
            p 项目名称：{{Project.m.name}}
            p 类型：{{Project.m.type}}
            p 开始日期：{{Project.m.created}}
            p 地点：{{Project.m.address}}
            p 要求施工日期：{{Project.m.implementDate}}
            p 预计施工日期：{{Project.m.implementExpectedDate}}
            p 项目创建者：{{Project.m.creator.username}}
            p 联系人：{{Project.m.creator.linkman}}
            p 内容：{{Project.m.creator.content}}
            el-steps(:space="200" :active="Project.m.status" finish-status="success")
                el-step(title="沟通中")
                el-step(title="跟进中")
                el-step(title="实施中")
                el-step(title="交付中")
                el-step(title="已完成")

            el-collapse(v-model="activeName" accordion)
                el-collapse-item
                    template(slot="title")
                        p 项目文档
                        i.header-icon.el-icon-information
                    el-table.mt10(:data="ProjectLog.t.Records" stripe highlight-current-row style="width: 100%")
                        el-table-column(property="created" label="日期")
                        el-table-column(property="project.user.username" label="姓名")
                        el-table-column(property="content" label="事项")
                        el-table-column(label="附件")
                            template(slot-scope="scope")
                                a(:href="scope.row.attatchment[0].file") {{scope.row.attatchment[0].name}}
                el-collapse-item
                    template(slot="title")
                        p 工作日志
                        i.header-icon.el-icon-information
                    el-table.mt10(:data="ProjectLog.t.Records" stripe highlight-current-row style="width: 100%")
                        el-table-column(property="created" label="日期")
                        el-table-column(property="project.user.username" label="姓名")
                        el-table-column(property="content" label="事项")
                        el-table-column(label="附件")
                            template(slot-scope="scope")
                                a(:href="scope.row.attatchment[0].file") {{scope.row.attatchment[0].name}}

</template>
<script>
import  { Project, ProjectLog } from 'apis';
export default {
    name: 'projectDetail',
    data () {
        return {
            activeName: '1',
            Project: Project,
            ProjectLog: ProjectLog
        };
    },
    created () {
        this.init();
        ProjectLog.list({projectId: this.$route.params.id});
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        '$route': 'init'
    },
    methods: {
        init () {
            Project.retrieve({id: this.$route.params.id});
        }
    }
};
</script>
