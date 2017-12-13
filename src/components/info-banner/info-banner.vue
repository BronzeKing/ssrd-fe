<template lang="pug">
    .components.info-banner
        img(:src="image")
</template>
<style lang="scss">
    @import './layout';
</style>
<script lang='ts'>
import { Component, Provide, Vue, Prop } from "vue-property-decorator";
@Component
export default class InfoBanner extends Vue {
    @Prop()
    image: any;
}
</script>
