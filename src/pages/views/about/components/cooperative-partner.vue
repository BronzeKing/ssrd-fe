<template lang="pug">
    .company-partner-page
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 合作伙伴
        .about-wrap.mt10
            ul.company-partner-list.p15
                li.company-partner-item(v-for="item in patnerList")
                    img.company-partner-image(:src="item.file")
</template>
<script>
import  { getDocuments } from 'apis';
export default{
    name: '',
    data () {
        return {
            patnerList: []
        };
    },
    created () {
        this.getDocuments();
    },
    methods: {
        // 获取合作伙伴
        getDocuments () {
            getDocuments({
                params:{
                    PageIndex: 1,
                    PageSize: 12,
                    source: 1
                }
            }).then(res => {
                res && (this.patnerList = res.Records);
            });
        }
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/company-partner'
</style>

