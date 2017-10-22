<template lang="pug">
    .page-system
        .container
            .header 
                h1 方案展示
                p.font-lightgrey PROGRAM DISPLAY
            .systems-list.mt5
                router-link(v-for="(item, index) in System.t.Records.slice(0, 3)" :to="{ name:'systemDetail', params: { id: item.id} }")
                    .systems-item
                        i.iconfont.icon-shuzihua.font-sea
                        p.fb.f16.mb5 {{item.name}}
                        p {{item.summary.slice(0, 80)}}...
                        i.iconfont.icon-right.font-grey.f24
            .systems-list.mt30
                router-link(v-for="(item, index) in System.t.Records.slice(3, 6)" :to="{ name:'systemDetail', params: { id: item.id} }")
                    .systems-item
                        i.iconfont.icon-shujutubiao08.font-sea
                        p.fb.f16.mb5 {{item.name}}
                        p {{item.summary.slice(0, 80)}}...
                        i.iconfont.icon-right.font-grey.f24
</template>
<script>
    // 系统展示页面
    import  { System } from 'apis';
    export default{
        name: 'system',
        data () {
            return {
                System: System,
                icons: ['i.iconfont.icon-shuzihua.font-sea', 'i.iconfont.icon-tubiao01.font-sea', 'i.iconfont.icon-shipinjiankong.font-sea', 'i.iconfont.icon-shujutubiao08.font-sea', 'i.iconfont.icon-cheliangchuruchaxun.font-sea', 'i.iconfont.icon-anquan.font-sea']
            };
        },
        created () {
            System.list();
        }
    };
</script>
<style lang="scss" scoped>
@import "~scss/pages/system";
    .page-system{
        background: #fff;
    }
    
</style>
