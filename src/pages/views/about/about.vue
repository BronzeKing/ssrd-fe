<template lang="pug">
    div.page-about
        //- .about-banner
        //-         img(src="~assets/about-banner.png")
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
                            li(v-for="(item, index) in menu" :class="{active: item.name===routeName}" :key="index")
                                router-link(:to="{name: item.name}")
                                    span {{item.title}}
                                    i.iconfont.icon-arrow-right
                .about-case
                    .case-title

                .about-info.mt5
                    transition(name="router-fade" mode="out-in")
                        router-view
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
const menu = [
    { name: "companyProfile", title: "公司简介" },
    { name: "corporateCulture", title: "企业文化" },
    { name: "honor", title: "荣誉资质" },
    { name: "cooperativePartner", title: "合作伙伴" },
    { name: "recruit", title: "招贤纳士" },
    { name: "contactUs", title: "联系我们" }
];
@Component
export default class AboutView extends Vue {
    @Provide() routeName = 'companyProfile';
    @Provide() menu = menu;
    @Watch('$route')
    onRouteChange() {
        this.routeName = <string>(this.$route.name || '');
    }
}
</script>
<style lang="scss">
@import "~scss/pages/about";
</style>
