<template lang="pug">
    .views
        .container.pt20
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
