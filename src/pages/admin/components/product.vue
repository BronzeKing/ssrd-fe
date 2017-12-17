<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item(:to="{ name: 'admin.system' }") 首页管理
                el-breadcrumb-item(:to="{ name: 'admin.product' }") 产品管理
        .about-wrap.mt10
            el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
            el-input(placeholder="产品搜索" suffix-icon="el-icon-search" v-model="Product.t.search" @change="productList")
            el-table.mt10(:data="Product.t.Records" highlight-current-row @current-change="handleCurrentChange" style="width: 100%")
                el-table-column(property="name" label="产品名称")
                el-table-column(property="code" label="产品编号")
                el-table-column(property="category.name" label="产品目录")
                el-table-column(property="description" label="产品描述")
                el-table-column(property="background" label="背景图片")
                el-table-column(property="updated" label="更新时间")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button-group
                            el-tooltip.item(effect="light" content="编辑" placement="top")
                                el-button(icon='el-icon-edit' @click="handleUpdate")
                            el-tooltip.item(effect="light" content="删除" placement="top")
                                el-button(icon='el-icon-delete' @click="handleDestroy(scope.row)")
            el-pagination.mt5(@current-change="productList" :page-size="Product.t.pageSize" layout="prev, pager, next, jumper" :total="Product.t.PageCount" :current-page.sync="Product.t.pageIndex")
            el-dialog(title="系统产品" :visible.sync="dialog")
                el-form(ref="form" :model="Product.m" :rules="Product.rules" label-width="120px" label-position="right")
                    el-form-item(label="产品名称")
                        el-input(v-model="Product.m.name" auto-complete="off" placeholder="请填写产品名称")
                    el-form-item(label="产品编号")
                        el-input(v-model="Product.m.code" auto-complete="off" placeholder="请填写产品编号")
                    el-form-item(label="产品目录")
                        el-select(v-model="Product.m.category.name" filterable allow-create placeholder="请选择产品目录")
                            el-option(v-for="item in Category.t.Records" :key="item.name" :label="item.name" :value="item.name")
                    el-form-item(label="产品描述")
                        el-input(v-model="Product.m.description" auto-complete="off" placeholder="请填写产品描述")
                el-button(@click="dialog= false") 取消
                el-button(type="primary" @click="handleProduct") 确定
</template>
<script lang="ts" src="./product.ts">
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