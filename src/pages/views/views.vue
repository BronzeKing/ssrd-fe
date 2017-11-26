<template lang="pug">
    .views
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

