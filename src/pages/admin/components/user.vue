<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 用户(员工)管理
        .about-wrap.mt10.p15
            div
                el-select(v-model="selectGroup" placeholder="全部部门" @change='userList')
                    el-option(v-for="item in Group.t.Records" :key='item.id' :label='item.name' :value='item.id')
                el-select.mr15(v-model="User.t.status" placeholder="全部用户" @change="userList")
                    el-option(v-for="item in statusList" :key="item.label" :label="item.label" :value="item.value")
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的部门名称" suffix-icon="el-icon-search" v-model="User.t.search" @change="userList")
                el-table.mt10(:data="User.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="username" label="用户名")
                    el-table-column(property="group.name" label="部门")
                    el-table-column(property="mobile" label="手机")
                    el-table-column(property="created" label="创建时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button-group
                                el-select(v-model="scope.row.status" @change="userUpdate(scope.row)")
                                    el-option(label="启用" :value="1")
                                    el-option(label="停用" :value="0")
                                el-tooltip.item(effect="light" content="编辑" placement="top")
                                    el-button(icon='el-icon-edit' @click="handleUpdate")
                                el-tooltip.item(effect="light" content="删除" placement="top")
                                    el-button(icon='el-icon-delete' @click="handleDestroy(scope.row)")
                el-pagination.mt5(@current-change="userList" :page-size="User.t.pageSize" layout="prev, pager, next, jumper" :total="User.t.PageCount" :current-page.sync="User.t.pageIndex")
                el-dialog(title="用户管理" :visible.sync="dialog.user")
                    el-form(ref="UserForm" :model="User.m" :rules="User.rules" label-width="120px" label-position="right")
                        el-form-item(label="用户名" prop='username' :error='User.errors.username')
                            el-input(type='text' v-model='User.m.username' auto-complete='off' placeholder='用户名')
                        el-form-item(label="邮箱" prop='email' :error='User.errors.email')
                            el-input(type='text' v-model='User.m.email' auto-complete='off' placeholder='邮箱')
                        el-form-item(label="部门" prop='group' :error='User.errors.group')
                            el-select.mr15(v-model="User.m.group" placeholder="请选择部门")
                                el-option(v-for="(item, index) in Group.t.Records" :key="index" :label="item.name" :value="item.id")
                    el-button(@click="dialog.user = false") 取消
                    el-button(type="primary" @click="handleUser") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { User, Group } from "apis";

@Component
export default class UserView extends Vue {
    @Provide() statusList = ['-1', '1', '0'].map(x => { return { value: x, label: this.env.status[x] + '账号' }; });
    @Provide() selectGroup = '';
    @Provide() User = User;
    @Provide() Group = Group;
    @Provide() dialog = { user: false };
    @Provide() action = "";
    $refs: {
        UserForm: HTMLFormElement;
    };
    protected created(): void {
        this.userList()
        Group.list();
    }
    public get env() {
        return this.$store.state.home.env;
    }
    userList () {
        const query = {group: this.selectGroup}
        User.list(query)
    }
    handleCreate() {
        this.dialog.user = true;
        this.action = "create";
        User.m.reset();

    }
    handleUpdate() {
        this.dialog.user = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        User.destroy(data).then((r: any) => {
            User.list();
        });
    }
    handleUser() {
        if (this.action === "create") {
            User.create().then((r: any) => {
                this.dialog.user = false;
                this.userList()
            });
        } else {
            User.update().then((r: any) => {
                this.dialog.user = false;
                this.userList()
            });
        }
    }
    handleCurrentChange(data: any) {
        this.User.m.populate(data);
    }
    userUpdate (data: any) {
        console.log(data);
        User.update(data).then((r: any) => {
            this.userList();
        });
    }
}
</script>