<template lang="pug">
    .page-header
        .header-bar
            .container.flex
                span 欢迎来到深圳市盛世润达智能科技有限公司官方网站
                span
                    a.user-option-item.active(href="javascript: void(0);") [ 登陆 ]
                    a.user-option-item(href="javascript: void(0);") [ 注册 ]
                    a.user-option-item(href="javascript: void(0);") 会员中心
                    a.user-option-item(href="javascript: void(0);") 购物车
                    a.user-option-item(href="javascript: void(0);") 快捷下单
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
                    router-link.header-nav-item.active(to="/home") 首页
                    a.header-nav-item(href="javascript: void(0);") 系统展示
                    a.header-nav-item(href="javascript: void(0);") 系统产品
                    a.header-nav-item(href="javascript: void(0);") 设备辅件
                    router-link.header-nav-item(to="/about") 关于我们
                    a.header-nav-item(href="javascript: void(0);") 爱心社区
                .header-serch
                    i.iconfont.icon-search
                    input.header-search-input(type="text" placeholder="请输入您要搜索的内容...") 
</template>
<script>
    export default {
        name: 'login',
        data () {
            return  {
                data: 'Hello, login.'
            };
        }
    };
</script>
<style lang="scss">
    @import "~scss/pages/views/header";
</style>
