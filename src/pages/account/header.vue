<template lang="pug">
    .user-header
        .container.flex
            router-link.user-header-logo(to="/usercenter")
                img(src="~assets/logo.png")
                i.user-header-line
                h2 个人中心
            nav
                router-link(class="user-header-link active" to="/home") 首页
                router-link(class="user-header-link" :to="{name: 'secure'}") 账户设置
                router-link(class="user-header-link" :to="{name: 'message'}") 消息
                router-link(class="user-header-link" :to="{name: 'cart'}") 购物车
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
export default class PageHeader extends Vue
{
};
</script>
<style lang="scss">
.user-header{
    background-color: #ffffff;
    line-height: 105px;
    .user-header-logo{
        display: flex;
        align-items: center;
        .user-header-line{
            width: 1px;
            height: 50px;
            background-color: #999;
        }
        h2{
            font-weight: 400;
            margin-left: 15px;
        }
    }
    .user-header-link{
        padding: 0 30px;
        font-size: 16px;
        &.active{
            color: #017fce;
            text-decoration: underline;
        }
    }
}

</style>
