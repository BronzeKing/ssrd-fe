<template lang="pug">
    .page-usercenter
        .page-wrapper
            page-header
            .container.mt20.pb50
                slider
                .page-right
                    router-view
        keep-alive
            page-footer
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import Slider from './slider.vue';
import pageFooter from '../views/footer.vue';
import pageHeader from './header.vue';
@Component
({
    components:{
        pageFooter,
        Slider,
        pageHeader
    }
})
export default class AccountView extends Vue
{
};
</script>
<style lang="scss">
.page-usercenter{
    height: 100%;
    background-color: #f1f1f1;
    .container{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    // 面包屑导航部分
    .breadcrumb{
        padding: 15px 0;
    }

    .page-right{
        width: 870px;
        background: #fff;
        padding: 15px;
        .secure-item{
            display: flex;
            align-items: center;
            .state-icon{
                width: 50px;
            }
            .item-info{
                width: 500px;
                margin-left: 20px;
            }
        }
    }
}
</style>
