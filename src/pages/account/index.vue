<template lang="pug">
    .views
        page-header
        router-view
        page-footer
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import PageHeader from './slider';
import pageFooter from '../views/footer.vue';
@Component
({
    components:{
        PageHeader
    }
})
export default class Project extends Vue
{
};
</script>
