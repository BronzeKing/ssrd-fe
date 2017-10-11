<template lang="pug">
    .page-home.container
        .home-information.mb20
            .home-banner
                el-carousel(:interval="3000" arrow="always" height="370px")
                    el-carousel-item(v-for="item in homeBanners" :key="item")
                        img(:src="item")
                //- img(src="~assets/home_banner.png")
            article.home-info
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
                .home-article
                    h4.home-article-title 最新公告
                    nav.home-article-list
                        a.home-article-item(href="javascript: void(0);" v-for="item in 2") 盛世润达中标中建股份南方片区570套门禁系统设备集中采购招标！
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
                    a.industry-list-item(:href="item.link" v-for="(item,index) in linkList" :style="{backgroundImage: `url(${item.picture})`}")
                i.iconfont.icon-arrow-right.font-grey
        crash-ball
</template>
<script>
import  { getNews, industryLink } from 'apis';
import { crashBall } from 'components';
export default {
    name: 'home',
    data () {
        return  {
            data: 'Hello,World.',
            homeBanners: [
                require('assets/home_banner.png'),
                require('assets/home_banner1.png'),
                require('assets/home_banner2.png')
            ],
            linkList: []
        };
    },
    components: {
        crashBall
    },
    created () {
        // 获取新闻内容咯
        this.getNews();
        this.getIndustryLink();
    },
    methods: {
        // 获取新闻接口
        getNews () {
            getNews({
                params:{
                    email: 'admin@test.com',
                    password: 123456
                }
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
            });
        },
        getIndustryLink () {
            industryLink({
                params:{
                    PageIndex: 1,
                    PageSize: 8
                }
            }).then(res => {
                /* eslint-disable */
                this.linkList = res.Records;
                /* eslint-enable */
            });
        }
    }
};
</script>
<style lang="scss">
    @import "~scss/pages/home";
</style>

