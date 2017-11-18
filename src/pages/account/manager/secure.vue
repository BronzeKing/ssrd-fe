<template lang="pug">
    .page-secure
        .secure-item
            .state-icon
                i.el-icon-check
            span 登录密码 
            .item-info 互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。
            el-button(@click="passDialog=true" type="text") 修改
            el-dialog(title="更改密码" :visible.sync="passDialog")
                el-form(:model="Password" ref="passForm")
                    el-form-item(label="新的登录密码" prop="password" :error="Password.errors.password")
                        el-input(v-model="Password.m.password" auto-complete="off" type="password")
                    el-form-item(label="请再输入一次密码" prop='password2' :error="Password.errors.password2")
                        el-input(v-model="Password.m.password2" auto-complete="off" type="password")
                div(slot="footer" class="dialog-footer")
                    el-button(@click="passDialog = false") 取消
                    el-button(type="primary" @click="changePassword") 提交
        .secure-item
            .state-icon
                i.el-icon-check
            span 邮箱验证
            .item-info(v-show="user.email") 您验证的邮箱是：{{user.email}}
            .item-info(v-show="!user.email") 您还未验证邮箱
            el-button(@click="changeEmailDialog=true" type="text") 修改
            el-dialog(title="修改邮箱" :visible.sync="changeEmailDialog")
                el-form(:model="Email" ref="changeEmailForm")
                    el-form-item(label="我的邮箱" prop="email" :error="Email.errors.email")
                        el-input(v-model="Email.m.email" auto-complete="off")
                    el-form-item(label="验证码" prop='captcha' :error="Email.errors.captcha")
                        el-input(v-model="Email.m.captcha" auto-complete="off")
                        el-button(@click="sendCaptcha") 发送验证邮件
                div(slot="footer" class="dialog-footer")
                    el-button(@click="changeEmailDialog=false") 取消
                    el-button(type="primary" @click="changeEmail") 提交
        .secure-item
            .state-icon
                i.el-icon-check
            span 手机验证
            .item-info(v-show="user.mobile")
                span 您验证的手机是：{{user.mobile}}
            .item-info(v-show="!user.mobile")
                span 您还未验证手机
            el-button(type="text") 立即验证
</template>
<script lang="ts" src="./secure.ts">
</script>
<style lang="scss">
.page-secure{
    // width: 870px;
    background: #fff;
    padding: 15px;
    .secure-item{
        display: flex;
        align-items: center;
        .state-icon{
            width: 50px;
        }
        .item-info{
            width: 500px;
            margin-left: 20px;
        }
    }

}

</style>
