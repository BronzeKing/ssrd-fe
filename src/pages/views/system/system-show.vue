<template lang="pug">
    .page-system
        .container
            .header 
                h1 方案展示
                p.font-lightgrey PROGRAM DISPLAY
            .systems-list.mt5
                router-link(:to="{ path:'systemContainer', query: { id:  0} }")
                    .systems-item
                        i.iconfont.icon-shuzihua.font-sea
                        p.fb.f16.mb5 云端数字化管理平台
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
                router-link(:to="{ path:'systemContainer', query: { id:  1} }")
                    .systems-item.line
                        i.iconfont.icon-tubiao01.font-sea
                        p.fb.f16.mb5 可视化劳务管理
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
                router-link(:to="{ path:'systemContainer', query: { id:  2} }")
                    .systems-item
                        i.iconfont.icon-shipinjiankong.font-sea
                        p.fb.f16.mb5 智能化视频监控
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
            .systems-list.mt30
                router-link(:to="{ path:'systemContainer', query: { id:  3} }")
                    .systems-item
                        i.iconfont.icon-shujutubiao08.font-sea
                        p.fb.f16.mb5 综合数据采集远程传输
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
                router-link(:to="{ path:'systemContainer', query: { id:  4} }")
                    .systems-item.line
                        i.iconfont.icon-cheliangchuruchaxun.font-sea
                        p.fb.f16.mb5 专业工地车辆出入管理
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
                router-link(:to="{ path:'systemContainer', query: { id:  5} }")
                    .systems-item
                        i.iconfont.icon-anquan.font-sea
                        p.fb.f16.mb5 塔机安全防碰撞系统
                        p 多媒体教学设备一般由计算机、投影机、电控幕布、影碟机、实物展台等多个媒体设备组合而成......
                        i.iconfont.icon-right.font-grey.f24
</template>
<script>
    // 系统展示页面
    import  { systemDemonstrations } from 'apis';
    export default{
        name: 'system-show',
        data () {
            return {
            };
        },
        mounted () {
            this.getData();
        },
        methods: {
            getData () {
                systemDemonstrations.list({
                    PageIndex: 1,
                    PageSize: 12
                }).then(res => {
                    /* eslint-disable */
                    console.log(res);
                    /* eslint-enable */
                });
            }
        }
    };
</script>
<style lang="scss" scoped>
@import "~scss/pages/system";
    .page-system{
        background: #fff;
    }
    
</style>