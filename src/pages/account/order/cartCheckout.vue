<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 结算购物车
        div
            el-form(ref="settleForm" :model="Project" label-width="80px")
                el-form-item(label="工期" :error="Project.errors.duration")
                    el-input-number(v-model="Project.m.duration" controls-position="right" :min="1" :max="100000") 天
                el-form-item(label="预算" :error="Project.errors.budget")
                    el-input-number(v-model="Project.m.budget" controls-position="right" :min="1" :max="100000") 元
                .line.mt10 
                el-form-item(label="项目名称")
                    el-input(v-model="Project.m.name" auto-complete="off")
                el-form-item(label="联系人" :error="Project.errors.linkman")
                    el-input(v-model="Project.m.linkman" :placeholder='Profile.m.name')
                el-form-item(label="所属公司" :error="Project.errors.company")
                    el-input(v-model="Project.m.company" :placeholder="Profile.m.company")
                el-form-item(label="手机" :error="Project.errors.mobile")
                    el-input(v-model="Project.m.mobile" :placeholder="Profile.m.user.mobile")
                el-form-item(label="备注" :error="Project.errors.remark")
                    el-input(v-model="Project.m.remark" type="textare备注" autosize)
                el-button(type="primary" @click="submit") 提交
                el-button(type="primary" @click="cancel") 重置
</template>

<script lang="ts" src="./cartCheckout.ts">
</script>