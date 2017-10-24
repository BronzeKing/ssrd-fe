<template lang="pug">
    .page-system
        .about-banner
            img(src="~assets/about-banner.png")
        .container
            .menu-left
                .menu-left-header
                    span.ml20 爱心社区 / 
                    span.f16 &nbsp Caring community 
                .menu-left-body
                    .menu-list(v-for="n in 5")
                        .menu-list-img
                            img(src="https://static.mum5.cn/data/default_Xl5YxUf.png")
                        .menu-list-info
                            a
                                span 深锐观察：智能家居如何走向平民化？
            .system-content
                .system-wrap
                    .system-title
                        h2 行业现状
                    .system-top-info
                        .left-info.p10
                            .system-content-text
                                p {{System.m.summary}}
                        .img-wrap
                            img(:src="System.m.picture") 
                    .system-body-info.p10
                        .cutoff-line
                            h4 系统介绍：
                            .line
                        .system-content-text(id="text0")
                            p {{System.m.introduction}}
                        .cutoff-line
                            h4 系统结构
                            .line
                        .system-content-text(id="text1")
                            p {{System.m.structure}}
                        .cutoff-line
                            h4 功能特性
                            .line
                        .system-content-text(id="text2")
                            p {{System.m.funtionalFeature}}
                        .cutoff-line
                            h4 现场图片
                            .line
                        .system-content-text(id="text3")
                            .sceneImgList
                                .scene-img(v-for="item in System.m.pictures")
                                    img(:src="item.image")
                        .cutoff-line
                            h4 相关案例
                            .line
                        .system-content-text(id="text4")
                            .scene-list
                                ul
                                    li(v-for="x in System.m.systemDemonstration")
                                        router-link(:to="{name: 'systemCaseDetail', params: {id: x.id}}")
                                            .scene-info
                                                span [ 相关案例 ]
                                                span {{ x.title }}
                                            span {{ x.created }}


            menu-box(:menuData="menuData" @linkTo="linkTo")
            .dot-menu
                ul
                    li( v-for="(item,index) in dotMenu" :class="{active: activeDotTab===index}" @click="handDot(index)")
                        .dot
                        span {{item}}


</template>
<script>
// 系统展示页面
import { menuBox } from 'components';
import  { System } from 'apis';
export default{
    name: 'systemDetail',
    data () {
        return {
            System: System,
            menuData: {
                menuList: [
                ],
                title: {
                    name: '系统展示',
                    englishName: 'SYSTEM SHOW'
                },
                activeTab: 0
            },
            dotMenu: ['系统介绍', '系统结构', '功能特性', '现场图片', '相关案例'],
            activeDotTab: 0
        };
    },
    components: {
        menuBox
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.menuData.activeTab = Number(vm.$route.params.id) || 0;
        });
    },
    mounted () {
        System.list().then(r => {
            let index = r.Records.map(x => { return x.id; }).indexOf(this.menuData.activeTab);
            this.System.m = r.Records[index];
            this.menuData.menuList = r.Records;
        });
    },
    methods: {
        linkTo (data) {
            this.menuData.activeTab = data.id;
            let index = this.System.t.Records.map(x => { return x.id; }).indexOf(this.menuData.activeTab);
            this.System.m = this.System.t.Records[index];
            this.$router.replace({ name:'systemDetail', params: {id: data.id} });
        },
        handDot (index) {
            this.activeDotTab = index;
            var anchor = this.$el.querySelector('#text' + index);
            window.scrollTo(0, anchor.offsetTop);
        }
    }
};
</script>
<style lang="scss" scoped>
    @import "~scss/pages/system";
    .container{
        display: flex;
    }
</style>
