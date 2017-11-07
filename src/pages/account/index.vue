<template lang="pug">
    .views
        page-header
        router-view
        page-footer
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
// import PageHeader from './slider';
import pageFooter from '../views/footer.vue';
import pageHeader from './header.vue';
@Component
({
    components:{
        pageFooter,
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

</style>
