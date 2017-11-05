<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 联系我们
        .about-wrap.mt10.p15
            h4 企业理念：
            p.mb10 追求卓越，秉承经典！

            h4 企业精神：
            p.mb10 诚信、专业、创新、优质 !

            h4 服务宗旨：
            p.mb10 优异的工程品质，成熟的集成系统，完善的售后服务！

            h4 服务理念：
            p.mb10 以最小的成本，最贴心的服务，来迎接客户！

            h4 管理理念：
            p 以德载物，以人为本！

            h4 人才理念：
            p.mb10 德才兼备，品德优先，共同成长！

            h4 经营理念：
            p.mb10 润则惠及天下，达则恒心如一！

            h4 企业使命：
            p 推动数字化建筑工地进程
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class CorporateCulture extends Vue
{
}
</script>
