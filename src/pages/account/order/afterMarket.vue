<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 售后申请
        div
            el-form(ref="form" :model="data" label-width="80px")
                el-form-item(label="项目名称")
                    el-input(v-model="data.name")
                el-form-item(label="地址")
                    el-input(v-model="data.address")
                el-form-item(label="申请类别")
                    el-select(v-model="data.type.value" placeholder="请选择")
                        el-option(v-for="(item, index) in data.type.items" :key="index" :label="item.name" :value="item.name")
                el-form-item(label="在保修期")
                    el-radio-group(v-model="data.repair")
                        el-radio(label="是" value="yes")
                        el-radio(label="否" value="no")
                el-form-item(label="期望到位时间")
                    el-col(:span="11")
                        el-date-picker(type="date" placeholder="选择日期" v-model="data.date" style="width: 100%;")
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
// 售后申请页面
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Option } from "common/utils/extends";

@Component
export default class AfterMarket extends Vue
{
    @Provide()
    data = {
        name: '', // 项目名称
        address: '', //地址
        type: Option(['故障维护', '迁移', '拆除']),  // 申请类别
        repair: '', // 是否在保修期
        date: new Date(),  //期望到位时间
        duration: '', //工期
        budget: '', //预算
        description: '', //需求描述
        attatchment: '' //材料

    };
    submit () {
    }
  handleChange(file: any, fileList: any): void {
    this.data.attatchment = fileList;
  }
};
</script>
