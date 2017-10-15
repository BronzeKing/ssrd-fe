<template lang="pug">
    .page-footer
        .container-upper-part
            .container.flex
                ul.container-left
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 关于我们
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 公司简介
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 联系我们
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 荣誉资质
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 合作伙伴
                    li.left-sub
                        ul.left-sub-flex
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 系统介绍/方案
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 可视化劳务管理
                            li.left-progeny
                                a.left-content(href="javascript: void(0);") 智能化监控系统
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
            p.f14 版权所有 Copyright &copy; 2006 2010 深圳市盛世润达智能科技有限公司 粤ICP备06083171号
                .network-icnon.mt10
                a(href="https://szcert.ebs.org.cn/1c48b07e-59b5-465f-822e-5516a71d59b4" target="_blank")
                    img(src="https://szcert.ebs.org.cn/Images/newGovIcon.gif")
</template>
<script>
    export default {
        name: 'login',
        data () {
            return  {
                menuList:[]
            };
        }
    };
</script>
<style lang="scss">
    @import "~scss/pages/views/footer.scss";
</style>