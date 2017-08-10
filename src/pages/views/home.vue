<template lang="pug">
    .page-home.container
        .home-information.mb20
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
        ul.home-flow.mb20
            li.home-flow-item.head
                i.iconfont.icon-flow.font-blue.f24.fb
                strong.f16.ml10.mr10 下单流程
                span.f14.font-grey ORDER PROCESS
            li.home-flow-item.active 客户登陆
            li.home-flow-item 需求下单
            li.home-flow-item 上传图纸
            li.home-flow-item 在线提交
            li.home-flow-item 需求沟通
            li.home-flow-item 方案报价
        .home-introduce.mb20
            .home-introduce-text 
                h4.introduce-text-title.fn.mb5 深圳湾生态科技公园
                p.introduce-text-content 小区高清安防案例，某某小区2016年高清安防案例，该小区2010年建成小区高清安防案例，某某小区2016年高清安防案例，该小区2010年建成小区高清安防案例，某某小区2016年高清安防案例，该小区2010年建成小区高清安防案例.....
                span.introduce-date
                    span.mr20 01-08
                    span.f14 2017
                span.introduce-icon 
                    a.font-white(href="javascript: void(0);")
                        i.iconfont.icon-right.f24
            a.home-introduce-case
                img(src="~assets/case_0.png")
                div
                    h4.fn.f16.mt5.mb5 深圳湾生态科技公园
                    p 小区高清安防案例，某某小区2016年高清安防案例，该小区2010年建成，位于XXXXX
            a.home-introduce-case
                img(src="~assets/case_1.png")
                div
                    h4.fn.f16.mt5.mb5 深圳湾生态科技公园
                    p 小区高清安防案例，某某小区2016年高清安防案例，该小区2010年建成，位于XXXXX
        .home-links
            .home-links-header.mb15
                span
                    i.iconfont.icon-link.font-blue.fb.f24
                    strong.f16.ml10.mr10 行业链接
                    span.f14.font-grey INDUSTRY LINKS
                a.font-lightgrey(href="javascript: void(0);") 查看更多&plus;
            .home-carousel
                i.iconfont.icon-arrow-left.font-grey
                // .industry-list-wrapper
                nav.industry-list
                    a.industry-list-item(href="javascript: void(0);" v-for="item in 8" :style="{backgroundImage: `url(${require('assets/logo.png')})`}")
                i.iconfont.icon-arrow-right.font-grey
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

