<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 结算购物车
        div

</template>
<script lang="ts" src="./settleCart.ts">
</script>
<style lang="scss">
    .project-detail-argbox{
        line-height: 50px;
        .detail-artbox-label{
            display: inline-block;
            min-width: 120px;
        }
    }
</style>