<template lang="pug">
    .views
        page-header
        .container.mt20
            slider
            .page-right
                router-view
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
export default class Account extends Vue
{
};
</script>
<style lang="scss" scoped>
.views{
    background-color: #f1f1f1;
}
.container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
</style>
