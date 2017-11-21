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
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

@Component
export default class CompanyProfile extends Vue
{
    @Provide() AboutUs = AboutUs;
    protected created(): void {
        AboutUs.retrieve();
    }
    public compiledMarkdown () {
        return marked(AboutUs.m.introduction, {});
    }
}
</script>
<style lang="scss">
    
</style>
