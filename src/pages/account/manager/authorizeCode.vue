<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 授权码管理
        div
            el-select(v-model="AuthorizeCode.t.status" placeholder="全部授权码" @change="authoriazeCodeList")
                el-option(v-for="item in statusList" :key="item.label" :label="item.label" :value="item.value")

            el-input(placeholder="授权码名称、项目名称" icon="search" v-model="AuthorizeCode.t.search" @change="AuthorizeCode.list()")
            el-table.mt10(:data="AuthorizeCode.t.Records" stripe highlight-current-row style="width: 100%")
                el-table-column(property="user.username" label="授权码名称")
                el-table-column(property="project" label="所属项目")
                el-table-column(property="created" label="创建时间")
                el-table-column(label="操作")
                    template(scope="scope")
                        el-select(v-model="scope.row.status" :placeholder="env.status[String(scope.row.status)]" @change="authorizeCodeUpdate(scope.row)")
                            el-option(label="启用" value="1")
                            el-option(label="停用" value="0")
                        el-button(icon='delete' @click="authorizeCodeDestroy(scope.row)")

            el-pagination.mt5(@current-change="AuthorizeCode.list" :page-size="AuthorizeCode.t.pageSize" layout="prev, pager, next, jumper" :total="AuthorizeCode.t.PageCount" :current-page.sync="AuthorizeCode.t.pageIndex")
        
</template>
<script>
import  { AuthorizeCode } from 'apis';
export default {
    name: 'authorizeCode',
    data () {
        return {
            env: this.$store.state.home.env,
            statusList: ['-1', '1', '0'].map(x => { return { value: x, label: this.$store.state.home.env.status[x] + '授权码' }; }),
            AuthorizeCode: AuthorizeCode
        };
    },
    created () {
        AuthorizeCode.list();
    },
    methods: {
        authoriazeCodeList () {
            AuthorizeCode.list();
        },
        authorizeCodeDestroy (data) {
            AuthorizeCode.destroy(data);
            this.authoriazeCodeList();
        },
        authorizeCodeUpdate (data) {
            AuthorizeCode.update(data);
        }
    }
};
</script>
