<template lang="pug">
    div
        .page-case-detail.container
            info-banner
            .breadcrumb.mt10
                el-breadcrumb
                    el-breadcrumb-item(:to="{ path: '/' }") 首页
                    el-breadcrumb-item(:to="{ name: 'systemCase' }") 案例展示
                    el-breadcrumb-item {{SystemCase.m.title}}
            .line
            .case-list-content
                .case-item-image
                    img(:src="SystemCase.m.picture" @click="imageShow(SystemCase.m.picture)")
                .case-info
                    h2 {{SystemCase.m.title}}
                    .line
                    p.fb.f16.mb5 项目描述
                    p.f16.mb10 {{SystemCase.m.description}}
                    p.fb.f16.mb5 工程地点
                    p.f16.mb10 {{SystemCase.m.address}}
                    p.fb.f16.mb5 工程内容
                    p.f16.mb10(v-html="n2br(SystemCase.m.content)")
            
            p.mt20.f18 主要应用产品
            .line
            .case-item-image
                div(v-for="x in SystemCase.m.products")
                    router-link(:to="{name: 'productDetail', params: {id: x.id}}")
                        img(:name="x.name" :src="x.background" @click="imageShow(x.background)")
                        p {{x.name}}

            p.f18.mt20 现场图片   
            .line
            .case-item-image.mb15
                img(v-for="x in SystemCase.m.pictures" :src="x.image" @click="imageShow(x.image)")
        piclook(ref="picklool")
</template>
<style lang="scss">
    .page-case-detail{
        .case-list-content{
            display: flex;
            justify-content: space-between;
            p{
                color: #48576a;
            }
            .case-item-image{
                width: 500px;
                img{
                    width: 100%;
                }
            }
            .case-info{
                width: 650px;
            }
        }
        .case-item-image{
            display: flex;
            img{
                margin-right: 10px;
            }
        }
        .line{
            border-top: 2px solid #E5E5E5; 
            margin: 10px 0 20px;
            width: 100%;
        }
    }
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
