<template lang="pug">
    .page-case-list.container
        info-banner
        .case-list-content.tc
            h2.case-list-title 案例展示
                p CASE DEMONSTRATION
            ul.case-list-box
                li.case-list-item(v-for="item in caseList")
                    .image-list-box
                        //- el-row(:gutter="20")
                        //-     el-col(:span="12" v-for="item in CaseDemon.table.Records")
                        //-         .grid-content.bg-purple
                        img.case-item-image(:src="item.picture" @click="imageShow(item.picture)")
                        //- el-col(:span="12")
                        //-     .grid-content.bg-purple
                        
        piclook(ref="picklool")
</template>
<style lang="scss">
    @import '~scss/pages/views/home/case-list';
</style>
<script>
    import { infoBanner, piclook }   from 'components';
    import { CaseDemon }    from 'apis';

    // 资讯生活-公司新闻页面
    export default{
        name: 'case-list',
        components: {
            infoBanner,
            piclook
        },
        created () {
            this.CaseDemon.list();
        },
        methods: {

            // 放大图片
            imageShow (pic) {
                console.log('pic', pic);
                this.$refs.picklool.show({
                    images: [pic]
                });
            }
        }
    };
</script>
