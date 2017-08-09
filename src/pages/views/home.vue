<template lang="pug">
    .page-home.container
        .home-information
            .home-banner
                img(src="~assets/banner.png")
            article.home-info
                .home-article
                    h4.home-article-title 最新公告
                    nav.home-article-list
                        a.home-article-item(href="javascript: void(0);" v-for="item in 4") [新闻公告] 深睿观察：智能家居如何走向平民化？
                nav.home-user-nav
                    a.home-user-item(href="javascript: void(0);")
                        i.iconfont.icon-team
                        p 客户中心
                    a.home-user-item(href="javascript: void(0);")
                        i.iconfont.icon-order
                        p 订单中心
                    a.home-user-item(href="javascript: void(0);")
                        i.iconfont.icon-project
                        p 项目管理中心
                    a.home-user-item(href="javascript: void(0);")
                        i.iconfont.icon-manage
                        p 内部管理中心
        .home-flow
            .home-flow-item
</template>
<script>
    export default {
        name: 'home',
        data () {
            return  {
                data: 'Hello,World.'
            };
        }
    };
</script>
<style lang="scss">
    @import "~scss/pages/home";
</style>

