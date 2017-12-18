<template lang="pug">
    .user-header
        .container.flex
            router-link.user-header-logo(to="/usercenter")
                img(src="~assets/logo.png")
                i.user-header-line
                h2 个人中心
            nav
                router-link(v-for="(item, index) in navs" class="user-header-link" :key="index" :to="{name: item.name}") {{item.title}}
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";

@Component
export default class AccountHeader extends Vue {
    @Provide() navs = [
        { name: "home", title: "首页" },
        { name: "secure", title: "账户设置" },
        { name: "message", title: "我的消息" }
    ];
    protected created() {
        if (this.$store.getters.user.group.name === '客户') {
            this.navs.concat({name: 'cart', title: '购物车'})
        }
    }
}
</script>
<style lang="scss">
.user-header {
    background-color: #ffffff;
    line-height: 105px;
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
        &.active {
            color: #017fce;
            text-decoration: underline;
        }
    }
}
</style>
