<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 售后申请
        div
            el-form(ref="form" :model="data" label-width="80px")
                el-form-item(label="项目名称" :error="Project.errors.name")
                    el-select(v-model="data.name" placeholder="请选择")
                        el-option(v-for="(item, index) in Project.t.Records" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="地址" :error="Project.errors.address")
                    el-input(v-model="data.address")
                el-form-item(label="申请类别" :error="Project.errors.type")
                    el-select(v-model="data.type" placeholder="请选择")
                        el-option(v-for="(item, index) in option.type.items" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="在保修期")
                    el-radio-group(v-model="data.repair")
                        el-radio(:label="true") 是
                        el-radio(:label="false") 否
                el-form-item(label="期望到位时间")
                    el-col(:span="11")
                        el-date-picker(type="date" placeholder="选择日期" v-model="data.date" style="width: 100%;")
                el-form-item(label="工期" :error="Project.errors.duration")
                    el-input-number(v-model="data.duration" controls-position="right" :min="0" :max="100000") 天
                el-form-item(label="预算" :error="Project.errors.budget")
                    el-input-number(v-model="data.budget" controls-position="right" :min="0" :max="100000") 元
                el-form-item(label="需求描述")
                    el-input(v-model="data.remark" type="textarea" placeholder="请输入您的需求")
                el-form-item(label="材料上传")
                    el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="data.attatchment" action="uploadUrl" :auto-upload="false")
                        el-button(size="small" type="primary") 点击上传
                        div(slot="tip" class="el-upload__tip")
                el-button(type="primary" @click="submit") 提交
</template>
<script lang="ts">
// 售后申请页面
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Option } from "src/common/utils/extends";
import { Project } from 'src/apis';

@Component
export default class AfterMarket extends Vue
{
    @Provide() Project = Project;
    @Provide() option = {
        type: Option(['故障维护', '变更、迁移', '拆除类'])
    }
    @Provide()
    data = {
        name: '', // 项目名称 
        address: '', //地址
        type: '',  // 申请类别
        repair: false, // 是否在保修期
        date: new Date(),  //期望到位时间
        duration: '', //工期
        budget: '', //预算
        remark: '', //需求描述
        attatchment: [] //材料
    };
    public get user() {
        console.log(this.option.type);
        return this.$store.state.user.user
    }
    protected created () {
        this.data.name = Project.m.name
        this.data.address = Project.m.address
        Project.list();
        console.log(this.option.type);
    }
    submit () {
        Project.create({linkman: this.user.profile.name, ...this.data}).then(() => {
            this.$message({
                message: "提交成功",
                type: "success"
            });
        })
    }
  handleChange(file: any, fileList: any): void {
    this.data.attatchment = fileList;
  }
};
</script>
