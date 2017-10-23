<template lang="pug">
    div
        info-banner
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'systemCase' }") 案例展示
                el-breadcrumb-item {{SystemCase.m.title}}
        .page-case-list.container
            .case-list-content.tc
                h2.case-list-title 案例展示
                    p CASE DEMONSTRATION
                ul.case-list-box
                    .image-list-box
                        //- el-row(:gutter="20")
                        //-     el-col(:span="12" v-for="item in CaseDemon.t.Records")
                        //-         .grid-content.bg-purple
                        img.case-item-image(:src="SystemCase.m.picture" @click="imageShow(SystemCase.m.picture)")
                        h5 {{SystemCase.m.title}}
                        p.fb.f16.mb5 项目描述
                        p.fb.f16.mb5 {{SystemCase.m.description}}
                        p.fb.f16.mb5 工程地点
                        p.fb.f16.mb5 {{SystemCase.m.address}}
                        p.fb.f16.mb5 工程内容
                        p.fb.f16.mb5(v-html="n2br(SystemCase.m.content)")
                        img.case-item-image(v-for="x in SystemCase.m.products" :name="x.name" :src="x.background" @click="imageShow(x.background)")
                        img.case-item-image(v-for="x in SystemCase.m.pictures" :src="x.image" @click="imageShow(x.image)")

                                //- el-col(:span="12")
                                //-     .grid-content.bg-purple
                        
        piclook(ref="picklool")
</template>
<style lang="scss">
    @import '~scss/pages/views/home/case-list';
</style>
<script>
    import { infoBanner, piclook }   from 'components';
    import { SystemCase }    from 'apis';

    // 资讯生活-公司新闻页面
    export default{
        name: 'systemCase',
        components: {
            infoBanner,
            piclook
        },
        data () {
            return {
                SystemCase: SystemCase
            };
        },
        created () {
            SystemCase.retrieve({id: this.$route.params.id});
        },
        methods: {
            // 放大图片
            imageShow (pic) {
                this.$refs.picklool.show({
                    images: [pic]
                });
            }
        }
    };
</script>
