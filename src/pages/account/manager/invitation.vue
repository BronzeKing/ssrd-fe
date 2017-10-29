<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 我的收益
        div
            h5 我的收益
            a(href="javascript: void(0);" @click="invitationDialog = true") 我的邀请码
            el-dialog(title="我的邀请码" :visible.sync="invitationDialog")
                p 您的邀请码为 {{user.invitation}}
                el-button(@click="invitationDialog = false") 确定
            p 已邀请{{Invitation.t.RecordCount}} 人

            el-table.mt10(:data="Invitation.t.Records" stripe highlight-current-row style="width: 100%")
                el-table-column(property="user.username" label="用户")
                el-table-column(property="project" label="所属项目")
                el-table-column(property="created" label="创建时间")
                el-table-column(property="project.status" label="状态")
                el-table-column(property="revenue" label="收益")

            el-pagination.mt5(@current-change="Invitation.list" :page-size="Invitation.t.pageSize" layout="prev, pager, next, jumper" :total="Invitation.t.PageCount" :current-page.sync="Invitation.t.pageIndex")
        
</template>
<script>
import  { Invitation } from 'apis';
export default {
    name: 'invitation',
    data () {
        return {
            user: this.$store.state.user.user,
            invitationDialog: false,
            Invitation: Invitation
        };
    },
    created () {
        Invitation.list();
    },
    methods: {
        invitationList () {
            Invitation.list();
        },
        clickInvitation () {
        }
    }
};
</script>
