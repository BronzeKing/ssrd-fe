<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item 首页
                el-breadcrumb-item 关于我们
                el-breadcrumb-item 公司简介
        .about-wrap.mt10
            h3.about-title.p15 公司简介
            div.p15
                p.about-content-text 深圳市盛世润达智能科技有限公司成立于2006年，是一家全国最早专注于数字化建筑工地技术研发、系统集成、工程服务的高新技术产业公司，随着建筑工地劳务、器械、材料、工法、环境等方面信息化、精细化管理日益深入，经济效益逐渐显现，使得数字化工地管理更为普及，数字化工地概念、数字化工地模式已在全方位形成，是建筑工地未来发展的必然方向，在这方面，我们始终努力走在前沿。
                div.img-wrap
                    img(src="~assets/robt.png")
                p.about-content-text 公司秉承“润则汇集天下，达则恒心如一”的经营理念，凭借专业水平和成熟的技术，逐步自助研发出针对土建工地需求的云端数字化管理平台体系，诸如可视化劳务管理、智能化视频监控、综合数据采集远程传输、专业工地车辆出入管理、塔机安全防碰撞系统、实测实量、多媒体音视频输出体系、LED大屏综合输出、综合材料质量检测、综合工地办公网络系统、综合建筑工地安全防范等。
                p.about-content-text 公司成立多年，通过自身努力、勤奋与探索，打造出一批各个技术领域的自身工程师和一支技术精湛的标准化施工队伍，使得公司在整个建筑技术智能化集成方面具有一流的设计、一流的施工及一流的维护。
                p.about-content-text 为给客户提供更高效、更便捷的服务，我司倾力打造的集客户需求、系统设计、工程销售、售后服务、在线查询与一体的网络服务平台，实现了公司服务体系一站式服务。
</template>
<script>
    // 公司简介页面
    export default{
        name: 'company-profile'
    };
</script>
<style lang="scss">
    
</style>