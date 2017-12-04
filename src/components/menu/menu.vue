<template lang="pug">
    .about-menu
        .menu-title
            .line-title
            .title-info
                p.f18 {{menuData.title.name}}
                p.f12 {{menuData.title.englishName}}
        .menu-wrap
            ul
                router-link(v-for="(item, index) in menuData.menuList" :to="{name: 'systemDetail', params: {id: item.id}}" :key="index")
                    li(:class="{active: activeTab===item.id}")
                        a
                            span {{item.name}}
                            i.iconfont.icon-arrow-right
</template>
<script lang="ts">
import { Component, Provide, Vue, Watch, Prop } from "vue-property-decorator";
@Component
export default class MenuView extends Vue {
    @Provide() activeTab = 0;
    @Prop()
    menuData: Array<any>;
    protected created() {
        this.activeTab = Number(this.$route.query.id);
    }
    @Watch('$route')
    onRouteChange() {
        this.activeTab = Number(this.$route.query.id);
    }

};
</script>
<style lang="scss">
    @import "./menu";
</style>
