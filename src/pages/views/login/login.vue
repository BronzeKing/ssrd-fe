<template>
    <div class="login-content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="注册" name="1">
                <el-form :model="signupForm" :rules="rules" ref="signupForm" label-position="left" label-width="0px" class="demo-loginForm login-container">
                    <h3 class="title">系统登录</h3>
                    <el-form-item prop="username">
                        <el-input type="text" v-model="signupForm.username" auto-complete="off" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input type="text" v-model="signupForm.email" auto-complete="off" placeholder="邮箱"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-select v-model="signupForm.role" placeholder="请选择客户类型" style="width:100%;">
                            <el-option label="ADMIN" value="0"></el-option>
                            <el-option label="BOSS" value="1"></el-option>
                            <el-option label="市场部" value="10"></el-option>
                            <el-option label="市场部组长" value="11"></el-option>
                            <el-option label="市场部组员" value="12"></el-option>
                            <el-option label="工程部" value="20"></el-option>
                            <el-option label="工程部经理" value="21"></el-option>
                            <el-option label="工程部组长" value="22"></el-option>
                            <el-option label="工程部组员" value="23"></el-option>
                            <el-option label="行业用户" value="31"></el-option>
                            <el-option label="分销商" value="32"></el-option>
                            <el-option label="个人用户" value="41"></el-option>
                            <el-option label="常规用户" value="42"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="signupForm.password" auto-complete="off" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="signupSubmit" :loading="logining">注 册</el-button>
                    <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="登陆" name="2">
                <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="demo-loginForm login-container">
                    <h3 class="title">系统登录</h3>
                    <el-form-item prop="account">
                    <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="checkPass">
                    <el-input type="password" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item style="width:100%;">
                    <el-button type="primary" style="width:100%;" @click.native.prevent="loginSubmit" :loading="logining">登 录</el-button>
                    <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
import  { login, register } from 'apis';
export default {
    data () {
        return {
            activeName: '1',
            logining: false,
            loginForm: {
                account: '',
                checkPass: ''
            },
            signupForm: {
                role: '',
                email: '',
                password: '',
                username: ''
            },
            rules: {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                checkPass: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleReset () {
            this.$refs.loginForm.resetFields();
        },
        loginSubmit () {
            login({
                email: this.loginForm.account,
                password: this.loginForm.checkPass
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
            });
        },
        signupSubmit () {
            register({
                email: this.signupForm.email,
                password: this.signupForm.password,
                username: this.signupForm.username,
                role: this.signupForm.role
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
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