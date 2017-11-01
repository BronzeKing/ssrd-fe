<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 账户安全
        div
            i.el-icon-check
            p 登录密码 互联网账号存在被盗风险，建议您定期更改密码以保护账户安全。 
            el-button(@click="passDialog=true") 修改
            el-dialog(title="更改密码" :visible.sync="passDialog")
                el-form(:model="Password" ref="passForm")
                    el-form-item(label="新的登录密码" prop="password" :error="Password.errors.password")
                        el-input(v-model="Password.m.password" auto-complete="off" type="password")
                    el-form-item(label="请再输入一次密码" prop='password2' :error="Password.errors.password2")
                        el-input(v-model="Password.m.password2" auto-complete="off" type="password")
                div(slot="footer" class="dialog-footer")
                    el-button(@click="passDialog = false") 取消
                    el-button(type="primary" @click="changePassword") 提交
        div
            i.el-icon-check
            p(v-show="user.email") 邮箱验证 您验证的邮箱是：{{user.email}}
            p(v-show="!user.email") 邮箱验证 您还未验证邮箱
            el-button(@click="changeEmailDialog=true") 修改
            el-dialog(title="修改邮箱" :visible.sync="changeEmailDialog")
                el-form(:model="Email" ref="changeEmailForm")
                    el-form-item(label="我的邮箱" prop="email" :error="Email.errors.email")
                        el-input(v-model="Email.m.email" auto-complete="off")
                    el-form-item(label="验证码" prop='captcha' :error="Email.errors.captcha")
                        el-input(v-model="Email.m.captcha" auto-complete="off")
                        el-button(@click="Captcha.retrieve('email', Email.m.email)") 发送验证邮件
                div(slot="footer" class="dialog-footer")
                    el-button(@click="changeEmailDialog=false") 取消
                    el-button(type="primary" @click="changeEmail") 提交
        div(v-show="user.mobile")
            i.el-icon-check
            p 您验证的手机是：{{user.mobile}}
        div(v-show="!user.mobile")
            i.el-icon-close
            p 手机验证 您还未验证手机
            el-button 立即验证
</template>
<script>
import  { Captcha, Password, Email } from 'apis';
export default {
    name: 'secure',
    data () {
        return {
            passDialog: false,
            changeEmailDialog: false,
            Password: Password,
            Captcha: Captcha,
            Email: Email,
            user: this.$store.state.user.user
        };
    },
    methods: {
        changePassword () {
            this.$refs.passForm.validate(valid => {
                if (valid) {
                    this.passDialog = false;
                    Password.create().then(r => {
                        this.$message({
                            message: '更改成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        changeEmail () {
            this.$refs.changeEmailForm.validate(valid => {
                if (valid) {
                    this.changeEmailDialog = false;
                    Email.create().then(r => {
                        this.$message({
                            message: '发送成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        sendCaptcha (Type, credential) {
            Captcha.retrieve({Type: Type, credential: credential, action: 'resetPassword'}).then(r => {
                this.$message({
                    message: '更改成功',
                    type: 'success'
                });
            });
        }
    }
};
</script>
