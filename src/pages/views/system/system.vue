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
                        i(class="iconfont font-sea" :class="icons[index]")
                        p.fb.f16.mb5 {{item.name}}
                        p.system-introduce {{item.summary.slice(0, 80)}}...
                        i.iconfont.icon-right.font-grey.f24
            .systems-list.mt30
                router-link(v-for="(item, index) in System.t.Records.slice(3, 6)" :key="item.id" :to="{ name:'systemDetail', params: { id: item.id} }")
                    .systems-item
                        i(class="iconfont font-sea" :class="icons[index + 3]")
                        p.fb.f16.mb5 {{item.name}}
                        p {{item.summary.slice(0, 80)}}...
                        i.iconfont.icon-right.font-grey.f24
</template>
<script>
    // 系统展示页面
    import  { System } from 'apis';
    import { infoBanner }   from 'components';

    export default{
        name: 'system',
        data () {
            return {
                System: System,
                icons: ['icon-shuzihua', 'icon-tubiao01', 'icon-shipinjiankong', 'icon-shujutubiao08', 'icon-cheliangchuruchaxun', 'icon-anquan']
            };
        },
        components: {
            infoBanner
        },
        created () {
            System.list();
        }
    };
</script>
<style lang="scss">
@import "~scss/pages/views/system/system";
    .page-system{
        background: #fff;
    }
    
</style>
