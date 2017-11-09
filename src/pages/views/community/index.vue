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
                            p.f18  爱心社区
                            p.f12 CARING COMMUNITY
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
    @Provide() menu = [
    {title: '公益咨询', name: 'caringNews'},
    {title: '我们的行动', name: 'action'},
    {title: '捐助说明', name: 'description'}
    ];
};
</script>
<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>

