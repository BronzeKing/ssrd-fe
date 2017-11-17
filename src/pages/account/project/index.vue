<template lang="pug">
    router-view
</template>
<script lang="ts">
// 项目管理页面
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class ProjectView extends Vue
{
};
</script>
<style lang="scss" scoped>
.project-page{
    background-color: #fff;
    width: 1000px;
}

</style>
