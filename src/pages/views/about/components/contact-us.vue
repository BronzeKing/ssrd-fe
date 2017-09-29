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
                                | 总机：0755-82182153
                            span.company-info-item 
                                i.iconfont.icon-fax
                                | 传真：0755-82226563
                            span.company-info-item 
                                i.iconfont.icon-mail
                                | 邮箱：2669607714@qq.com
                            span.company-info-item 
                                i.iconfont.icon-postcode
                                | 邮编：57800
                            
                    .company-info-aside
                        h3 24小时客服热线
                        p
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询1：0755-82182153
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询2：0755-82182153
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询3：0755-82182153
                            span.company-info-item 
                                i.iconfont.icon-tel
                                | 业务咨询4：0755-82182153
                    p.f12 
                        i.iconfont.icon-map
                        | 地址：广东省深圳市龙岗区南湾街道丹竹头康正路48号莲塘工业区2栋5楼(南区)
                //- img(src="~assets/address_mark.png")
                baidu-map(id="bd-map" ak="BAIDU_MAP" @ready="onMapReady" :center="center" :zoom="mapZoom" :scroll-wheel-zoom="true")
                    bm-marker(:position="center" animation="BMAP_ANIMATION_BOUNCE")
                        bm-label(content="深圳市盛世润达智能科技有限公司" :labelStyle="{color: '#333', fontSize : '16px', borderColor: '#333'}" :offset="{width: -35, height: 30}")
                    bm-geolocation(class="map-geolocation" anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true")
</template>
<script>
import { BaiduMap, BmGeolocation, BmMarker, BmLabel } from 'vue-baidu-map';
import { baiduMapAk } from 'settings';

export default {
    name: 'contact-us',
    data () {
        return {
            BAIDU_MAP: baiduMapAk,
            center: {
                lng: 114.148380,
                lat: 22.627980
            },
            mapZoom: 15
        };
    },
    components: {
        BaiduMap,
        BmGeolocation,
        BmMarker,
        BmLabel
    },
    methods: {
        onMapReady (e) {
            console.log(e);
        }
    }
};
</script>
<style lang="scss">
// F:\Work Object\ssrd-fe\src\scss\pages\views\about\contact-us.scss
    @import '~scss/pages/views/about/contact-us';
</style>

