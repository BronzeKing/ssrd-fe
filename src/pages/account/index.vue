<template lang="pug">
    .views
        page-header
        router-view
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import Header from './header';
@Component
({
    components:{
        Header
    }
})
export default class Project extends Vue
{
};
</script>
