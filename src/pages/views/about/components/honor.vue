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
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Documents } from 'apis';
import { piclook }   from 'components';

@Component
({
    components:{
       piclook 
    }
})
export default class Honor extends Vue
{
    @Provide() Documents = Documents;
    @Provide() $refs = {
        picklool: piclook
    };
    created (): void {
        Documents.list({source: 0, pageSize: 100});
    }
    imageShow (pic: any) {
        this.$refs.picklool.show({
            images: [pic]
        });
    }
};
</script>
<style lang="scss">
    @import '~scss/pages/views/about/honor'
</style>
