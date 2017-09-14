<template lang="pug">
    .page-about.container
        .about-banner
            img(src="~assets/home_banner.png")
        .about-content
            .about-menu
            .about-info.mt20
                transition(name="router-fade" mode="out-in")
                    router-view

                
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