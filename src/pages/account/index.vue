<template lang="pug">
    .views
        page-header
        router-view
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import PageHeader from './header';
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
