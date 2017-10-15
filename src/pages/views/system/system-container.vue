<template lang="pug">
    .page-system
        .about-banner
            img(src="~assets/about-banner.png")
        .container
            .system-content
                .system-wrap
                    .system-title
                        h2 行业现状
                    .system-top-info
                        .left-info.p10
                            .system-content-text
                                p 云计算和大数据的建立，是实现项目数字化管理的基础。
                            .system-content-text
                                p 建筑工地项目管理因其特殊性，数据的形成是零散不集中的，我们应用现在的管理模式，将每天产生的质量、安全、技术、物流、人流、管理信息流等数据上传到我们的云端，建立项目云数据，经过云端数字化处理，即可实现按需的、可计量的对基础架构物流、人流、信息流进行分配，实现对资源使用情况以及对事件的捕获和处理，达到劳务管理、器械管理、材料管理、方案与施工方法管理、生产与环境管理的目的，让施工现场更透明化呈现、更全面的互通互知、更深入的智能化，真正实现云端数字化项目管理。
                        .img-wrap
                            img(src="https://static.mum5.cn/banner2.png") 
                    .system-body-info.p10
                        h4 系统介绍：
                        .system-content-text
                            p 可视化劳务管理系统是由我司自主研发，它具有对人员进出、授权、查询、统计等多种功能，还可作为人事管理、勤管理、施工作业面管理以及项目成本管理，既方便内部人员或用户的自由出入，又杜绝外来人员随意进出，提高安全防范能力。该系统以劳动力资源共享为基础，采取业务统一规划、数据集中管理和分级应用的原则，覆盖劳务管理全过程，最终达成提高劳务管理效率，实现企业劳动力资源共享和统一调配，不断提高企业经济效益和企业竞争力的标
            menu-box(:menuData="menuData" @linkTo="linkTo")
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
            });
        },
        linkTo (data) {
            this.menuData.activeTab = data;
            this.$router.replace({ name:'systemContainer', query: {id: data} });
        },
        handleSelect (key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style lang="scss">
    @import "~scss/pages/system";
</style>