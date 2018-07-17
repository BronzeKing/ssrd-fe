<template lang="pug">
    .page-footer
        .container-upper-part
            .container.flex
                ul.container-left
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny(v-for="(item, index) in about")
                                router-link.left-content(:to="{ path: `/about/${item.name}` }") {{item.title}}
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                router-link.left-content(:to="{ name: 'system'}") 系统介绍/方案
                            li.left-progeny(v-for="(item, index) in System.t.Records.slice(0, 6)")
                                router-link.left-content(:to="{ name: 'systemDetail', params: {id: item.id}}") {{item.name}}
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 产品&下单
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 快捷下单
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 最新产品
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 热门产品
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 新手帮助
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 新手指南
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 交易流程
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 访问者
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 个人/终端
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 分销商
                .container-right
                    .left-sub
                        .first-item
                            i.iconfont.icon-tel.font-white
                            span.f18 联系我们 
                            span.f12 CONTACT
                        h2.second-item.fn 0755-8218-2153
                        .last-item
                            a.font-white(href="javascript: void(0);")
                                i.iconfont.icon-qq
                            a.font-white(href="javascript: void(0);")
                                i.iconfont.icon-wechat.ml5.mr5
                            a.font-white(href="javascript: void(0);")
                                i.iconfont.icon-weibo
                    .right-sub
                        p.f14.mb10 官方微信公众号
                        img.right-sub-img(src="~assets/qrcode.png")
        .container-next-part
            p.f14 版权所有 Copyright &copy; 2006 {{year}} 深圳市盛世润达智能科技有限公司 
            a.font-white(href="http://www.miitbeian.gov.cn")
                p.f14 粤ICP备06083171号
                .network-icnon.mt10
                a(href="https://szcert.ebs.org.cn/1c48b07e-59b5-465f-822e-5516a71d59b4" target="_blank")
                    img(src="https://szcert.ebs.org.cn/Images/newGovIcon.gif")
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { System } from 'apis';
@Component
export default class Views extends Vue
{
    @Provide() about = [
        {name: 'companyProfile', title: '关于我们'},
        {name: 'companyProfile', title: '公司简介'},
        {name: 'contactUs', title: '联系我们'},
        {name: 'honor', title: '荣誉资质'},
        {name: 'cooperativePartner', title: '合作伙伴'}
    ]
    @Provide() year = (new Date()).getFullYear();
    @Provide() System = System
    protected created () {
        System.list();
    }
}
</script>
<style lang="scss">
    @import "~scss/pages/views/footer.scss";
</style>
