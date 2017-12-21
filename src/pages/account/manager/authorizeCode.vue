<template lang="pug">
    .page-authorizeCode
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 授权码管理
        div
            el-select(v-model="resource.t.status" placeholder="全部授权码" @change="resourceList" style="width:150px;")
                el-option(v-for="item in statusList" :key="item" :label="item" :value="item")
            el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建授权码

            el-input(placeholder="授权码名称、项目名称" suffix-icon="el-icon-search" v-model="resource.t.search" @change="resourceList")
            el-table.mt10(:data="resource.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                el-table-column(property="user.username" label="授权码名称")
                el-table-column(property="project" label="所属项目")
                el-table-column(property="created" label="创建时间")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-select(v-model="scope.row.status" @change="authorizeCodeUpdate(scope.row)" style="width:80px;")
                            el-option(label="启用" :value="1")
                            el-option(label="停用" :value="0")
                        el-button.ml20(suffix-icon='el-icon-delete' @click="authorizeCodeDestroy(scope.row)") 删除
            el-pagination.mt5(@current-change="resource.list" :page-size="resource.t.pageSize" layout="prev, pager, next, jumper" :total="resource.t.PageCount" :current-page.sync="resource.t.pageIndex")
            el-dialog(title="新建授权码" :visible.sync="dialog")
                el-form(ref="form" :model="resource.m" :rules="resource.rules" label-width="120px" label-position="right")
                    el-form-item(label="授权码名称")
                        el-input(v-model="resource.m.name" auto-complete="off" placeholder="请输入授权码名称")
                    el-form-item(label="授权项目组")
                        el-select(v-model="projectGroup" placeholder="请选择项目组")
                            el-option(v-for="item in ProjectGroup.t.Records" :key="item.id" :label="item.name" :value="item.id")
                    el-form-item(label="授权项目")
                        el-select(v-model="projects" multiple placeholder="请选择一个或多个项目")
                            el-option(v-for="item in Project.t.Records" :key="item.id" :label="item.name" :value="item.id")
                el-button(@click="dialog= false") 取消
                el-button(type="primary" @click="handleSubmit") 确定
</template>
<script lang="ts" src="./authorizeCode.ts">
</script>
<style lang="scss" scoped>
.page-authorizeCode{
    background: #fff;
    

}

</style>
