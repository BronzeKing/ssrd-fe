<template lang="pug">
    .guide-page
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/abount' }") 关于我们
                el-breadcrumb-item 合作指南
        .about-wrap.mt10
            p.f20.fb.pt10 合作条件
            .guide-header
                .condition-container
                    .condition-left
                        img(src='~assets/map.png')
                        .btn-box
                            p 精诚守信、平等共赢
                            p 资源共享、共同发展
                            el-button.mt20(type="primary") 立即合作
                    .condition-right
                        p 认可并接受盛世润达的管理理念（品牌运作体系、价格体系、服务体系）、软件产品质量、
                        p 研发能力，能够积极推广盛世润达的软件和产品的独立经济实体；
                        p.mt15 具有一定建筑市场资源，对所在区域的市场有清晰的认识和掌控能力；
                        p.mt15 具有建筑行业的相关技术背景，能深入地理解并传播产品的理念；
                        p.mt15 拥有健全的销售、服务、培训团队。
            .guide-body.mt30
                p.f20.fb.pt10 合作模式
                p 根据不同的合作目标，分三类合作模式，最终实现"双赢"
                .img-list.mt20
                    .img-item(v-for="item in 3" :key="item")
                        .img-content
                        .pattern-title
                            b.f14 商务合作
                            span.f12 分享销售收益


</template>
<script lang="ts">

</script>
<style lang="scss">
    @import '~scss/pages/views/about/guide'
</style>
