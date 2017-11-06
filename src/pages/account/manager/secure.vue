<template lang="pug">
    .page-secure
        .secure-wrap
            .secure-info
                .user-face
                    img(src="http://static.fallchat.com/dist/timg.jpg")
                .secure-warp
                    div
                        i.el-icon-check
                        span 登录密码 
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
                    div
                        i.el-icon-check
                        span(v-show="user.email") 邮箱验证 您验证的邮箱是：{{user.email}}
                        span(v-show="!user.email") 邮箱验证 您还未验证邮箱
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
                    div(v-show="user.mobile")
                        i.el-icon-check
                        span 您验证的手机是：{{user.mobile}}
                    div(v-show="!user.mobile")
                        i.el-icon-close
                        span 手机验证 您还未验证手机
                        el-button(type="text") 立即验证
        .survey-wrap
            el-tabs(v-model="activeName" @tab-click="handleClick")
                el-tab-pane(label="项目一" name="1") 123123123
                el-tab-pane(label="项目二" name="2") 567567
                el-tab-pane(label="项目三" name="3") asdfasdfasdf
        .project-wrap

</template>
<script lang="ts" src="./secure.ts">
</script>
<style lang="scss">
.page-secure{
    .secure-wrap{
        width: 870px;
        background: #fff;
        padding: 15px;
        .secure-info{
            display: flex;
            .user-face{
                width: 115px;
                height: 115px;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid #ccc;
                img{
                    width: 100%;
                }
            }
            .secure-warp{
                border-right: 1px solid #ccc;
                padding-right: 10px;
            }
        }
            
    }
    .survey-wrap{
        background-color: #fff;
        margin-top: 20px;
    }
    .project-wrap{
        background-color: #fff;
        margin-top: 20px;
        padding: 15px;
    }
}

</style>