<template lang="pug">
    div.page-information
        .information-banner
                img(src="~assets/support-banner.png")
        .container
            .information-content
                .information-menu
                    .menu-title
                        .line-title
                        .title-info
                            p.f18  资讯生活
                            p.f12 INFORMATION LIFE
                    .menu-wrap
                        ul
                            li(v-for="(item, i) in menu" :class="{active: index===i}" @click="index=i")
                                router-link(:to="{name: item.name}")
                                    span {{item.title}}
                                    i.iconfont.icon-arrow-right
                .information-case
                    .case-title

                .information-info.mt5
                    transition(name="router-fade" mode="out-in")
                        router-view
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class Information extends Vue
{
    @Provide() name = 'support';
    @Provide() index = 1;
    @Provide() menu = [{title: '公司新闻', name: 'news'}];
};
</script>
<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
