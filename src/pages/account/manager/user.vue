<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 子账号管理
        div
            el-select(v-model="User.t.status" placeholder="全部用户" @change="userList")
                el-option(v-for="item in statusList" :key="item.label" :label="item.label" :value="item.value")

            el-input(placeholder="请输入要搜索的账号名称或邮箱" icon="search" v-model="User.t.search" @change="User.list()")
            el-table.mt10(:data="User.t.Records" stripe highlight-current-row style="width: 100%")
                el-table-column(property="username" label="用户名")
                el-table-column(property="created" label="创建时间")
                el-table-column(label="操作")
                    template(scope="scope")
                        el-select(v-model="scope.row.status" :placeholder="env.status[String(scope.row.status)]" @change="userUpdate(scope.row)")
                            el-option(label="启用" value="1")
                            el-option(label="停用" value="0")
                        el-button(icon='delete' @click="userDestroy(scope.row)")

            el-pagination.mt5(@current-change="User.list" :page-size="User.t.pageSize" layout="prev, pager, next, jumper" :total="User.t.PageCount" :current-page.sync="User.t.pageIndex")
        
</template>
<script>
import  { User } from 'apis';
export default {
    name: 'user',
    data () {
        return {
            env: this.$store.state.home.env,
            statusList: ['-1', '1', '0'].map(x => { return { value: x, label: this.$store.state.home.env.status[x] + '账号' }; }),
            User: User
        };
    },
    created () {
        User.list();
    },
    methods: {
        userList () {
            User.list();
        },
        userDestroy (data) {
            User.destroy(data);
            this.userList();
        },
        userUpdate (data) {
            User.update(data);
            console.log(data);
        }
    }
};
</script>
