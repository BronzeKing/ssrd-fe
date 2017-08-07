<template>
    <div class="views">
        <page-header></page-header>
        <router-view></router-view>     
        <page-footer></page-footer>        
    </div>
</template>
<script>
    import pageHeader from './header';      // 官网部分公众头部
    import pageFooter from './footer';      // 官网部分公共底部
    export default {
        name: 'views',
        components:{
            pageHeader,
            pageFooter
        }
    };
</script>
<style lang="scss">
    @import "~scss/pages/home";
</style>

