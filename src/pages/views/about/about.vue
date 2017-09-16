<template lang="pug">
    div.page-about
        .about-banner
                img(src="~assets/about-banner.png")
        .container
            .about-content
                .about-menu
                    .menu-title
                        .line-title
                        .title-info
                            p.f18  关于我们
                            p.f12 ABOUT US
                    .menu-wrap
                        ul
                            li.active
                                router-link(:to="{name: 'companyProfile'}")
                                    span 公司简介
                                    i.iconfont.icon-arrow-right
                            li
                                router-link(:to="{name: 'corporateCulture'}")
                                    span 企业文化
                                    i.iconfont.icon-arrow-right
                            li
                                router-link(:to="{name: 'honor'}")
                                    span 荣誉资质
                                    i.iconfont.icon-arrow-right
                            li
                                router-link(:to="{name: 'cooperativePartner'}")
                                    span 合作伙伴
                                    i.iconfont.icon-arrow-right
                            li
                                router-link(:to="{name: 'recruit'}")
                                    span 招贤纳士
                                    i.iconfont.icon-arrow-right
                            li
                                router-link(:to="{name: 'contactUs'}")
                                    span 联系我们
                                    i.iconfont.icon-arrow-right
                .about-case
                    .case-title

                .about-info.mt5
                    transition(name="router-fade" mode="out-in")
                        router-view
</template>
<script>
    // 关于我们页面
    export default{
        name: 'about'
    };
</script>
<style lang="scss">
    @import "~scss/pages/about";
</style>