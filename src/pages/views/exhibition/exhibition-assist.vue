<template lang="pug">
    .page-exhibition-assist
        .exhibution-banner
            .container
                h1.exhibution-banner-title 展会协助
                p.exhibution-banner-content 只要是采用我司产品系统的单位，如有展示需要，我司可提供系统展示方案，参展设备且我司工程师全程参与。
                    br 
                    | 包括展品的调试、安装、解说、拆解、撤回，这些都由我们解决，可最大程度上帮助各单位解决参展观摩需要。
                div
                    el-button.mr20(type="primary" @click="handleClick") 立即申请
        .exhibution-content.container
            .exhibution-joinus
                .joinus-item-list
                    .joinus-item(v-for="item in Exhibition.t.Records" :key="item.id")
                        .joinus-item-image(:style="{backgroundImage: `url(${item.picture})`}")
                        p.joinus-item-title {{item.name}}
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import  { Project, Exhibition } from 'apis';
@Component
export default class ExhibitionView extends Vue {
    @Provide() Exhibition=Exhibition;

    created () {
        Exhibition.list({type: '1'})
    }
    handleClick() {
        Project.m.populate({name: '展会协助', type: '展会协助'})
        this.$router.push({name: 'quick'})
    }
}
</script>
<style lang="scss">
    @import "~scss/pages/views/exhibition/exhibition-assist";
</style>
