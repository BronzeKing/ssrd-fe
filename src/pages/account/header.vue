<template lang="pug">
    .user-header
        .container.flex
            router-link.user-header-logo(to="/usercenter")
                img(src="~assets/logo.png")
                i.user-header-line
                h2 个人中心
            nav
                router-link(v-for="(item, index) in navs" class="user-header-link" :class="item.name" :key="index" :to="{name: item.link ? item.name : ''}" @click.native="clickLinks") {{item.title}}
                    ul.user-box(v-if="item.name === 'account' ")
                        li.user-box-header
                            p.f14 康康
                            p.font-green.f12 √ 已实名认证
                        li.user-box-item 
                            a.user-box-item(href="javascript: void(0);")
                                span 
                                    i.iconfont.icon-mail.font-base.f22.fl
                                    | 消费记录
                                span.fr.box-item-bedg 4
                        li.user-box-footer
                            a.fr.user-box-logout(href="javascript: void(0);") 退出
                    ul.message-box(v-if="item.name === 'message' ")
                        li.message-box-header 
                            span 站内消息通知
                            a.font-blue.fr(href="javascript: void(0);") 消息接收管理
                        li.message-box-item
                            a.box-item-link(href="javascript: void(0);")
                                p.f12.font-blue 网站添加解析消息通知
                                p.f12 2017-12-18 14:22:63
                        li.message-box-footer.f12.font-blue 查看更多
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class AccountHeader extends Vue {
    @Provide() navs = [
        { name: "home", title: "首页", link: true},
        { name: "secure", title: "账户设置", link: true},
        { name: "message", title: "我的消息", link: true},
        { name: 'account', title: "个人中心", link: false}
    ];
    protected created() {
        if (this.$store.getters.user.group.name === '客户') {
            this.navs.concat({name: 'cart', title: '购物车', link: true})
        }
    }

    clickLinks(e: ElementEventMap){
        console.log(e)
    }
}
</script>
<style lang="scss">
.user-header {
    background-color: #ffffff;
    line-height: 105px;
    // logo部分
    .user-header-logo {
        display: flex;
        align-items: center;
        .user-header-line {
            width: 1px;
            height: 50px;
            background-color: #999;
        }
        h2 {
            font-weight: 400;
            margin-left: 15px;
        }
    }
    .user-header-link {
        padding: 0 30px;
        font-size: 16px;
        position: relative;
        display: inline-block;
        &.active {
            color: #017fce;
            text-decoration: underline;
        }

        &.message:hover{
            .message-box{
                display: block;
            }
        }

        &.account:hover{
            .user-box{
                display: block;
            }
        }
    }
    // 用户中心框
    .user-box{
        display: none;
        width: 240px;
        position: absolute;
        top: 80px;
        right: 0;
        // transform:  translateX(-50%);
        // background-color: #202529;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.175);
        z-index: 10;
        line-height: 1.4;
        color: #333;

        &::before{
            content: '';
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #eaedf1;
            position: absolute;
            right: 50px;
            top: -20px;
            // transform: translate(-50%);
        }

        &-header{
            // background: #262c30;
            background: #eaedf1;
            padding: 12px 16px;
            line-height: 1.5;
        }

        &-item{
            padding: 12px 16px;
            font-size: 14px;
        }

        &-footer{
            overflow: hidden;
            padding: 12px 16px 16px;
        }

        .user-box-item,
        &-logout{
            &:link,
            &:active{
                color: #333;
            }
            &:hover,
            &:visited{
                color: #017fce;
            }
        }
        .user-box-item{
            height: 20px;
            line-height: 20px;
            padding: 0 16px;
            margin: 12px 0;
            font-size: 12px;
            position: relative;
        }

        .box-item-bedg{
            background: #ff5029;
            border-radius: 10px;
            transform: scale(.8);
            padding: 0 6px;
            color: #fff;
        }

        &-logout{
            font-size: 12px;
            width: 70px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            float: right;
            border: 1px solid #73777a;
        }
    }

    .message-box{
        position: absolute;
        top: 70px;
        left: -150px;
        margin-left: 50%;
        width: 300px;
        word-break: break-all;
        border-radius: 2px;
        z-index: 15;
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.175);
        line-height: 1.5;
        display: none;

        &::before{
            content: '';
            width: 0;
            height: 0;
            border: 10px solid transparent;
            border-bottom-color: #eaedf1;
            position: absolute;
            left: 50%;
            top: -20px;
            transform: translate(-50%);
        }
        &-header{
            height: 50px;
            background-color: #eaedf1;
            padding: 0 15px;
            line-height: 50px;
            color: #333;
            font-size: 14px;
        }

        &-item{
            height: 60px;
            line-height: 20px;
            border-bottom: 1px solid #eaedf1;
        }
        .box-item-link{
            display: block;
            height: 100%;
            padding: 10px 10px;
            background: #fff;
            color: #333;
        }

        &-footer{
            height: 50px;
            line-height: 50px;
            background: #fff;
            text-align: center;
        }
    }
}
</style>
