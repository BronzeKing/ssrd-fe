<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 快捷下单
        div
            el-form(ref="form" :model="Project.m" label-width="80px")
                el-form-item(label="项目名称" :error="Project.errors.name")
                    el-input(v-model="Project.m.name" placeholder="请输入项目名称" @blur="onNameChange")
                el-form-item(label="项目组名称" :error="Project.errors.group")
                    el-select(v-model="group" placeholder="请输入或选择项目组" allow-create filterable)
                        el-option(v-for="item in ProjectGroup.t.Records" :key='item.name' :label='item.name' :value='item.name')
                el-form-item(label="地址" :error="Project.errors.address")
                    el-input(v-model="Project.m.address" placeholder="请输入地址")
                el-form-item(label="手机" prop='mobile' :error='Project.errors.mobile')
                    el-input(v-model="Project.m.mobile" style="width:300px" :error="Project.errors.mobile" placeholder='请输入手机号码')
                el-form-item(label="联系人" prop="linkman" :error='Project.m.linkman')
                    el-input(v-model="Project.m.linkman" style="width:300px" placeholder='请输入联系人')
                el-form-item(label="工程类别" :error="Project.errors.type")
                    el-select(v-model="Project.m.type" placeholder="请选择")
                        el-option(v-for="(item, index) in env.ProjectType" :key="index" :label="item" :value="item")
                el-form-item(label="工程系统" :error="Project.errors.system")
                    el-select(v-model="data.system" placeholder="请选择一个或多个系统" multiple)
                        el-option(v-for="(item, index) in System.t.Records" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="工期" :error="Project.errors.duration")
                    el-input-number(v-model="Project.m.duration" controls-position="right" :min="1" :max="100000") 天
                el-form-item(label="预算" :error="Project.errors.budget")
                    el-input-number(v-model="Project.m.budget" controls-position="right" :min="1" :max="100000") 元
                el-form-item(label="需求描述")
                    el-input(v-model="Project.m.remark" type="textarea")
                el-form-item(label="材料上传" :error="Project.errors.attatchment")
                    el-upload(class="upload-demo" multiple :on-success="handleChange" :file-list="Project.m.attatchment" :action="uploadUrl")
                        el-button(size="small" type="primary") 点击上传
                        div(slot="tip" class="el-upload__tip")
                el-button(type="primary" @click="submit") 保存
</template>
<script lang="ts">
// 快捷下单页面
import { Component, Provide, Vue, Watch } from 'vue-property-decorator';
import  { System, Project, ProjectGroup, Profile } from 'src/apis';
import API from 'src/apis/api-urls'; // 接口URL

@Component
export default class QuickView extends Vue
{
    @Provide()
    data = {
        system: [],
    };
    @Provide() uploadUrl = API.docs + '?type=项目材料';
    @Provide() System = System;
    @Provide() Project = Project;
    @Provide() ProjectGroup = ProjectGroup;
    @Provide() group = '';
    @Provide() 
    $refs: {
        form: HTMLFormElement;
    };
    public get env() {
        return this.$store.state.home.env;
    };
    protected created () {
        this.group = Project.m.name
        System.list();
        ProjectGroup.list();
        let {name, user, ...profile} = Profile.m.serialize()
        Project.m.populate({linkman: name, mobile: user.mobile, ...profile})
    }
    onNameChange() {  // 项目组名称默认等于项目名称
        if (!this.group) {
            this.group = Project.m.name
        }
    }
    submit () {
        this.$refs.form.validate((valid: Boolean) => {
            if (!valid) {
                return false
            }
            let {name, linkman, remark, budget, duration, mobile, address, attatchment, type, ...rest} = Project.m
            Project.create({name, linkman, remark, budget, duration, mobile, address, attatchment, type }).then((r: any) => {
                this.$message({
                    message: '提交成功',
                    type: 'success'
                });
                Project.m.reset()
                this.$router.push({name: 'projectList'})
            })
        })
    }

  handleChange(response: any, file: any, fileList: any): void {
    Project.m.attatchment = fileList.map((item: any) => {return item.response});
  }
};
</script>
