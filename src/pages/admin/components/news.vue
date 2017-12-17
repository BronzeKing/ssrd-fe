<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 资讯管理
        .about-wrap.mt10.p15
            div
                el-tabs(tpye="card" v-model="query.type"  @tab-click="tabClick")
                    el-tab-pane(v-for='item in tabs' :key='item' :label='item' :value='item')
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的资讯名称或内容" suffix-icon="el-icon-search" v-model="resource.t.search" @change="resourceList")
                el-table.mt10(:data="resource.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="title" label="标题")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button-group
                                el-tooltip.item(effect="light" content="编辑" placement="top")
                                    el-button(icon='el-icon-edit' @click="handleUpdate")
                                el-tooltip.item(effect="light" content="删除" placement="top")
                                    el-button(icon='el-icon-delete' @click="handleDestroy(scope.row)")
                el-pagination.mt5(@current-change="resource.list" :page-size="resource.t.pageSize" layout="prev, pager, next, jumper" :total="resource.t.PageCount" :current-page.sync="resource.t.pageIndex")
                el-dialog(title="资讯管理" :visible.sync="dialog")
                    el-form(ref="form" :model="resource.m" :rules="resource.rules" label-width="120px" label-position="right")
                        el-form-item(label="资讯类别")
                            el-select(v-model="resource.m.type")
                                el-option(v-for="item in tabs" :key="item" :label="item" :value="item")
                        el-form-item(label="标题")
                            el-input(type="textarea" autosize v-model="resource.m.title" auto-complete="off" placeholder="请填写标题")
                        el-form-item(label="内容")
                            el-input(type="textarea" autosize v-model="resource.m.content" auto-complete="off" placeholder="请填写内容")
                    el-button(@click="dialog= false") 取消
                    el-button(type="primary" @click="handleSubmit") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { News } from "apis";
import  { ResourceMixin } from 'components';

@Component
export default class NewsView extends ResourceMixin {
    @Provide() resource = News;
    @Provide() tabs = ['全部新闻', "公司新闻", "咨询文章"];
    protected created(): void {
        this.query.type = '全部新闻'
        this.resourceList()
    }
    tabClick(tab: any, event: any) {
        console.log(this.query.type)
        this.resourceList()
    }
}
</script>