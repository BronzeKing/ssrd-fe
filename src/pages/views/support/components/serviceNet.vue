<template lang="pug">
    div.about-corporate-culture
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/support' }") 服务与支持
                el-breadcrumb-item 服务网点
        .about-wrap.mt10.p15
            h4 全国服务专线
            p.mb10 技术支持热线：400-7777777
            p.mb10 监督投诉热线： 0755-77777777

            h4 深圳服务站
            p.mb10 地址： 深圳市龙岗区南湾街道丹竹头莲塘工业园2栋5楼南区      
            p.mb10 电话： 0755-77777777
            p.mb10 传真：0755-432123123
</template>
<script>
export default {
    name: 'serviceNet'
};
</script>
