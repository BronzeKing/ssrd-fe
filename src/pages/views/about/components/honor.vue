<template lang="pug">
    .honor-page
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/abount' }") 关于我们
                el-breadcrumb-item 荣誉资质
        .about-wrap.mt10
            ul.honor-list.p15
                li.honor-item(v-for="item in honors")
                    img.honor-image(:src="item.file")
    
</template>
<script>
import  { documents } from 'apis';
export default{
    name: '',
    data () {
        return {
            honors: []
        };
    },
    created () {
        documents.list({source: 0, PageSize: 6}).then(res => {
            res && (this.honors = res.Records);
        });
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/honor'
</style>
