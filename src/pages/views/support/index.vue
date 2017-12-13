<template lang="pug">
    div.page-about
        //- .about-banner
        //-         img(src="~assets/support-banner.png")
        .container
            .about-content
                .about-menu
                    .menu-title
                        .line-title
                        .title-info
                            p.f18  服务与支持
                            p.f12 SERVICE && SUPPORT
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
import { Component, Provide, Vue, Watch  } from 'vue-property-decorator';
@Component
export default class Support extends Vue
{
    @Provide() routeName = 'faqs';
    @Provide() menu: Array<{title: string, name: string}> = [
        {title: '常见问题解答', name: 'faqs'},
        {title: '服务承诺', name: 'servicePromise'},
        {title: '服务网点', name: 'serviceNet'},
        {title: '文档下载', name: 'download'},
        {title: '操作视频', name: 'opVideo'}
    ];
    @Watch('$route')
    onRouteChange() {
        this.routeName = <string>(this.$route.name || '');
    }
};
</script>
<style lang="scss">
    @import "~scss/pages/about";
</style>
