<template lang="pug">
    div
        .page-case-list.container
            info-banner
            .breadcrumb.mt10
                el-breadcrumb
                    el-breadcrumb-item(:to="{ path: '/' }") 首页
                    el-breadcrumb-item(:to="{ name: 'systemCase' }") 案例展示
            .case-list-content.tc
                h2.case-list-title.f28 案例展示
                    p CASE DEMONSTRATION
                ul.case-list-box
                    li.case-list-item(v-for="item in SystemCase.t.Records")
                        router-link(:to="{ name: 'systemCaseDetail', params: {id: item.id}}")
                            .image-list-box
                                //- el-row(:gutter="20")
                                //-     el-col(:span="12" v-for="item in SystemCase.t.Records")
                                //-         .grid-content.bg-purple
                                img.case-item-image.mb5(:src="item.picture" @click="imageShow(item.picture)")
                                .case-item-image-show
                                    .image-show(v-for="x in item.pictures" @click="imageShow(x.image)")
                                        img(:src="x.image")
                                h2.mt10.mb10 {{item.title}}
                                p.fb.f16.mb5 项目描述
                                p.omit1.f16.mb10 {{item.description}}
                                p.fb.f16.mb5 工程地点
                                p.f16.mb10 {{item.address}}
                                p.fb.f16.mb5 工程内容
                                p.omit2.f16.mb10(v-html="n2br(item.content)")
                                

                                //- el-col(:span="12")
                                //-     .grid-content.bg-purple
                            
        piclook(ref="picklool")
</template>
<style lang="scss">
    @import '~scss/pages/views/home/case-list';
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
export default class SystemCaseView extends Vue
{
    @Provide() SystemCase: any = SystemCase;
    @Provide() $refs = {
        picklool: piclook
    };
    protected created () {
            SystemCase.list();
    };
    // 放大图片
    imageShow (pic: any) {
        this.$refs.picklool.show({
            images: [pic]
        });
    };
};
</script>
