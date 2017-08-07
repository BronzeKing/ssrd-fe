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
        .container.flex
            img(src="~assets/logo.png")
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