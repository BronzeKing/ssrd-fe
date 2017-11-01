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
                    router-link.home-user-item(:to={name: 'account'})
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
                        router-link.home-article-item(v-for="item in News.t.Records.slice(0, 2)" :key="item.id" :to="{name: 'newsDetail', params: { id: item.id } }")
                            p {{item.title}}
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
            .home-introduce-item(v-for="item in SystemCase.t.Records" :key="item.id")
                .home-introduce-case
                    img(:src="item.picture" width='360px' height='155px')
                    div
                        h4.fn.f16.mt5.mb5 {{item.title}}
                        p {{item.summary.slice(0, 30)}}
                router-link.home-introduce-text(:to="{ name: 'systemCaseDetail', params: {id: item.id}}")
                    h4.introduce-text-title.fn.mb5 {{item.title}}
                    p.introduce-text-content {{item.description.slice(0, 100)}}
                    span.introduce-date
                        span.mr20 {{item.created.slice(6, 10)}}
                        span.f14 {{item.created.slice(0, 4)}}
                    span.introduce-icon 
                        a.font-white(href="javascript: void(0);")
                            i.iconfont.icon-right.f24
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
                    a.industry-list-item(:href="item.link" v-for="(item,index) in IndustryLink.t.Records" target="_blank" :style="{backgroundImage: `url(${item.picture})`}")
                i.iconfont.icon-arrow-right.font-grey
        crash-ball
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';

import  { IndustryLink, News, SystemCase } from 'apis';

import { crashBall } from 'components';

@Component
({
    components:{
        crashBall
    }
})
export default class Home extends Vue
{
    @Provide() homeBanners: Array<any> = [
        require('assets/home_banner.png'),
        require('assets/home_banner1.png'),
        require('assets/home_banner2.png')
    ];
    @Provide() IndustryLink: any = IndustryLink;
    @Provide() News: any = News;
    @Provide() SystemCase: any = SystemCase;
    
    /**
     * 创建钩子
     * @returns void
     */
    protected created(): void
    {
        // 获取新闻内容咯
        News.list({PageSize: 3});
        IndustryLink.list();
        SystemCase.list({PageSize: 3});
    }
};
</script>
<style lang="scss">
    @import "~scss/pages/home";
</style>
