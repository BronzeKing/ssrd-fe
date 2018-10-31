<template lang="pug">
    div.about-contact-us
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 联系我们
        .about-wrap.mt10
            //- h3.about-title.p15 联系我们
            div.p15
                .company-info-wrapper
                    .company-info-aside
                        h3 联系方式
                        p
                            span.company-info-item 
                                i.iconfont.icon-telephone
                                | 总机：{{AboutUs.m.tel}}
                            span.company-info-item 
                                i.iconfont.icon-fax
                                | 传真：{{AboutUs.m.fax}}
                            span.company-info-item 
                                i.iconfont.icon-mail
                                | 邮箱：{{AboutUs.m.email}}
                            span.company-info-item 
                                i.iconfont.icon-postcode
                                | 邮编：{{AboutUs.m.postcode}}
                            
                    .company-info-aside
                        h3 24小时客服热线
                        p
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询1：{{AboutUs.m.tel}}
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询2：{{AboutUs.m.tel}}
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询3：{{AboutUs.m.tel}}
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询4：{{AboutUs.m.tel}}
                    p.f12 
                        i.iconfont.icon-map
                        | 地址：{{AboutUs.m.address}}
                //- img(src="~assets/address_mark.png")
                baidu-map(id="bd-map" ak="BAIDU_MAP" @ready="onMapReady" :center="center" :zoom="mapZoom" :scroll-wheel-zoom="true")
                    bm-marker(:position="center" animation="BMAP_ANIMATION_BOUNCE")
                        bm-label(content="深圳市盛世润达智能科技有限公司" :labelStyle="{color: '#333', fontSize : '16px', borderColor: '#333'}" :offset="{width: -35, height: 30}")
                    bm-geolocation(class="map-geolocation" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true")
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { AboutUs } from 'src/apis';

import { BaiduMap, BmGeolocation, BmMarker, BmLabel } from 'vue-baidu-map';
import { baiduMapAk } from 'settings';

@Component({
    components: {
        BaiduMap,
        BmGeolocation,
        BmMarker,
        BmLabel
    }

})
export default class ContactUs extends Vue
{
    @Provide() AboutUs = AboutUs;
    @Provide() BAIDU_MAP: string = baiduMapAk;
    @Provide() center: {lng: number, lat: number}=  {
                lng: 114.154858,
                lat: 22.634009
            }
    @Provide() mapZoom: number = 15;
    protected created(): void {
        AboutUs.retrieve();
    }
};
</script>
<style lang="scss">
// F:\Work Object\ssrd-fe\src\scss\pages\views\about\contact-us.scss
    @import '~scss/pages/views/about/contact-us';
</style>

