<template lang="pug">
    .about-menu
        .menu-title
            .line-title
            .title-info
                p.f18 {{menuData.title.name}}
                p.f12 {{menuData.title.englishName}}
        .menu-wrap
            ul
                li(v-for="item in menuData.menuList" :class="{active: menuData.activeTab===item.id}" @click="linkTo(item)")
                    a
                        span {{item.name}}
                        i.iconfont.icon-arrow-right
</template>
<script>
export default {
    name: 'menuBox',
    data () {
        return {
        };
    },
    props: {
        menuData: {
            type: Object
        }
    },
    mounted () {
        this.activeTab = Number(this.$route.query.id);
    },
    methods: {
        linkTo (data) {
            this.$emit('linkTo', data);
        }
    }
};
</script>
<style lang="scss">
    @import "./menu";
</style>
