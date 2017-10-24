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
            //- .header 
            //-     h1 经典案例
            //-     p.font-lightgrey CLASSIC CASE

            .header 
                h1 案例展示
                p.font-lightgrey CASE DEMONSTRATION
            ul.system-case-demon
                li.case-demon-item(v-for="item in caseDemonData")
                    div.case-demon-item-img(:style="{backgroundImage: `url(${item.picture})`}")
                    p.case-demon-item-title {{item.title}}
</template>
<script>
    // 系统展示页面
    import  { System, systemDemonstrations } from 'apis';
    import { infoBanner }   from 'components';

    export default{
        name: 'system',
        data () {
            return {
                System: System,
                caseDemonData: [],
                icons: ['icon-shuzihua', 'icon-tubiao01', 'icon-shipinjiankong', 'icon-shujutubiao08', 'icon-cheliangchuruchaxun', 'icon-anquan']
            };
        },
        components: {
            infoBanner
        },
        created () {
            System.list();
            this.getCaseDemon();
        },

        methods:{
            getCaseDemon () {
                systemDemonstrations.list().then(response => {
                    response.RecordCount > 0 && (this.caseDemonData = response.Records);
                });
            }
        }
    };
</script>
<style lang="scss">
@import "~scss/pages/views/system/system";
    .page-system{
        background: #fff;
    }
    
</style>
