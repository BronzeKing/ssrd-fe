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
                            li(:class="{active: activeTab===1}" @click="activeTab=1")
                                router-link(:to="{name: 'companyProfile'}")
                                    span 公司简介
                                    i.iconfont.icon-arrow-right
                            li(:class="{active: activeTab===2}" @click="activeTab=2")
                                router-link(:to="{name: 'corporateCulture'}")
                                    span 企业文化
                                    i.iconfont.icon-arrow-right
                            li(:class="{active: activeTab===3}" @click="activeTab=3")
                                router-link(:to="{name: 'honor'}")
                                    span 荣誉资质
                                    i.iconfont.icon-arrow-right
                            li(:class="{active: activeTab===4}" @click="activeTab=4")
                                router-link(:to="{name: 'cooperativePartner'}")
                                    span 合作伙伴
                                    i.iconfont.icon-arrow-right
                            li(:class="{active: activeTab===5}" @click="activeTab=5")
                                router-link(:to="{name: 'recruit'}")
                                    span 招贤纳士
                                    i.iconfont.icon-arrow-right
                            li(:class="{active: activeTab===6}" @click="activeTab=6")
                                router-link(:to="{name: 'contactUs'}")
                                    span 联系我们
                                    i.iconfont.icon-arrow-right
                .about-case
                    .case-title

                .about-info.mt5
                    transition(name="router-fade" mode="out-in")
                        router-view
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { Route } from 'vue-router'
@Component
export default class News extends Vue
{
    @Provide() activeTab: number = 1;
    beforeRouteEnter (to: Route, from: Route, next: any) {
        next((vm: News) => {
            let index = to.meta.activeTab;
            if (typeof index === 'number') {
                vm.activeTab = index;
            }
        });
    }

}
</script>
<style lang="scss">
    @import "~scss/pages/about";
</style>
