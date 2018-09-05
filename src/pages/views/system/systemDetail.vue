<template lang="pug">
    .page-system-detail
        infoBanner
        .container
            //- .menu-left
            //-     .menu-left-header
            //-         span.ml20 爱心社区 / 
            //-         span.f16 &nbsp Caring community 
            //-     .menu-left-body
            //-         .menu-list(v-for="n in 1")
            //-             .menu-list-img
            //-                 img(src="https://static.mum5.cn/data/default_Xl5YxUf.png")
            //-             .menu-list-info
            //-                 a
            //-                     span 深锐观察：智能家居如何走向平民化？
            .system-content
                .system-wrap
                    .system-body-info.p10
                        .cutoff-line
                          p(v-html="System.m.introduction")

                        .cutoff-line
                            h4 相关案例
                            .line
                        .system-content-text(id="text4")
                            .scene-list
                                ul
                                    li(v-for="x in System.m.systemCases")
                                        router-link(:to="{name: 'systemCaseDetail', params: {id: x.id}}")
                                            .scene-info
                                                span [ 相关案例 ]
                                                span {{ x.title }}
                                            span {{ x.created }}


            menu-box(:menuData="menuData")
            //- .dot-menu
            //-     ul
            //-         li( v-for="(item,index) in dotMenu" :class="{active: activeDotTab===index}" @click="handDot(index)")
            //-             .dot
            //-             span {{item}}


</template>
<script lang="ts" src="./systemDetail.ts">
</script>
<style lang="scss">
    @import "~scss/pages/views/system/system-detail";
</style>
