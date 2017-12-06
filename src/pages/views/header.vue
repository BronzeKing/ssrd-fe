<template lang="pug">
    .page-header
        .header-bar
            .container.flex
                span 欢迎来到深圳市盛世润达智能科技有限公司官方网站
                span
                    router-link.user-option-item.active(v-show="!user.authenticated" :to="{name: 'login'}") [ 登陆 ]
                    router-link.user-option-item(v-show="!user.authenticated" :to="{name: 'register'}") [ 注册 ]
                    router-link.user-option-item(:to="{name: 'personal' }") 个人中心
                    a.user-option-item(v-show="user.authenticated" href="javascript: void(0);" @click='logout') 注销
                    router-link.user-option-item(:to="{name: 'cart' }") 购物车
                    router-link.user-option-item(:to="{name: 'quick' }") 快捷下单
        .container.flex.pt10.pb10
            img(src="~assets/logo-large.png")
            .div
                button.btn.btn-primary.btn-round.mr20
                    i.iconfont.icon-order
                    |  工程下单
                span.font-blue.f18
                    i.iconfont.icon-tel.f24.company-tel.mr5
                    | 0755-8218-2153
        .header-nav
            .container.flex
                nav.herder-nav-wrapper
                    router-link.header-nav-item(v-for="(item, index) in menu" :class="{active: getNavActive === item.name}" :key="item.title" :to="{ name: item.name }") {{item.title}}
                .header-serch
                    i.iconfont.icon-search
                    input.header-search-input(type="text" placeholder="请输入您要搜索的内容...") 
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from 'vuex';

const menu = [
    { name: 'home', title: '首页' },
    { name: 'system', title: '系统展示' },
    { name: 'product', title: '系统产品' },
    { name: 'product', title: '设备辅件' },
    { name: 'support', title: '服务与支持' },
    { name: 'support', title: '展会协助' },
    { name: 'about', title: '关于我们' },
    { name: 'information', title: '资讯生活' },
    { name: 'caringCommunity', title: '爱心社区' }
];
const menuMap: {[key: string]: number} = {}
menu.forEach((element: {name: string, title: string}, index: number) => {
    menuMap[element.name] = index
});
    
@Component
export default class Header extends Vue {
    @Provide() menu = menu;
    @Provide() getNavActive= 'home';

    // 选中的菜单项索引值
    @Watch("$route")
    onRouteChange() {
        let matched;
        this.$route.matched.forEach((item: any) => {
            if (item.name in menuMap) {
                this.getNavActive = item.name
            }
        })
    }
    // 用户信息
    public get user() {
        return this.$store.state.user
    }

    // 退出登录
    logout () {
        this.$store.commit('logout');
          this.$message({
            message: "注销成功",
            type: "success"
          });
    }
};
</script>
<style lang="scss">
    @import "~scss/pages/views/header";
</style>
