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
                .case-main-image
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
            
            p.mt20.f18 主要应用系统
            .line
            .scroll-item
                i.iconfont.icon-arrow-left.font-grey(@click="scrollLeft")
                .case-item-image(ref="scrollBox")
                   div(v-for="x in SystemCase.m.systems")
                        router-link(:to="{name: 'systemDetail', params: {id: x.id}}")
                            div.image-container
                                img(:name="x.name" :src="x.picture" @click="imageShow(x.picture)")
                                .img-info
                                    p {{x.name}}
                i.iconfont.icon-arrow-right.font-grey(@click="scrollRight")
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
                line-height: 1.4;
            }
            .case-main-image{
                width: 500px;
                img{
                    width: 100%;
                }
            }
            .case-info{
                width: 650px;
            }
        }
        .scroll-item{
            display: flex;
            align-items: center;
            .case-item-image{
                display: flex;
                overflow: hidden;
                align-items: center;
                position: relative;
                img{
                    width: 50%;
                }
                .image-container{
                    position: relative;
                    margin-right: 10px;
                    width: 235px;
                    height: 155px;
                    .img-info{
                        height: 30px;
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background: rgba(0,0,0,0.5);
                        color: #fff;
                        text-align: center;
                        line-height: 30px;
                    }
                }
            }
            .iconfont{
                font-size: 32px;
                cursor: pointer;
                margin: 0 10px;
            }
        }
        .case-item-image{
            display: flex;
        }
        .line{
            border-top: 1px solid #E5E5E5; 
            margin: 10px 0 20px;
            width: 100%;
        }
    }
</style>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { infoBanner, piclook }   from 'components';
import { SystemCase }    from 'apis';

    // 资讯生活-公司新闻页面
@Component({
    components: {
        infoBanner,
        piclook
    }
})
export default class SystemCaseDetail extends Vue
{
    @Provide() SystemCase: any = SystemCase;
    @Provide() $refs: {
        picklool: piclook,
        scrollBox: any
    };
    protected created () {
            SystemCase.retrieve({id: this.$route.params.id});
    };
    imageShow (pic: any) {
        this.$refs.picklool.show({
            images: [pic]
        });
    };
    scrollLeft () {
        let time = 0;
        let timer = setInterval(() => {
            time++;
            this.$refs.scrollBox.scrollLeft -= 5;
            if (time > 50) {
                clearInterval(timer);
            }
        }, 5);
    }
    scrollRight () {
        let time = 0;
        let timer = setInterval(() => {
            time++;
            this.$refs.scrollBox.scrollLeft += 5;
            if (time > 50) {
                clearInterval(timer);
            }
        }, 5);
    }
}
</script>
