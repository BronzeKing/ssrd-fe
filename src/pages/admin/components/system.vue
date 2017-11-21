<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 后台管理
                el-breadcrumb-item(:to="{ path: '/about' }") 方案管理
        .about-wrap.mt10
            el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
            el-input(placeholder="搜索" suffix-icon="el-icon-search" v-model="System.t.search" @change="System.list()")
            el-table.mt10(:data="System.t.Records" highlight-current-row @current-change="handleCurrentChange" style="width: 100%")
                el-table-column(property="name" label="方案名称")
                el-table-column(label="摘要")
                    template(slot-scope="scope")
                        el-popover(trigger="hover" placement="top" width="500")
                            p {{scope.row.summary}}
                            div(slot="reference" class="name-wrapper")
                                p {{scope.row.summary.slice(0,20)}}...
                el-table-column(label="系统介绍")
                    template(slot-scope="scope")
                        el-popover(trigger="hover" placement="top" width="500")
                            p {{scope.row.introduction}}
                            div(slot="reference" class="name-wrapper")
                                p {{scope.row.introduction.slice(0,20)}}...
                el-table-column(property="structure" label="系统结构")
                el-table-column(label="功能特性")
                    template(slot-scope="scope")
                        el-popover(trigger="hover" placement="top" width="500")
                            p {{scope.row.funtionalFeature}}
                            div(slot="reference" class="name-wrapper")
                                p {{scope.row.funtionalFeature.slice(0,20)}}...
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button(suffix-icon='el-icon-delete' @click="handleDestroy(scope.row)") 删除
                        el-button(suffix-icon='el-icon-delete' @click="handleUpdate") 编辑
            el-pagination.mt5(@current-change="System.list" :page-size="System.t.pageSize" layout="prev, pager, next, jumper" :total="System.t.PageCount" :current-page.sync="System.t.pageIndex")
            el-dialog(title="方案管理" :visible.sync="dialog.system")
                el-form(ref="SystemForm" :model="System.m" :rules="System.rules" label-width="120px" label-position="right")
                    el-form-item(label="方案名称" prop="name" :error="System.errors.name")
                        el-input(v-model="System.m.name" auto-complete="off" placeholder="请填写方案名称")
                    el-form-item(label="摘要" prop="summary" :error="System.errors.summary")
                        el-input(type="textarea" autosize v-model="System.m.summary" auto-complete="off" placeholder="请填写摘要")
                    el-form-item(label="系统介绍" prop="introduction" :error="System.errors.introduction")
                        el-input(type="textarea" autosize v-model="System.m.introduction" auto-complete="off" placeholder="请填写系统介绍")
                    el-form-item(label="系统结构" prop="structure" :error="System.errors.structure")
                        el-input(v-model="System.m.structure" auto-complete="off" placeholder="请填写系统结构")
                    el-form-item(label="功能特性" prop="funtionalFeature" :error="System.errors.funtionalFeature")
                        el-input(type="textarea" autosize v-model="System.m.funtionalFeature" auto-complete="off" placeholder="请填写功能特性")
                el-button(@click="dialog.system = false") 取消
                el-button(type="primary" @click="handleSystem") 确定
</template>
<script lang="ts" src="./system.ts">
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