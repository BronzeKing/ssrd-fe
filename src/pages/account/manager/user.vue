<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 子账号管理
        div
            el-dropdown
                span.el-dropdown-link 下拉菜单
                    i.el-icon-caret-bottom.el-icon--right
                el-dropdown-menu(slot="dropdown")
                    el-dropdown-item 启用账号
                    el-dropdown-item 停用账号
            el-button(style='width:100%;' @click='createUser') 新建账号

            el-input(placeholder="请输入要搜索的账号名称或邮箱" icon="search" v-model="User.t.search" @change="User.list()")
            el-table.mt10(:data="User.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                el-table-column(property="username" label="用户名")
                el-table-column(property="created" label="创建时间")
                el-table-column(property="created" label="状态")
            el-pagination.mt5(@current-change="User.list" :page-size="User.t.pageSize" layout="prev, pager, next, jumper" :total="User.t.PageCount" :current-page.sync="User.t.pageIndex")
        
</template>
<script>
import  { User } from 'apis';
export default {
    name: 'user',
    data () {
        return {
            User: User
        };
    },
    created () {
        User.list();
    },
    methods: {
        rowClick (m) {
            // 用push有个bug， 当点击表格中的某一行之后跳转到当条faq的页面然后在点击面包屑的服务与支持 会发生bug
            this.$router.replace({name: 'newsDetail', params: { id: m.id }});
        }

    }
};
</script>
