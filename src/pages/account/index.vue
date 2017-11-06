<template lang="pug">
    .views
        .container.pt20
            page-header
            router-view
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
// import PageHeader from './slider';
import pageFooter from '../views/footer.vue';
@Component
({
    components:{
        pageFooter
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
    justify-content: space-between;
    align-items: flex-start;
}
</style>
