<template lang="pug">
    .page-system
        info-banner
        .container
            .header 
                h1 方案展示
                p.font-lightgrey PROGRAM DISPLAY
            .systems-list.mt5
                router-link(v-for="(item, index) in System.t.Records.slice(0, 3)" :key="item.id" :to="{ name:'systemDetail', params: { id: item.id} }")
                    .systems-item
                        i(class="iconfont font-sea" :class="icons[item.name]")
                        p.fb.f16.mb5 {{item.name}}
            .systems-list.mt30
                router-link(v-for="(item, index) in System.t.Records.slice(3, 6)" :key="item.id" :to="{ name:'systemDetail', params: { id: item.id} }")
                    .systems-item
                        i(class="iconfont font-sea" :class="icons[item.name]")
                        p.fb.f16.mb5 {{item.name}}

            .header 
                router-link(:to="{name: 'systemCase'}")
                    h1 案例展示
                    p.font-lightgrey CASE DEMONSTRATION
            ul.system-case-demon
                li.case-demon-item(v-for="item in SystemCase.t.Records")
                    router-link(:to="{name: 'systemCaseDetail', params: {id: item.id}}")
                        div.case-demon-item-img(:style="{backgroundImage: `url(${item.picture})`}")
                        p.case-demon-item-title {{item.title}}
</template>
<script lang="ts">
// 系统展示页面
import { Component, Provide, Vue } from 'vue-property-decorator';
import { System, SystemCase } from 'src/apis';
import { infoBanner }   from 'components';

@Component({
    components: {
        infoBanner
    }
})
export default class SystemView extends Vue
{
    @Provide() System = System;
    @Provide() SystemCase = SystemCase;
    @Provide() icons = {云端数字化管理平台:'icon-shuzihua', 可视化劳务管理:'icon-tubiao01', 智能化视频监控:'icon-shipinjiankong', 综合数据采集远程传输:'icon-shujutubiao08', 专业工地车辆出入管理:'icon-cheliangchuruchaxun', 塔机安全防碰撞系统:'icon-anquan'};
    protected created () {
        System.list();
        SystemCase.list();
    }
};
</script>
<style lang="scss">
@import "~scss/pages/views/system/system";
    .page-system{
        background: #fff;
    }
    
</style>
