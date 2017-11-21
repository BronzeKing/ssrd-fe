<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 公司简介
        .about-wrap.mt10.p15(v-html="compiledMarkdown()")
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { AboutUs } from 'apis';
import marked from 'marked'

@Component
export default class CompanyProfile extends Vue
{
    @Provide() AboutUs = AboutUs;
    protected created(): void {
        AboutUs.retrieve();
    }
    public compiledMarkdown () {
        return marked(AboutUs.m.introduction, { sanitize: true });
    }
}
</script>
<style lang="scss">
    
</style>
