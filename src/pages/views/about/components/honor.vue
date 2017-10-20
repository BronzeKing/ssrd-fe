<template lang="pug">
    .honor-page
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/abount' }") 关于我们
                el-breadcrumb-item 荣誉资质
        .about-wrap.mt10
            ul.honor-list.p15
                li.honor-item(v-for="item in Documents.t.Records")
                    img.honor-image(:src="item.file")
    
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
        Documents.list({source: 0});
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/honor'
</style>
