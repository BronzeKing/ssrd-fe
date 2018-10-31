<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 公司简介
        .about-wrap.mt10.p15(v-html="AboutUs.m.introduction")
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { AboutUs } from 'src/apis';

@Component
export default class CompanyProfile extends Vue
{
    @Provide() AboutUs = AboutUs;
    protected created(): void {
        AboutUs.retrieve();
    }
}
</script>
<style lang="scss">
    
</style>
class ModulePermission(models.Model):
    user = 1
    module = 'a,b,c'
