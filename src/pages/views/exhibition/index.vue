<template lang="pug">
    .page-exhibition
        info-banner(:image='image')
        .container
            .header 
                router-link(:to="{name: 'systemCase'}")
                    h1 案例展示
                    p.font-lightgrey CASE DEMONSTRATION
            ul.system-case-demon
</template>
<script lang="ts">
// 系统展示页面
import { Component, Provide, Vue } from 'vue-property-decorator';
import { infoBanner }   from 'components';

@Component({
    components: {
        infoBanner
    }
})
export default class ExhibitionView extends Vue
{
    @Provide()
    image = require('assets/exhibition.png')
};
</script>
<style lang="scss">
@import "~scss/pages/views/system/system";
    .page-exhibition{
        background: #fff;
    }
    
</style>
