<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'information' }") 资讯生活
                el-breadcrumb-item 公司新闻
        .information-wrap.mt10.p15
            .information-title
                h3.f16 {{News.m.title}}
                p.f12.mb10.mt10 {{News.m.created}}
            .line.mt10 
            p.mb10 {{News.m.content}}
                
        
</template>
<script src="./newsDetail.ts" lang="ts"></script>
</script>
<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
