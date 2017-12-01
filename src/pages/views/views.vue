<template lang="pug">
    .views
        .page-wrapper
            page-header
            router-view
        keep-alive
            page-footer

</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import pageHeader from './header';      // 官网部分公众头部
import pageFooter from './footer';      // 官网部分公共底部
@Component
({
    components:{
            pageHeader,
            pageFooter
    }
})
export default class Views extends Vue
{
}
</script>

<style lang="scss">
    .views{
        height: 100%;
    }

    .page-wrapper{
        min-height: 100%;
        padding-bottom: 383px;
    }
</style>
