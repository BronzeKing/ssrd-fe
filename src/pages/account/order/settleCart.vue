<template lang="pug">
    .page-settleCart
        .title.f18 订单信息
        el-form(:model="form" label-width="80px")
            el-form-item(label="需求信息")
                el-input(v-model="input3" style="width:200px")
                    template(slot="prepend") 工期
                    template(slot="append") 天
                el-input.ml10(v-model="input3" style="width:200px")
                    template(slot="prepend") 预算
                    template(slot="append") 万
            el-form-item(label="项目名称")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="联系人")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="公司")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="电话")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="地址")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="手机")
                el-input(v-model="input3" style="width:300px")
            el-form-item(label="备注")
                el-input(type="textarea" v-model="input3" style="width:500px")
            el-form-item(label="补充文件")
                el-button(plain) 上传文件
            el-form-item
                el-button(type="primary") 提交
                el-button(plain) 取消
</template>
<script lang="ts">
//购物车

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
