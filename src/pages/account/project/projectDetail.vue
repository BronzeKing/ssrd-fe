<template lang="pug">
    .page-projectDetail
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item {{Project.m.name}}
        div
            p.f14.mb10 项目名称：{{Project.m.name}}
            table.detail-table(border="1" bordercolor="#e6ebf5")
                tbody
                    tr
                        td 类型：{{Project.m.type}}
                        td
                    tr
                        td 地点：{{Project.m.address}}
                        td 项目创建者：{{Project.m.user.username}}
                    tr
                        td 联系人：{{Project.m.linkman}}
                        td 手机：{{Project.m.mobile}}
                    tr
                        td(colspan="2") 内容：{{Project.m.content}}
            el-steps.mt20.mb20.ml10(:space="200" :active="Project.m.status" finish-status="success")
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
<script lang="ts" src="./projectDetail.ts">
</script>
<style lang="scss" scoped>
.page-projectDetail{
    background: #fff;
    .title{
        height: 40px;
        border-bottom: 1px solid #E9E9E9;
        line-height: 40px;
        padding: 0 10px;
        margin-bottom: 10px;
    }
    .detail-table{
        display: table;
        border-color: 1px solid #e6ebf5;
        border-collapse: collapse;
        color: #5a5e66;
        width: 100%;
        td{
            padding: 10px 10px;
            width: 50%;
        }
    }
}

</style>