<template lang="pug">
    .company-partner-page
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 合作伙伴
        .about-wrap.mt10
            ul.company-partner-list.p15
                li.company-partner-item(v-for="item in Documents.t.Records")
                    img.company-partner-image(:src="item.file")
</template>
<script>
import  { Documents } from 'apis';
export default{
    name: '',
    data () {
        return {
            Documents: Documents
        };
    },
    created () {
        Documents.list({source: 1});
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/company-partner'
</style>

