<template lang="pug">
    .views
        page-header
        router-view
        page-footer
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

