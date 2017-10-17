<template lang="pug">
    .page-case-list.container
        info-banner
        .case-list-content.tc
            h2.case-list-title 案例展示
                p CASE DEMONSTRATION
            ul.case-list-box
                li.case-list-item
                    .image-list-box
                        img.case-item-image(src="")
        piclook(ref="picklool")
</template>
<style lang="scss">
    @import '~scss/pages/views/home/case-list';
</style>
<script>
    import { infoBanner, piclook }   from 'components';
    import { caseDemon }    from 'apis';

    // 资讯生活-公司新闻页面
    export default{
        name: 'case-list',
        components: {
            infoBanner,
            piclook
        },
        created () {
            this.initData();
        },
        methods: {
            initData () {
                caseDemon.list().then(response => {
                    console.log('response', response);
                });
            }
        }
    };
</script>
