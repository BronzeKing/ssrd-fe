<template lang="pug">
    .page-about.container
        .about-banner
            img(src="~assets/banner.png")
        .about-content
            .about-menu
            .about-info
                .breadcrumb
                    el-breadcrumb
                        el-breadcrumb-item 首页
                        el-breadcrumb-item 关于我们
                        el-breadcrumb-item 招贤纳士
                
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