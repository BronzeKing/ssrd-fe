<template lang="pug">
    .page-settleCart
        .title.f18 订单信息
        el-form(ref="form" label-width="80px")
            el-form-item(label="需求信息")
                el-input(v-model="Project.m.duration" style="width:200px")
                    template(slot="prepend") 工期
                    template(slot="append") 天
                el-input.ml10(v-model="Project.m.budget" style="width:200px")
                    template(slot="prepend") 预算
                    template(slot="append") 万
            el-form-item(label="项目名称")
                el-input(v-model="Project.m.name" style="width:300px")
            el-form-item(label="联系人")
                el-input(v-model="Project.m.linkman" style="width:300px")
            el-form-item(label="公司")
                el-input(v-model="Project.m.company" style="width:300px")
            el-form-item(label="地址")
                el-input(v-model="Project.m.address" style="width:300px")
            el-form-item(label="手机")
                el-input(v-model="Project.m.mobile" style="width:300px")
            el-form-item(label="备注")
                el-input(type="textarea" v-model="Project.m.input" style="width:500px")
            el-form-item(label="补充文件")
                el-button(plain) 上传文件
            el-form-item
                el-button(type="primary") 提交
                el-button(plain) 取消
</template>
<script lang="ts" src="./settleCart.ts">
</script>
<style lang="scss" scoped>
.page-settleCart{
    background: #fff;
    .title{
        height: 40px;
        border-bottom: 1px solid #E9E9E9;
        line-height: 40px;
        padding: 0 10px;
        margin-bottom: 10px;
    }

}

</style>
