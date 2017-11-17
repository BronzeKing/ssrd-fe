<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 快捷下单
        div
            el-form(ref="form" :model="data" label-width="80px")
                el-form-item(label="项目名称")
                    el-input(v-model="data.name" placeholder="请输入项目名称")
                el-form-item(label="地址")
                    el-input(v-model="data.address" placeholder="请输入地址")
                el-form-item(label="工程类别")
                    el-select(v-model="data.type.value" placeholder="请选择")
                        el-option(v-for="(item, index) in data.type.items" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="工程系统")
                    el-select(v-model="data.system" placeholder="请选择系统")
                        el-option(v-for="(item, index) in System.t.Records" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="工期")
                    el-input-number(v-model="data.duration" controls-position="right" :min="1" :max="100000") 天
                el-form-item(label="预算")
                    el-input-number(v-model="data.budget" controls-position="right" :min="1" :max="100000") 元
                el-form-item(label="需求描述")
                    el-input(v-model="data.description" type="textarea")
                el-form-item(label="材料上传")
                    el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="data.attatchment" action="uploadUrl" :auto-upload="false")
                        el-button(size="small" type="primary") 点击上传
                        div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                el-button(type="primary" @click="submit") 保存
</template>
<script lang="ts">
// 快捷下单页面
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Option } from "common/utils/extends";
import  { System } from 'apis';

@Component
export default class QuickView extends Vue
{
    @Provide()
    data = {
        name: '', // 项目名称
        address: '', //地址
        type: Option(this.env.ProjectType), //项目类别
        duration: '', //工期
        description: '', //需求描述
        system: '',
        attatchment: [] //材料

    };
    public get env() {
        return this.$store.state.home.env;
    };
    @Provide() System = System;
    protected created () {
        System.list();
    }
    submit () {
    }

  handleChange(file: any, fileList: any): void {
    this.data.attatchment = fileList;
  }
};
</script>
