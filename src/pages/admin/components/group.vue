<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item 部门管理
        .about-wrap.mt10.p15
            div
                el-button(suffix-icon='el-icon-edit' @click="handleCreate") 新建
                el-input(placeholder="请输入要搜索的部门名称" suffix-icon="el-icon-search" v-model="Group.t.search" @change="groupList")
                el-table.mt10(:data="Group.t.Records" stripe @current-change="handleCurrentChange" highlight-current-row style="width: 100%")
                    el-table-column(property="name", label="部门名称")
                    el-table-column(property="updated" label="更新时间")
                    el-table-column(label="操作")
                        template(slot-scope="scope")
                            el-button-group
                                el-tooltip.item(effect="light" content="编辑" placement="top")
                                    el-button(icon='el-icon-edit' @click="handleUpdate")
                                el-tooltip.item(effect="light" content="删除" placement="top")
                                    el-button(icon='el-icon-delete' @click="handleDestroy(scope.row)")
                el-pagination.mt5(@current-change="Group.list" :page-size="Group.t.pageSize" layout="prev, pager, next, jumper" :total="Group.t.PageCount" :current-page.sync="Group.t.pageIndex")
                el-dialog(title="部门管理" :visible.sync="dialog.group")
                    el-form(ref="GroupForm" :model="Group.m" :rules="Group.rules" label-width="120px" label-position="right")
                        el-form-item(label="部门名称" :error="Group.errors.name")
                            el-input(type="textarea" autosize v-model="Group.m.name" auto-complete="off" placeholder="请填写部门名称")
                    el-button(@click="dialog.group = false") 取消
                    el-button(type="primary" @click="handleGroup") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Group } from "src/apis";

@Component
export default class GroupView extends Vue {
    @Provide() Group: any = Group;
    @Provide() dialog = { group: false };
    @Provide() action = "";
    $refs: {
        GroupForm: HTMLFormElement;
    };
    protected created(): void {
        this.groupList()
    }
    public get env() {
        return this.$store.state.home.env;
    }
    groupList() {
        this.Group.list()
    }
    handleCreate() {
        this.dialog.group = true;
        this.action = "create";
        Group.m.reset();
    }
    handleUpdate() {
        this.dialog.group = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        Group.destroy(data).then((r: any) => {
            Group.list();
        });
    }
    handleGroup() {
        if (this.action === "create") {
            Group.create().then((r: any) => {
                this.dialog.group = false;
                this.groupList()
            });
        } else {
            Group.update().then((r: any) => {
                this.dialog.group = false;
                this.groupList()
            });
        }
    }
    handleCurrentChange(data: any) {
        this.Group.m.populate(data);
    }
}
</script>
