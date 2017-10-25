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
                    img.honor-image(:src="item.file" @click="imageShow(item.file)")
        piclook(ref="picklool")
</template>
<script>
import  { Documents } from 'apis';
import { piclook }   from 'components';
export default{
    name: '',
    components: {
        piclook
    },
    data () {
        return {
            Documents: Documents
        };
    },
    created () {
        Documents.list({source: 0});
    },
    methods: {
        imageShow (pic) {
            this.$refs.picklool.show({
                images: [pic]
            });
        }
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/honor'
</style>
