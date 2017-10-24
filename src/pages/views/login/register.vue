<template lang="pug">
    .login-content
        el-form.demo-loginForm.login-container(:model='Register.m' :rules='Register.rules' ref='RegisterForm' label-position='left' label-width='0px')
            h3.title 系统注册
            el-form-item(prop='username' :error='Register.errors.username')
                el-input(type='text' v-model='Register.m.username' auto-complete='off' placeholder='姓名')
            el-form-item(prop='email' :error='Register.errors.email')
                el-input(type='text' v-model='Register.m.email' auto-complete='off' placeholder='邮箱')
            el-form-item(prop='role')
                el-select(v-model='Register.m.role' placeholder='请选择客户类型' style='width:100%;')
                    el-option(v-for="role in roles" :key="role.value" label="role.name" value="role.value")
            el-form-item(prop='password' :error='Register.errors.password')
                el-input(type='password' v-model='Register.m.password' auto-complete='off' placeholder='密码')
            el-form-item(style='width:100%;')
            el-button(type='primary' style='width:100%;' @click.native.prevent='RegisterSubmit' :loading='logining') 注 册
        .last-item
            a.font-white(href="javascript: void(0);")
                i.iconfont.icon-qq
            a.font-white(href="javascript: void(0);")
                i.iconfont.icon-wechat.ml5.mr5
            a.font-white(href="javascript: void(0);")
                i.iconfont.icon-weibo
</template>

<script>
import  { Register } from 'apis';
export default {
    data () {
        return {
            roles: [
                { name: '个人用户', value: 41 },
                { name: '常规用户', value: 42 },
                { name: '行业用户', value: 31 },
                { name: '分销商', value: 32 }
            ],
            logining: false,
            Register: Register,
            RegisterForm: ''
        };
    },
    methods: {
        RegisterSubmit () {
            let _this = this;
            this.$refs.RegisterForm.validate((valid) => {
                if (valid) {
                    Register.create().then(r => {
                        this.$confirm('恭喜您注册成功！', '成功', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'success'
                        });
                    }).catch(err => {
                        this.$message.error(err.msg);
                    });
                };
            });
        }
    }
};
</script>

<style lang="scss">
    .login-content{
        width: 400px;
        margin: 180px auto 100px;
    }
    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
        }
        .remember {
        margin: 0px 0px 35px 0px;
        }
    }
</style>
