<template lang="pug">
    .login-content
        el-form.demo-loginForm.login-container(:model='Login.m' :rules='Login.rules' ref='LoginForm' label-position='left' label-width='0px' @keyup.enter.native="loginSubmit")
            h3.title 系统登录
            el-form-item(prop='email' :error='Login.errors.email')
                el-input(type='text' v-model='Login.m.email' auto-complete='off' placeholder='手机、邮箱或授权码')
            el-form-item(prop='password' :error='Login.errors.password')
                el-input(type='password' v-model='Login.m.password' auto-complete='off' placeholder='密码')
            el-form-item(style='width:100%;')
                el-button(type='primary' style='width:100%;' @click.native.prevent='loginSubmit' :loading='logining') 登 陆
            .login-type-box
                a.login-type-icon.font-black(v-for="x in $store.state.home.env.oauth" :key="x.name" :href="x.url")
                    i.iconfont(:class="icons[x.name]")
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Login }from "apis";

@Component
export default class LoginView extends Vue
{
    @Provide() logining = false;
    @Provide() LoginForm = '';
    @Provide() Login = Login;
    @Provide() icons: {[x: string]: string} = {qq: 'icon-qq', weixin: 'icon-wechat', weibo: 'icon-weibo'};
    @Provide() $refs: {
        LoginForm: HTMLFormElement
    };
    mounted() {
        this.$store.commit('logout');
    }

    loginSubmit () {
        let pushed = this.$route.query.next ? {path: this.$route.query.next} : {name: 'home'} 
        this.$refs.LoginForm.validate((valid: Boolean) => {
            if (!valid) {
                return;
            };
            Login.create().then((r: Payload) => {
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
                this.$store.commit('token', r);
                Login.retrieve().then((r: any) => {
                    this.$store.commit('login', r);
                });
                console.log(pushed);
                this.$router.push(pushed)
            });
        });
    }
};
</script>

<style lang="scss">
    .login-content{
        width: 400px;
        margin: 180px auto 100px;

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
        .login-type-box{
            display: flex;
            justify-content: space-around;
            line-height: 30px;            
        }
        .login-type-icon{
            flex: 1;
            text-align: center;
            .iconfont{
                font-size: 24px;
            }
        }
    }
    
</style>
