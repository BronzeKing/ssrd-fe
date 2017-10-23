<template lang="pug">
    div
        info-banner
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'systemCase' }") 案例展示
        .page-case-list.container
            .case-list-content.tc
                h2.case-list-title 案例展示
                    p CASE DEMONSTRATION
                ul.case-list-box
                    li.case-list-item(v-for="item in SystemCase.t.Records")
                        router-link(:to="{ name: 'systemCaseDetail', params: {id: item.id}}")
                            .image-list-box
                                //- el-row(:gutter="20")
                                //-     el-col(:span="12" v-for="item in CaseDemon.t.Records")
                                //-         .grid-content.bg-purple
                                img.case-item-image(:src="item.picture" @click="imageShow(item.picture)")
                                h5 {{item.title}}
                                p.fb.f16.mb5 项目描述
                                p.fb.f16.mb5 {{item.description}}
                                p.fb.f16.mb5 工程地点
                                p.fb.f16.mb5 {{item.address}}
                                p.fb.f16.mb5 工程内容
                                p.fb.f16.mb5(v-html="n2br(item.content)")
                                img.case-item-image(v-for="x in item.pictures" :src="x.image" @click="imageShow(x.image)")

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
            SystemCase.list();
        },
        methods: {

            // 放大图片
            imageShow (pic) {
                this.$refs.picklool.show({
                    images: [pic]
                });
            },
            go2Detail (item) {
                console.log(item);
            }
        }
    };
</script>
