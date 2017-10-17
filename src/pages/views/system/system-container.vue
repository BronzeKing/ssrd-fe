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
                                p {{activeTextInfo.summary}}
                        .img-wrap
                            img(:src="activeTextInfo.summaryPicture") 
                    .system-body-info.p10
                        .cutoff-line
                            h4 系统介绍：
                            .line
                        .system-content-text(id="text0")
                            p {{activeTextInfo.introduction}}
                        .cutoff-line
                            h4 系统结构
                            .line
                        .system-content-text(id="text1")
                            p {{activeTextInfo.structure}}
                        .cutoff-line
                            h4 功能特性
                            .line
                        .system-content-text(id="text2")
                            p {{activeTextInfo.funtionalFeature}}
                        .cutoff-line
                            h4 现场图片
                            .line
                        .system-content-text(id="text3")
                            .sceneImgList
                                .scene-img
                                    img(src="https://static.mum5.cn/data/default_Xl5YxUf.png") 
                                .scene-img
                                    img(src="https://static.mum5.cn/data/default_Xl5YxUf.png") 
                                .scene-img
                                    img(src="https://static.mum5.cn/data/default_Xl5YxUf.png") 
                        .cutoff-line
                            h4 相关案例
                            .line
                        .system-content-text(id="text4")
                            .scene-list
                                ul
                                    li(v-for="n in 5")
                                        a
                                            .scene-info
                                                span [ 相关案例 ]
                                                span 支付宝被限额：马云的移动支付梦想。。。。
                                            span 2017-09-24


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
import  { systems } from 'apis';
export default{
    name: 'system-container',
    data () {
        return {
            menuData: {
                menuList: [
                    '云端数字化管理平台',
                    '可视化劳务管理',
                    '专业车辆工地出入管理',
                    '智能化视频监控',
                    '综合数据采集远程传输',
                    '塔机安全防碰撞系统'
                ],
                menuInfo: {
                    name: '系统展示',
                    englishName: 'SYSTEM SHOW'
                },
                activeTab: 0
            },
            dotMenu: ['系统介绍', '系统结构', '功能特性', '现场图片', '相关案例'],
            activeDotTab: 0,
            textInfo: {},
            activeTextInfo: {
                introduction: '',
                structure: '',
                funtionalFeature: '',
                summary: '',
                summaryPicture: ''
            }
        };
    },
    components: {
        menuBox
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.menuData.activeTab = Number(vm.$route.query.id) || 0;
        });
    },
    mounted () {
        this.getData();
    },
    methods: {
        getData () {
            systems.list({
                PageIndex: 1,
                PageSize: 12
            }).then(res => {
                /* eslint-disable */
                console.log(res);
                /* eslint-enable */
                this.textInfo = res.Records;
                this.activeTextInfo = res.Records[this.menuData.activeTab];
            });
        },
        linkTo (data) {
            this.menuData.activeTab = data;
            this.$router.replace({ name:'systemContainer', query: {id: data} });
            this.activeTextInfo = this.textInfo[this.menuData.activeTab];
        },
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
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