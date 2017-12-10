<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 客户满意度调查
        div
            el-form(ref="form" :model="data" label-width="80px")
                el-form-item(label="基本信息")
                    el-radio-group(v-model="data.base")
                        el-radio(label="个人客户" value="41")
                        el-radio(label="行业客户" value="31")
                el-form-item(label="单位地址")
                    el-input(v-model="data.address")
                el-form-item(label="联系人")
                    el-input(v-model="data.linkman")
                el-form-item(label="联系方式")
                    el-input(v-model="data.mobile" placeholder="手机号码")
                    el-input(v-model="data.email" placeholder="邮箱")
                    el-input(v-model="data.qq" placeholder="QQ")
                el-form-item(label="发生问题的类别")
                    el-radio-group(v-model="data.type")
                        el-radio(label="新建项目" value="新建将慕")
                        el-radio(label="售后" value="售后")
                el-form-item(label="发生问题的对象")
                    el-radio-group(v-model="data.object")
                        el-radio(label="服务" value="服务")
                        el-radio(label="产品" value="产品")
                        el-radio(label="软件" value="软件")
                        el-radio(label="个人" value="个人")
                        el-radio(label="其他" value="其他")
                el-form-item(label="发生问题的日期")
                    el-col(:span="11")
                        el-date-picker(type="date" placeholder="选择日期" v-model="data.date" style="width: 100%;")
                el-form-item(label="情况具体描述")
                    el-input(v-model="data.description" type="textarea")
                el-form-item(label="处置意见")
                    el-input(v-model="data.feedback" type="textarea")
                el-button(type="primary" @click="submit") 保存
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class Survey extends Vue
{
    @Provide() data: {[x: string]: string} = {
        base: this.$store.state.user.user.role || '41',
        address: this.$store.state.user.user.address || '',
        linkman: this.$store.state.user.user.name || '',
        mobile: this.$store.state.user.user.mobile || '',
        email: this.$store.state.user.user.email || '',
        qq: this.$store.state.user.user.qq || '',
        type: '',
        object: '',
        date: '',
        description: '',
        feedback: ''
    }
    submit () {
    }
};
</script>
