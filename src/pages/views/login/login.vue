<template lang="pug">
    .login-content
        el-tabs(v-model='activeName' @tab-click='handleClick')
            el-tab-pane(label='注册' name='1')
                el-form.demo-loginForm.login-container(:model='signupForm' :rules='register.prompt' ref='signupForm' label-position='left' label-width='0px')
                    h3.title 系统登录
                    el-form-item(prop='username' :error='register.backErrors.username')
                        el-input(type='text' v-model='signupForm.username' auto-complete='off' placeholder='姓名')
                    el-form-item(prop='email' :error='register.backErrors.email')
                        el-input(type='text' v-model='signupForm.email' auto-complete='off' placeholder='邮箱')
                    el-form-item(prop='role')
                        el-select(v-model='signupForm.role' placeholder='请选择客户类型' style='width:100%;')
                            el-option(label='ADMIN' value='0')
                            el-option(label='BOSS' value='1')
                            el-option(label='市场部' value='10')
                            el-option(label='市场部组长' value='11')
                            el-option(label='市场部组员' value='12')
                            el-option(label='工程部' value='20')
                            el-option(label='工程部经理' value='21')
                            el-option(label='工程部组长' value='22')
                            el-option(label='工程部组员' value='23')
                            el-option(label='行业用户' value='31')
                            el-option(label='分销商' value='32')
                            el-option(label='个人用户' value='41')
                            el-option(label='常规用户' value='42')
                    el-form-item(prop='password' :error='register.backErrors.password')
                        el-input(type='password' v-model='signupForm.password' auto-complete='off' placeholder='密码')
                    el-form-item(style='width:100%;')
                    el-button(type='primary' style='width:100%;' @click.native.prevent='signupSubmit  ' :loading='logining') 注 册
            el-tab-pane(label='登陆' name='2')
                el-form.demo-loginForm.login-container(:model='loginForm' :rules='login.prompt' ref='loginForm' label-position='left' label-width='0px')
                    h3.title 系统登录
                    el-form-item(prop='email' :error='login.backErrors.email')
                        el-input(type='text' v-model='loginForm.email' auto-complete='off' placeholder='账号')
                    el-form-item(prop='password' :error='login.backErrors.password')
                        el-input(type='password' v-model='loginForm.password' auto-complete='off' placeholder='密码')
                    el-form-item(style='width:100%;')
                        el-button(type='primary' style='width:100%;' @click.native.prevent='loginSubmit' :loading='logining') 登 陆
</template>

<script>
import  { login, register } from 'apis';
export default {
    data () {
        return {
            activeName: '1',
            logining: false,
            loginForm: {
                email: '',
                password: ''
            },
            signupForm: {
                role: '',
                email: '',
                password: '',
                username: ''
            },
            login: login,
            register: register
        };
    },
    methods: {
        handleReset () {
            this.$refs.loginForm.resetFields();
        },
        loginSubmit () {
            var _this = this;
            this.handleClick();
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    login.create({
                        email: this.loginForm.email,
                        password: this.loginForm.password
                    }).then(res => {
                        /* eslint-disable */
                        console.log('homeres', res);
                        /* eslint-enable */
                    }).catch(err => {
                        /* eslint-disable */
                        console.log(err);
                        /* eslint-enable */
                        this.$message.error(err.msg);
                        // err.errors.forEach(function (element) {
                        //     _this.backRules[element.name] = element.value;
                        // }); // 后端校验结果
                    });
                } else {
                    return false;
                }
            });
        },
        signupSubmit () {
            var _this = this;
            this.handleClick();
            this.$refs.signupForm.validate((valid) => {
                if (valid) {
                    register.create({
                        email: this.signupForm.email,
                        password: this.signupForm.password,
                        username: this.signupForm.username,
                        role: this.signupForm.role
                    }).then(res => {
                        /* eslint-disable */
                        console.log('homeres', res);
                        /* eslint-enable */
                        this.$confirm('恭喜您注册成功！', '成功', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'success'
                        }).then(() => {
                            this.activeName = '2';
                        });
                    }).catch(err => {
                        /* eslint-disable */
                        console.log(err);
                        /* eslint-enable */
                        this.$message.error(err.msg);
                    });
                } else {
                    return false;
                }
            });
        },
        handleClick () {

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