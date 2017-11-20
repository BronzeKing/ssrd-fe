<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 后台管理
                el-breadcrumb-item(:to="{ path: '/about' }") 招聘信息
        .about-wrap.mt10
            el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
            el-input(placeholder="职位搜索" suffix-icon="el-icon-search" v-model="Recruitment.t.search" @change="Recruitment.list()")
            el-table.mt10(:data="Recruitment.t.Records" highlight-current-row @current-change="handleCurrentChange" style="width: 100%")
                el-table-column(property="name" label="职位名称")
                el-table-column(property="address" label="工作地点")
                el-table-column(property="created" label="发布时间")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                        el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
            el-pagination.mt5(@current-change="Recruitment.list" :page-size="Recruitment.t.pageSize" layout="prev, pager, next, jumper" :total="Recruitment.t.PageCount" :current-page.sync="Recruitment.t.pageIndex")
            el-dialog(title="招聘信息" :visible.sync="dialog.recruit")
                el-form(ref="RecruitForm" :model="Recruitment.m" :rules="Recruitment.rules" label-width="120px" label-position="right")
                    el-form-item(label="职位名称")
                        el-input(v-model="Recruitment.m.name" auto-complete="off" placeholder="请填写职位名称")
                    el-form-item(label="工作地点")
                        el-input(v-model="Recruitment.m.address" auto-complete="off" placeholder="请填写工作地点")
                    el-form-item(label="薪资待遇")
                        el-input(v-model="Recruitment.m.salary" auto-complete="off" placeholder="请填写薪资待遇")
                    el-form-item(label="招聘人数")
                        el-input(v-model="Recruitment.m.number" auto-complete="off" placeholder="请填写招聘人数")
                    el-form-item(label="岗位职责")
                        el-input(type="textarea" autosize v-model="Recruitment.m.jobResponsibilities" auto-complete="off" placeholder="请填写岗位职责")
                    el-form-item(label="任职要求")
                        el-input(type="textarea" autosize v-model="Recruitment.m.jobDetail" auto-complete="off" placeholder="请填写任职要求")
                el-button(@click="dialog.recruit = false") 取消
                el-button(type="primary" @click="handleRecruitment") 确定
</template>
<script lang="ts" src="./recruit.ts">
</script>
<style lang="scss">
    .detail-container{
        background: #fff;
        padding: 15px;
        .line{
            border-top: 1px solid #dddddd;

        }
    }
</style>