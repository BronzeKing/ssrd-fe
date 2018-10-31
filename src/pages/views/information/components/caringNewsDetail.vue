<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 资讯生活
                el-breadcrumb-item 公益咨询
        .information-wrap.mt10.p15
            .information-title
                h3.f16 {{News.m.title}}
                p.f12.mb10.mt10 {{News.m.created}}
            .line.mt10 
            p.mb10(v-html="News.m.content")
                
        
</template>

<script lang="ts">
import { Watch, Component, Provide, Vue } from "vue-property-decorator";
import { News } from "src/apis";

@Component
export default class NewsDetail extends Vue {
    @Provide() News = News;

    protected created() {
        this.init();
    }
    @Watch("$route")
    onRouteChange() {
        this.init();
    }
    init() {
        News.retrieve({ id: this.$route.params.id });
    }
}
</script>

<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
