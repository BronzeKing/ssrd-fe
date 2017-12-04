<template lang="pug">
    div.project-create
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 新建项目
        div
            el-row(:gutter="20")
                el-col(:span="8" class="project-create-item mb20" v-for="(item, index) in System.t.Records" :key="index")
                    router-link(:to="{name: 'projectCreateDetail', params: {id: item.id}}")
                        el-card(:body-style="{ padding: '0px' }")
                            div.project-create-image(:style="{backgroundImage: `url(${item.picture})`}")
                            div(style="padding: 14px;")
                                span {{item.name}}
                                div(class="bottom clearfix")
                                    el-button(type="text" class="button") 新建

</template>
<script lang="ts" src="./projectCreate.ts">
</script>

<style lang="scss">

.project-create{
    // 项目图标。
    .project-create-image{
        min-height: 204px;
        background-size: 40%;
        background-position: center center;
        background-repeat: no-repeat;
        // width: 100%;
        // display: block;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    // .image {
    //     width: 100%;
    //     display: block;
    // }
}


</style>
