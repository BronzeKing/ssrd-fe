<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 资讯生活
                el-breadcrumb-item 公司新闻
        .information-wrap.mt10.p15
            el-tabs(tpye="card" v-model="activeTab"  @tab-click="clickTab")
                el-tab-pane(v-for="x in tabs" :key="x" :label="x")
            el-input(placeholder="请输入要搜索的项目名称" suffix-icon="el-icon-search" v-model="Project.t.search" @change="Project.list()")
            el-table.mt10(:data="Project.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                el-table-column(property="name" label="名称")
                el-table-column(property="type" label="项目类型")
                el-table-column(property="events" label="事项")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button(size="mini" @click="handleEdit(scope.$index, scope.row)") 编辑
                        el-button(size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)") 删除
            el-pagination.mt5(@current-change="Project.list" :page-size="Project.t.pageSize" layout="prev, pager, next, jumper" :total="Project.t.PageCount" :current-page.sync="Project.t.pageIndex")
                
        
</template>
<script>
import  { Project } from 'apis';
export default {
    name: 'project',
    data () {
        return {
            Project: Project,
            action: 'list'
            activeTab: 0,
            tabs: ['全部项目', '进度类', '维护类', '签证类']
        };
    },
    created () {
        Project.list();
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        '$route': 'init'
    },
    methods: {
        rowClick (m) {
            // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
            this.$router.replace({name: 'projectDetail', params: { id: m.id }});
        },
        clickTab (tab, event) {
            Project.list();
        },
        handleEdit () {
        },
        handleDelete () {
        }
    }
};
</script>
